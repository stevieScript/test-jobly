import React from 'react';
import {Button} from 'reactstrap';

function Home() {
	return (
		<div className='Home'>
			<h1>Jobly</h1>
			<p>All the jobs in one, convenient place.</p>
			<Button color='primary' href='/login'>
				Login
			</Button>
			<Button color='primary' href='/signup'>
				Signup
			</Button>
			{/* {localStorage.getItem('token') ? null : <Button href='/login'>Login</Button>} */}
		</div>
	);
}

export default Home;

