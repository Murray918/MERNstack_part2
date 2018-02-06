import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
//this was not in the tutorial but after going through the documentaion for redux-form it was apperant that
//an import is needed to accsess fields otherwise it is eternally undefined
import { Fields as fields } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		console.log('with in the sign in component here is the Email: ', email);
		console.log(
			'with in the sign in component here is the Password: ',
			password
		);
		this.props.signinUser({ email, password });
		//need to do somethingto log user in
	}

	render() {
		const { handleSubmit, fields: { email, password } } = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} className="form-control" />
				</fieldset>
				<button action="submit" className="btn btn-primary">
					Sign In
				</button>
			</form>
		);
	}
}

export default reduxForm(
	{
		form: 'signin',
		fields: ['email', 'password']
	},
	null,
	actions
)(Signin);
