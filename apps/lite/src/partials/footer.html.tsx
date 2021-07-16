import React from 'react';
import { withLayout } from '../helpers/withLayout';

const Footer = () => (
	<>
		<h1>Test: footer</h1>

		<h2>footer</h2>

		<footer className="au-footer" role="contentinfo">
			<nav className="au-footer__navigation" aria-label="footer">
				<p>au-footer__navigation</p>
			</nav>

			<div className="au-footer__end">
				<p>au-footer__end</p>
			</div>
		</footer>

		<h2>footer <code>--alt</code></h2>

		<footer className="au-footer au-footer--alt" role="contentinfo">
			<nav className="au-footer__navigation" aria-label="footer">
				<p>au-footer__navigation</p>
			</nav>

			<div className="au-footer__end">
				<p>au-footer__end</p>
			</div>
		</footer>

		<h2>footer <code>--dark</code></h2>

		<footer className="au-footer au-footer--dark" role="contentinfo">
			<nav className="au-footer__navigation" aria-label="footer">
				<p>au-footer__navigation</p>
			</nav>

			<div className="au-footer__end">
				<p>au-footer__end</p>
			</div>
		</footer>

		<h2>footer <code>--alt</code> <code>--dark</code></h2>

		<footer className="au-footer au-footer--alt au-footer--dark" role="contentinfo">
			<nav className="au-footer__navigation" aria-label="footer">
				<p>au-footer__navigation</p>
			</nav>

			<div className="au-footer__end">
				<p>au-footer__end</p>
			</div>
		</footer>

		<hr/>
		<h2>footer with paragraph test and body</h2>

		<div className="au-body">
			<footer className="au-footer" role="contentinfo">
				<nav className="au-footer__navigation" aria-label="footer">
					<p>au-footer__navigation</p>
					<p>au-footer__navigation</p>
					<p>au-footer__navigation</p>
				</nav>

				<div className="au-footer__end">
					<p>au-footer__end</p>
					<p>au-footer__end</p>
				</div>
			</footer>
		</div>

		<hr/>
		<h2>footer navigation only</h2>

		<footer className="au-footer" role="contentinfo">
			<nav className="au-footer__navigation" aria-label="footer">
				<p>au-footer__navigation</p>
			</nav>
		</footer>

		<hr/>
		<h2>footer end only</h2>

		<footer className="au-footer" role="contentinfo">
			<div className="au-footer__end">
				<p>au-footer__end</p>
			</div>
		</footer>

		<h2>footer with grid, link-list, responsive-embeds and headings</h2>

		<footer className="au-body au-footer" role="contentinfo">
			<div className="container">
				<nav className="au-footer__navigation row" aria-label="footer">
					<div className="col-md-3 col-sm-6">
						<h3 className="au-display-lg">Section</h3>
						<ul className="au-link-list">
							<li><a href="#">Link 1</a></li>
							<li><a href="#">Link 2</a></li>
							<li><a href="#">Link 3</a></li>
						</ul>
					</div>

					<div className="col-md-3 col-sm-6">
						<h3 className="au-display-lg">Section</h3>
						<ul className="au-link-list">
							<li><a href="#">Link 1</a></li>
							<li><a href="#">Link 2</a></li>
							<li><a href="#">Link 3</a></li>
						</ul>
					</div>

					<div className="col-md-3 col-sm-6">
						<h3 className="au-display-lg">Section</h3>
						<ul className="au-link-list">
							<li><a href="#">Link 1</a></li>
							<li><a href="#">Link 2</a></li>
							<li><a href="#">Link 3</a></li>
						</ul>
					</div>

					<div className="col-md-3 col-sm-6">
						<h3 className="au-display-lg">Section</h3>
						<ul className="au-link-list">
							<li><a href="#">Link 1</a></li>
							<li><a href="#">Link 2</a></li>
							<li><a href="#">Link 3</a></li>
						</ul>
					</div>
				</nav>
				<div className="row">
					<div className="col-sm-12">
						<div className="au-footer__end">
							<p>Footer text</p>

							<img className="au-responsive-media-img" src="http://placehold.it/157x80"
							     alt="Commonwealth Coat of Arms crest logo"/>

							<p><small>&copy; Commonwealth of Australia, <a
								href="https://github.com/govau/design-system-components/blob/master/LICENSE.md"
								rel="external license">MIT licensed</a></small></p>
						</div>
					</div>
				</div>
			</div>
		</footer>

		<footer className="au-footer au-body au-body--dark au-footer--dark" role="contentinfo">
			<div className="container">
				<nav className="au-footer__navigation row" aria-label="footer">
					<div className="col-md-3 col-sm-6">
						<h3 className="au-display-lg">Section</h3>
						<ul className="au-link-list">
							<li><a href="#">Link 1</a></li>
							<li><a href="#">Link 2</a></li>
							<li><a href="#">Link 3</a></li>
						</ul>
					</div>

					<div className="col-md-3 col-sm-6">
						<h3 className="au-display-lg">Section</h3>
						<ul className="au-link-list">
							<li><a href="#">Link 1</a></li>
							<li><a href="#">Link 2</a></li>
							<li><a href="#">Link 3</a></li>
						</ul>
					</div>

					<div className="col-md-3 col-sm-6">
						<h3 className="au-display-lg">Section</h3>
						<ul className="au-link-list">
							<li><a href="#">Link 1</a></li>
							<li><a href="#">Link 2</a></li>
							<li><a href="#">Link 3</a></li>
						</ul>
					</div>

					<div className="col-md-3 col-sm-6">
						<h3 className="au-display-lg">Section</h3>
						<ul className="au-link-list">
							<li><a href="#">Link 1</a></li>
							<li><a href="#">Link 2</a></li>
							<li><a href="#">Link 3</a></li>
						</ul>
					</div>
				</nav>
				<div className="row">
					<div className="col-sm-12">
						<div className="au-footer__end">
							<p>Footer text</p>

							<img className="au-responsive-media-img" src="http://placehold.it/157x80"
							     alt="Commonwealth Coat of Arms crest logo"/>

							<p><small>&copy; Commonwealth of Australia, <a
								href="https://github.com/govau/design-system-components/blob/master/LICENSE.md"
								rel="external license">MIT licensed</a></small></p>
						</div>
					</div>
				</div>
			</div>

		</footer>
	</>
);

export default withLayout(Footer);
