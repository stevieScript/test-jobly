import React from 'react';
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';

function CompanyCard({company}) {
	return (
		<Card className='CompanyCard'>
			<Link to={`/companies/${company.handle}`}>
				<h3>{company.name}</h3>
				<p>{company.description}</p>
			</Link>
		</Card>
	);
}

export default CompanyCard;

