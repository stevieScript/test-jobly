import {Route, Routes} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import JoblyApi from './api';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
// import Profile from './components/Profile';
import Companies from './companies/Companies';
import CompanyDetail from './companies/CompanyDetail';
import Jobs from './jobs/Jobs';

function AppRoutes() {
	const [companies, setCompanies] = useState([]);
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		const getCompanies = async () => {
			const companies = await JoblyApi.getAllCompanies();
			const jobs = await JoblyApi.getJobs();
			setJobs(jobs);
			setCompanies(companies);
		};
		getCompanies();
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				{/* <Route
					path='/profile'
					element={<Profile />}
				/> */}
				<Route path='/companies' element={<Companies companies={companies} />} />
				<Route path='/companies/:handle' element={<CompanyDetail />} />
				<Route path='/jobs' element={<Jobs jobs={jobs} />} />
				{/* <Route
					path='/jobs/:id'
					element={<JobDetail />}
				/> */}
			</Routes>
		</div>
	);
}

export default AppRoutes;

