import React from 'react';
import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import UserContext from '../auth/UserContext';
import {Form, Label, Input, Button, Alert} from 'reactstrap';

function Login() {
	const navigate = useNavigate();
	const {handleLogin} = useContext(UserContext);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const [formErrors, setFormErrors] = useState([]);

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		let result = await handleLogin(formData);
		if (result.success) {
			navigate('/companies');
		} else {
			setFormErrors(result.errors);
		}
	};

	const handleChange = (evt) => {
		const {name, value} = evt.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	return (
		<div className='Login'>
			<Form onSubmit={handleSubmit}>
				<Label for='username'>Username</Label>
				<Input
					type='text'
					name='username'
					id='username'
					placeholder='Username'
					value={formData.username}
					onChange={handleChange}
				/>
				<Label for='password'>Password</Label>
				<Input
					type='password'
					name='password'
					id='password'
					placeholder='Password'
					value={formData.password}
					onChange={handleChange}
				/>
				{formErrors.length ? (
					<Alert color='danger'>
						{formErrors.map((e) => (
							<div>{e}</div>
						))}
					</Alert>
				) : null}
				<Button color='primary'>Submit</Button>
			</Form>
		</div>
	);
}

export default Login;

