import {Form, Label, Button, Alert} from 'react-bootstrap';
import {useContext, useState} from 'react';
import UserContext from '../auth/UserContext';
import JoblyApi from '../api';
import {useHistory} from 'react-router-dom';

function Profile() {
	const {currentUser, setCurrentUser} = useContext(UserContext);
	const history = useHistory();
	const [formData, setFormData] = useState({
		username: currentUser.username,
		firstName: currentUser.firstName,
		lastName: currentUser.lastName,
		email: currentUser.email,
		password: '',
	});
	const [formErrors, setFormErrors] = useState([]);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let profileData = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				password: formData.password,
			};
			let username = formData.username;
			let updatedUser = await JoblyApi.updateUser(username, profileData);
			setCurrentUser(updatedUser);
			history.push('/companies');
		} catch (errors) {
			setFormErrors(errors);
		}
	};

	return (
		<div className='Profile'>
			<h2>Profile</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Label>Username</Label>
					<Form.Control
						type='text'
						name='username'
						value={formData.username}
						onChange={handleChange}
						disabled={true}
					/>
				</Form.Group>
				<Form.Group>
					<Label>First Name</Label>
					<Form.Control
						type='text'
						name='firstName'
						value={formData.firstName}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group>
					<Label>Last Name</Label>
					<Form.Control
						type='text'
						name='lastName'
						value={formData.lastName}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group>
					<Label>Email</Label>
					<Form.Control type='email' name='email' value={formData.email} onChange={handleChange} />
				</Form.Group>
				<Form.Group>
					<Label>Confirm password to make changes:</Label>
					<Form.Control
						type='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
					/>
				</Form.Group>
				{formErrors.length ? (
					<Alert variant='danger'>
						<Alert.Heading>Oops!</Alert.Heading>
						<ul>
							{formErrors.map((error) => (
								<li key={error}>{error}</li>
							))}
						</ul>
					</Alert>
				) : null}
				<Button variant='primary' type='submit'>
					Save Changes
				</Button>
			</Form>
		</div>
	);
}

export default Profile;

