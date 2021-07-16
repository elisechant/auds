import React from 'react';
import {withLayout} from '../helpers/withLayout';

const KeywordList = () => (
	<>
		<h1>Test: keyword-list</h1>


		<div className="split-wrapper">
			<div className="split au-body">
				<h2>keyword-list</h2>

				<p>Lorem ipsum dolor sit amet:</p>

				<ul className="au-keyword-list au-link-list">
					<li>
						<small className="au-keyword-list__small">Department of </small>Agriculture and Water Resources
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Communications and the Arts
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Communications
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Foobar
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Lorem
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Lorem ipsum dolor sit amet, consectetur
						adipisicing
						elit. Nisi qui praesentium fuga
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Barfoo
					</li>
				</ul>

				<p>End of list.</p>

				<hr/>
				<h2>keyword-list with links</h2>

				<p>Lorem ipsum dolor sit amet:</p>

				<ul className="au-keyword-list au-link-list">
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Agriculture and Water Resources
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Communications and the Arts
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Communications
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Foobar
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Lorem
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Nisi qui praesentium fuga
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Barfoo
						</a>
					</li>
				</ul>

				<p>End of list.</p>
			</div>
			<div className="split au-body au-body--dark">
				<h2>keyword-list <code>--dark</code></h2>

				<p>Lorem ipsum dolor sit amet:</p>

				<ul className="au-keyword-list au-keyword-list--dark au-link-list">
					<li>
						<small className="au-keyword-list__small">Department of </small>Agriculture and Water Resources
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Communications and the Arts
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Communications
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Foobar
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Lorem
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Lorem ipsum dolor sit amet, consectetur
						adipisicing
						elit. Nisi qui praesentium fuga
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Barfoo
					</li>
				</ul>

				<p>End of list.</p>

				<hr/>
				<h2>keyword-list with links <code>--dark</code></h2>

				<p>Lorem ipsum dolor sit amet:</p>

				<ul className="au-keyword-list au-keyword-list--dark au-link-list">
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Agriculture and Water Resources
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Communications and the Arts
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Communications
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Foobar
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Lorem
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Nisi qui praesentium fuga
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Barfoo
						</a>
					</li>
				</ul>

				<p>End of list.</p>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split au-body au-body--alt">
				<h2>keyword-list</h2>

				<p>Lorem ipsum dolor sit amet:</p>

				<ul className="au-keyword-list au-link-list">
					<li>
						<small className="au-keyword-list__small">Department of </small>Agriculture and Water Resources
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Communications and the Arts
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Communications
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Foobar
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Lorem
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Lorem ipsum dolor sit amet, consectetur
						adipisicing
						elit. Nisi qui praesentium fuga
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Barfoo
					</li>
				</ul>

				<p>End of list.</p>

				<hr/>
				<h2>keyword-list with links</h2>

				<p>Lorem ipsum dolor sit amet:</p>

				<ul className="au-keyword-list au-link-list">
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Agriculture and Water Resources
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Communications and the Arts
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Communications
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Foobar
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Lorem
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Nisi qui praesentium fuga
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Barfoo
						</a>
					</li>
				</ul>

				<p>End of list.</p>
			</div>
			<div className="split au-body au-body--alt au-body--dark">
				<h2>keyword-list <code>--dark</code></h2>

				<p>Lorem ipsum dolor sit amet:</p>

				<ul className="au-keyword-list au-keyword-list--dark au-link-list">
					<li>
						<small className="au-keyword-list__small">Department of </small>Agriculture and Water Resources
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Communications and the Arts
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Communications
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Foobar
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Lorem
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Lorem ipsum dolor sit amet, consectetur
						adipisicing
						elit. Nisi qui praesentium fuga
					</li>
					<li>
						<small className="au-keyword-list__small">Department of </small>Barfoo
					</li>
				</ul>

				<p>End of list.</p>

				<hr/>
				<h2>keyword-list with links <code>--dark</code></h2>

				<p>Lorem ipsum dolor sit amet:</p>

				<ul className="au-keyword-list au-keyword-list--dark au-link-list">
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Agriculture and Water Resources
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Communications and the Arts
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Communications
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Foobar
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Lorem
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Nisi qui praesentium fuga
						</a>
					</li>
					<li>
						<a href="#">
							<small className="au-keyword-list__small">Department of </small>Barfoo
						</a>
					</li>
				</ul>

				<p>End of list.</p>
			</div>
		</div>
	</>
);

export default withLayout(KeywordList);
