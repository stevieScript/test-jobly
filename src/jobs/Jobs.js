import React from 'react';
import JobDetail from './JobDetail';

function Jobs({jobs}) {
	return (
		<div className='Jobs'>
			{jobs.map((job) => (
				<JobDetail key={job.id} job={job} />
			))}
		</div>
	);
}

export default Jobs;
