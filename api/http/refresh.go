package http

import (
	"fmt"
	"net/http"

	"github.com/18F/e-QIP-prototype/api"
)

// RefreshHandler is the handler for refreshing JWTs.
type RefreshHandler struct {
	Env      api.Settings
	Log      api.LogService
	Token    api.TokenService
	Database api.DatabaseService
}

// ServeHTTP refreshes a given token.
func (service RefreshHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	// Get account ID
	id := AccountIDFromRequestContext(r)

	// Generate a new token
	signedToken, _, err := service.Token.NewToken(id, service.Token.SessionIndex(r), service.Token.CurrentAudience(r))

	if err != nil {
		service.Log.WarnError(api.JWTError, err, api.LogFields{})
		RespondWithStructuredError(w, api.JWTError, http.StatusInternalServerError)
		return
	}

	// Send the new token with a more recent expiration
	fmt.Fprintf(w, signedToken)
}
