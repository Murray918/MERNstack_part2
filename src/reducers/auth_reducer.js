export default function(state = {}, action) {
	switch (atcion.type) {
		case AUTH_USER:
			return { ...state, authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: true };
	}
	return state;
}
