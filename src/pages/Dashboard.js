import React from 'react';
import ListCard from '../components/ListCard';

export const MOCK_DATA = [
	{
		strContent: 'Enter Title Here\n\nFirst Item\n\nSecond Item\n\nThird Item',
		userID: 'dfsdfj',
		userName: 'Lan',
		postID: 'dfsd',
	},
];

function Dashbroad() {
	return (
		<div className="PageWrapper">
			<h1>Dashboard</h1>
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

export default Dashbroad;
