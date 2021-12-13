import React from 'react';
import { MOCK_DATA } from './Dashboard';
import ListCard from '../components/ListCard';

function UserProfile({ userInformation }) {
	return (
		<div className="PageWrapper B">
			<h1>User Profile</h1>
			<div className="BGBlur">
				<p>Email: {userInformation.email}</p>
				<p>NAME: {userInformation.displayName}</p>
				<p>UID: {userInformation.uid}</p>
			</div>
			<h1>My Posts</h1>
			<div className="card-container">
				{MOCK_DATA.map((list, i) => (
					<ListCard list={list} key={i} />
				))}
				{MOCK_DATA.map((list, i) => (
					<ListCard list={list} key={i} />
				))}
				{MOCK_DATA.map((list, i) => (
					<ListCard list={list} key={i} />
				))}
				{MOCK_DATA.map((list, i) => (
					<ListCard list={list} key={i} />
				))}
				{MOCK_DATA.map((list, i) => (
					<ListCard list={list} key={i} />
				))}
				{MOCK_DATA.map((list, i) => (
					<ListCard list={list} key={i} />
				))}
				{MOCK_DATA.map((list, i) => (
					<ListCard list={list} key={i} />
				))}
				{MOCK_DATA.map((list, i) => (
					<ListCard list={list} key={i} />
				))}
			</div>
		</div>
	);
}

export default UserProfile;
