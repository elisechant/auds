import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Breadcrumbs = () => (
	<>
		<h1>Test: breadcrumbs</h1>

		<div className="split-wrapper">
			<div className="split au-body">
				<h2>breadcrumbs</h2>

				<nav className="au-breadcrumbs" aria-label="breadcrumb">
					<ul className="au-link-list au-link-list--inline">
						<li><a href="#">Home</a></li>
						<li><a href="#">Parent</a></li>
						<li>Current page</li>
					</ul>
				</nav>
			</div>
			<div className="split au-body au-body--dark">
				<h2>breadcrumbs <code>--dark</code></h2>
				<nav className="au-breadcrumbs au-breadcrumbs--dark" aria-label="breadcrumb">
					<ul className="au-link-list au-link-list--inline au-link-list--dark">
						<li><a href="#">Home</a></li>
						<li><a href="#">Parent</a></li>
						<li>Current page</li>
					</ul>
				</nav>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split au-body au-body--alt">
				<h2>breadcrumbs</h2>

				<nav className="au-breadcrumbs" aria-label="breadcrumb">
					<ul className="au-link-list au-link-list--inline">
						<li><a href="#">Home</a></li>
						<li><a href="#">Parent</a></li>
						<li>Current page</li>
					</ul>
				</nav>
			</div>
			<div className="split au-body au-body--alt au-body--dark">
				<h2>breadcrumbs <code>--dark</code></h2>
				<nav className="au-breadcrumbs au-breadcrumbs--dark" aria-label="breadcrumb">
					<ul className="au-link-list au-link-list--inline au-link-list--dark">
						<li><a href="#">Home</a></li>
						<li><a href="#">Parent</a></li>
						<li>Current page</li>
					</ul>
				</nav>
			</div>
		</div>
	</>
);

export default withLayout(Breadcrumbs);
