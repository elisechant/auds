import React from 'react';
import {withLayout} from '../helpers/withLayout';

const SkipLink = () => (
	<>
		<nav className="au-skip-link" aria-label="skip links navigation">
			<a className="au-skip-link__link" href="#content">Skip to main content</a>
			<a className="au-skip-link__link" href="#nav">Skip to main navigation</a>
		</nav>

		<div className="au-body">
			<nav className="au-skip-link" aria-label="skip links navigation">
				<a className="au-skip-link__link" href="#content">Skip to main content wrapped in body</a>
				<a className="au-skip-link__link" href="#nav">Skip to main navigation wrapped in body</a>
			</nav>
		</div>

		<div className="au-body">
			<a className="test-link" href="../">&larr; back to the module index</a>

			<h1>Test: skip-link</h1>

			<p>This test file is unique in that the feature being tested is placed outside the <code>body</code> tag and is
				visually hidden by default.</p>

			<p>
				To test the skip-to main navigation and content links use the <kbd>Tab</kbd> key commencing from the address bar
				of
				your browser to key to the skip links.
			</p>

			<p>
				Following the main navigation link should take the user to <code>/#nav</code> while following the main content
				link
				the user should be taken to
				<code>/#content</code>.
			</p>

			<header>
				<h2>Navigation</h2>

				<nav id="nav" tabIndex={0} aria-label="skip links navigation">
					<ul>
						<li><a href="#">A navigation link</a></li>
						<li><a href="#">Another navigation link</a></li>
					</ul>
				</nav>
			</header>

			<main id="content" role="main" tabIndex={0}>
				<p>This is paragraph inside the main <a href="#">content</a> space (a <code>main</code> element).</p>
			</main>
		</div>
	</>
);

export default withLayout(SkipLink);
