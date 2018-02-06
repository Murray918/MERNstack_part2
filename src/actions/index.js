import axios from 'axios';
import { broweserHistory } from 'react-router';
const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
	return function(dispatch) {
		//Submit email and password to the server
		axios
			.post(`${ROOT_URL}/signin`, { email, password })
			//If the request is good
			.then(response => {
				//-update the state to indicate that the user is authenticated
				dispatch({ type: AUTH_USER });
				//-Save the jwt token
				//-Redirect to the route or feature
				broweserHistory.push('./feature');
			})
			//If the request is bad
			.catch(() => {});
		//-Show an error to the user
	};
}
