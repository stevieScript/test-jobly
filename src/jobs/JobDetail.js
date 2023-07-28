import React from 'react';
import {Card, Button} from 'reactstrap';
function JobDetail({job}) {
	return (
		<Card className='JobDetail'>
			<div className='card-body'>
				<h5 className='card-title'>{job.title}</h5>
				<p className='card-text'>Salary: {job.salary}</p>
				<p className='card-text'>Equity: {job.equity}</p>
				<Button color='primary'>Apply</Button>
			</div>
		</Card>
	);
}

export default JobDetail;

