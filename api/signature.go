package api

import (
	"encoding/json"
)

// Signature is a basic input.
type Signature struct {
	PayloadName Payload `json:"Name" sql:"-"`
	PayloadDate Payload `json:"Date" sql:"-"`

	// Validator specific fields
	Name *Text        `json:"-" sql:"-"`
	Date *DateControl `json:"-" sql:"-"`

	// Persister specific fields
	ID        int `json:"-"`
	AccountID int `json:"-"`
	NameID    int `json:"-"`
	DateID    int `json:"-"`
}

// Unmarshal bytes in to the entity properties.
func (entity *Signature) Unmarshal(raw []byte) error {
	err := json.Unmarshal(raw, entity)
	if err != nil {
		return err
	}

	name, err := entity.PayloadName.Entity()
	if err != nil {
		return err
	}
	entity.Name = name.(*Text)

	date, err := entity.PayloadDate.Entity()
	if err != nil {
		return err
	}
	entity.Date = date.(*DateControl)

	return err
}

// Marshal to payload structure
func (entity *Signature) Marshal() Payload {
	if entity.Name != nil {
		entity.PayloadName = entity.Name.Marshal()
	}
	if entity.Date != nil {
		entity.PayloadDate = entity.Date.Marshal()
	}
	return MarshalPayloadEntity("signature", entity)
}

// Valid checks the value(s) against an battery of tests.
func (entity *Signature) Valid() (bool, error) {
	var stack ErrorStack

	if ok, err := entity.Name.Valid(); !ok {
		stack.Append("Name", err)
	}

	if ok, err := entity.Date.Valid(); !ok {
		stack.Append("Date", err)
	}

	return !stack.HasErrors(), stack
}

// Save the signature to data storage.
func (entity *Signature) Save(context DatabaseService, account int) (int, error) {
	entity.AccountID = account

	if err := entity.Find(context); err != nil {
		return entity.ID, err
	}

	nameID, err := entity.Name.Save(context, account)
	if err != nil {
		return nameID, err
	}
	entity.NameID = nameID

	dateID, err := entity.Date.Save(context, account)
	if err != nil {
		return dateID, err
	}
	entity.DateID = dateID

	if err := context.Save(entity); err != nil {
		return entity.ID, err
	}

	return entity.ID, nil
}

// Delete the signature from data storage.
func (entity *Signature) Delete(context DatabaseService, account int) (int, error) {
	entity.AccountID = account

	if err := entity.Find(context); err != nil {
		return entity.ID, err
	}

	if entity.ID != 0 {
		if err := context.Delete(entity); err != nil {
			return entity.ID, err
		}
	}

	if _, err := entity.Name.Delete(context, account); err != nil {
		return entity.ID, err
	}

	if _, err := entity.Date.Delete(context, account); err != nil {
		return entity.ID, err
	}

	return entity.ID, nil
}

// Get the signature from data storage.
func (entity *Signature) Get(context DatabaseService, account int) (int, error) {
	entity.AccountID = account

	if entity.ID != 0 {
		if err := context.Select(entity); err != nil {
			return entity.ID, err
		}
	}

	if entity.NameID != 0 {
		entity.Name = &Text{ID: entity.NameID}
		if _, err := entity.Name.Get(context, account); err != nil {
			return entity.ID, err
		}
	}

	if entity.DateID != 0 {
		entity.Date = &DateControl{ID: entity.DateID}
		if _, err := entity.Date.Get(context, account); err != nil {
			return entity.ID, err
		}
	}

	return entity.ID, nil
}

// GetID returns the entity identifier.
func (entity *Signature) GetID() int {
	return entity.ID
}

// SetID sets the entity identifier.
func (entity *Signature) SetID(id int) {
	entity.ID = id
}

// Find the previous entity stored if one is available.
func (entity *Signature) Find(context DatabaseService) error {
	context.Find(&Signature{ID: entity.ID}, func(result interface{}) {
		previous := result.(*Signature)
		if entity.Name == nil {
			entity.Name = &Text{}
		}
		entity.NameID = previous.NameID
		entity.Name.ID = previous.NameID
		if entity.Date == nil {
			entity.Date = &DateControl{}
		}
		entity.DateID = previous.DateID
		entity.Date.ID = previous.DateID
	})
	return nil
}
