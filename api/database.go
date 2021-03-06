package api

import (
	"github.com/pkg/errors"
)

// DatabaseErrorNotFound is an error that indicates that the function failed because
// the seach returned zero results. It is expected to be returned by Select et al.
type DatabaseErrorNotFound string

func (d DatabaseErrorNotFound) Error() string {
	return string(d)
}

// IsDatabaseErrorNotFound returns true if the error is a DatabaseErrorNotFound error
func IsDatabaseErrorNotFound(err error) bool {
	if _, ok := errors.Cause(err).(DatabaseErrorNotFound); ok {
		return true
	}
	return false
}

// DatabaseService represents a persisted data storage.
type DatabaseService interface {
	Raw(query interface{}, params ...interface{}) error
	Find(query interface{}, callback func(query interface{}))
	FindAll(model interface{}) error
	Where(model interface{}, condition string, params ...interface{}) error
	ColumnsWhere(model interface{}, columns []string, condition string, params ...interface{}) error
	Insert(query ...interface{}) error
	Update(query interface{}) error
	Save(query ...interface{}) error
	Delete(query interface{}) error
	Select(query interface{}) error
	Count(model interface{}, condition string, params ...interface{}) int
	CountExpr(model interface{}, expr string, retval interface{}, condition string, params ...interface{})
	Array(model interface{}, expr string, retval interface{}, condition string, params ...interface{})
}
