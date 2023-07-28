import {Form, Label, Input, Button} from 'reactstrap';
import React, {useState, useContext} from 'react';
import UserContext from '../auth/UserContext';
import {useNavigate} from 'react-router-dom';
// import JoblyApi from '../api';
// import './Signup.css';

function Signup() {
	const navigate = useNavigate();
	const {handleSignup} = useContext(UserContext);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		email: '',
	});
	const [formErrors, setFormErrors] = useState([]);

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		let result = await handleSignup(formData);
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
		<div className='Signup'>
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
				<Label for='firstName'>First Name</Label>
				<Input
					type='text'
					name='firstName'
					id='firstName'
					placeholder='First Name'
					value={formData.firstName}
					onChange={handleChange}
				/>
				<Label for='lastName'>Last Name</Label>
				<Input
					type='text'
					name='lastName'
					id='lastName'
					placeholder='Last Name'
					value={formData.lastName}
					onChange={handleChange}
				/>
				<Label for='email'>Email</Label>
				<Input
					type='email'
					name='email'
					id='email'
					placeholder='Email'
					value={formData.email}
					onChange={handleChange}
				/>
				{formErrors.length ? (
					<div className='alert alert-danger'>
						{formErrors.map((error) => (
							<p className='mb-0 small' key={error}>
								{error}
							</p>
						))}
					</div>
				) : null}
				<Button>Submit</Button>
			</Form>
		</div>
	);
}

export default Signup;

