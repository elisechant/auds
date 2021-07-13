import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import AUsideNav from './side-nav.js';


const menu = [
	{
		link: '#',
		text: 'Do you need to lodge a tax return?',
	},
	{
		link: '#',
		text: 'Lodge online',
		children: [
			{
				link: '#',
				text: 'Pre-filling your online tax return',
			},
			{
				link: '#',
				text: 'Why you may receive a tax bill'
			},
			{
				link: '#',
				text: 'What is new for individuals'
			}
		]
	},
	{
		link: '#',
		text: 'In detail',
		children: [
			{
				link: '#',
				text: 'Record keeping',
				children: [
					{
						link: '#',
						text: 'Keeping your tax records',
						active: true
					},
					{
						link: '#',
						text: 'Incorrect amounts',
					}
				]
			}
		]
	},
	{
		link: '#',
		text: 'Tax receipt',
	},
	{
		link: '#',
		text: 'Pre-fill availability',
	}
];


// To manage side-nav with state just wrap it with a state
class SideNavWrapper extends React.Component {
	// for an example on what a state change might look like we have to add a state
	constructor() {
		super();

		this.state = {
			closed: false
		};
	}

	// let’s change the state in the absence of more complex application code
	toggleSideNav() {
		this.setState({ closed: !this.state.closed });
	}

	render() {
		return (
			<Fragment>
				<AUsideNav
					closed={ this.state.closed }
					accordionHeader="In this section"
					menuHeaderLink="#"
					menuHeader="Lodging your tax return"
					items={[
						{
							link: '#',
							text: 'Do you need to lodge a tax return?',
						},
						{
							link: '#',
							text: 'Tax receipts',
						},
					]}
					onOpen={ () => { this.toggleSideNav() }}
					onClose={ () => { this.toggleSideNav() }}
				/>

				<button
					className="au-side-nav-toggle"
					type="button"
					onClick={ () => { this.toggleSideNav() }}>
					Toggle side nav via state ( normally hidden on desktop )
				</button>
			</Fragment>
		);
	}
}


ReactDOM.render(
	<div>
		<div className="split-wrapper">
			<div className="split au-body">
				<AUsideNav
					accordionHeader="In this section"
					menuHeaderLink="#"
					menuHeader="Lodging your tax return"
					items={ menu }
				/>
			</div>
			<div className="split au-body au-body--alt">
				<AUsideNav
					alt
					accordionHeader="In this section"
					menuHeaderLink="#"
					menuHeader="Lodging your tax return"
					items={ menu }
				/>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split au-body au-body--dark">
				<AUsideNav
					dark
					speed={ 2000 }
					accordionHeader="In this section"
					menuHeaderLink="#"
					menuHeader="Lodging your tax return"
					items={ menu }
					onOpen={ () => console.log( 'open started' )}
					onClose={ () => console.log( 'close started' )}
					afterOpen={ () => console.log( 'open completed' )}
					afterClose={ () => console.log( 'close completed' )}
				/>
			</div>
			<div className="split au-body au-body--dark au-body--alt">
				<BrowserRouter basename={ window.location.pathname }>
					<Fragment>
						<AUsideNav
							dark
							alt
							linkComponent={ Link }
							accordionHeader="In this section"
							menuHeaderLink="#"
							menuHeader="React Router example"
							items={[
								{
									link: 'one',
									text: 'Change to route one',
								},
								{
									link: 'two',
									text: 'Change to route two',
								},
							]}
						/>
						<Switch>
							<Route path="/one" render={ () => ( <p>Route one</p> )} />
							<Route path="/two" render={ () => ( <p>Route two</p> )} />
						</Switch>
					</Fragment>
				</BrowserRouter>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split au-body">
				<SideNavWrapper />
			</div>
		</div>
	</div>,

	document.getElementById('root'),
);
