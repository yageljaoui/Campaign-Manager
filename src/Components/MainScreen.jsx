import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyCampaign from './MyCampaign';
import SearchTasks from './SearchTasks';
import OtherCampaigns from './OtherCampaigns';
import './myCampaign.css';

export default function MainScreen() {
	return (
		<Router>
			<div>
				<Link className='nav-item' to='/my-campaign'>
					My Campaign
				</Link>
				<Link className='nav-item' to='/other-campaigns'>
					Otheer Campaigns
				</Link>
				<Link className='nav-item' to='/search'>
					Search Tasks
				</Link>

				<Switch>
					<Route path='/my-campaign'>
						<MyCampaign />
					</Route>
					<Route path='/other-campaigns'>
						<OtherCampaigns />
					</Route>
					<Route path='/search'>
						<SearchTasks />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
