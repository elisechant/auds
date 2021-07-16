import React from 'react';
import {withLayout} from '../helpers/withLayout';

const LinkList = () => (
	<>
		<div className="split-wrapper">
			<div className="split au-body">
				<h1>Test: link-list</h1>

				<h2>Link list</h2>

				<ul className="au-link-list">
					<li><a href="#">Options</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Sign Out</a></li>
				</ul>

				<hr/>
				<h2>Link list inline</h2>

				<ul className="au-link-list au-link-list--inline">
					<li><a href="#">Options</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Sign Out</a></li>
				</ul>
			</div>
			<div className="split au-body au-body--dark">
				<h1>Test: link-list</h1>

				<h2>Link list</h2>

				<ul className="au-link-list">
					<li><a href="#">Options</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Sign Out</a></li>
				</ul>

				<hr/>
				<h2>Link list inline</h2>

				<ul className="au-link-list au-link-list--inline">
					<li><a href="#">Options</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Sign Out</a></li>
				</ul>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split au-body au-body--alt">
				<h1>Test: link-list</h1>

				<h2>Link list</h2>

				<ul className="au-link-list">
					<li><a href="#">Options</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Sign Out</a></li>
				</ul>

				<hr/>
				<h2>Link list inline</h2>

				<ul className="au-link-list au-link-list--inline">
					<li><a href="#">Options</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Sign Out</a></li>
				</ul>
			</div>
			<div className="split au-body au-body--alt au-body--dark">
				<h1>Test: link-list</h1>

				<h2>Link list</h2>

				<ul className="au-link-list">
					<li><a href="#">Options</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Sign Out</a></li>
				</ul>

				<hr/>
				<h2>Link list inline</h2>

				<ul className="au-link-list au-link-list--inline">
					<li><a href="#">Options</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Sign Out</a></li>
				</ul>
			</div>
		</div>
	</>
);

export default withLayout(LinkList);
