import React from 'react';
import {withLayout} from '../helpers/withLayout';

const MainNav = () => (
	<>
		<h1>Test: main-nav</h1>

		<h2>Test: main-nav default</h2>

		<nav className="au-main-nav" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-nav-default" className="au-main-nav__content">
							<button
								aria-controls="main-nav-default"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return AU.mainNav.Toggle( this )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"/>
									<button
										aria-controls="main-nav-default"
										className="au-main-nav__toggle au-main-nav__toggle--close"
										// onClick="return AU.mainNav.Toggle( this )"
									>
										Close
									</button>
									<ul className="au-link-list">
										<li><a href="#">About</a></li>
										<li><a href="#">Get started</a></li>
										<li className="active"><a href="#" aria-current="page">Components</a></li>
										<li><a href="#">Templates</a></li>
										<li><a href="#">Community</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">Github</a></li>
										<li><a href="#">Download</a></li>
									</ul>
									<div className="au-main-nav__focus-trap-bottom"/>
								</div>
							</div>
							<div
								className="au-main-nav__overlay" aria-expanded="false"
								aria-controls="main-nav-default"
								// onClick="return AU.mainNav.Toggle( this )"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>


		<h2>Test: main-nav <code>alt</code></h2>
		<nav className="au-main-nav au-main-nav--alt" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="au-main-nav__content" id="main-nav-default-alt">
							<button
								aria-controls="main-nav-default-alt"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return AU.mainNav.Toggle( this )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"/>
									<button
										aria-controls="main-nav-default-alt"
										className="au-main-nav__toggle au-main-nav__toggle--close"
										// onClick="return AU.mainNav.Toggle( this )"
									>
										Close
									</button>
									<ul className="au-link-list">
										<li><a href="#">About</a></li>
										<li><a href="#">Get started</a></li>
										<li className="active"><a href="#" aria-current="page">Components</a></li>
										<li><a href="#">Templates</a></li>
										<li><a href="#">Community</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">Github</a></li>
										<li><a href="#">Download</a></li>
									</ul>
									<div className="au-main-nav__focus-trap-bottom"/>
								</div>
							</div>
							<div className="au-main-nav__overlay" aria-expanded="false" aria-controls="main-nav-default-alt"
								// onClick="return AU.mainNav.Toggle( this )"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>


		<h2>Test: main-nav <code>dark</code></h2>
		<nav className="au-main-nav au-main-nav--dark" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-nav-default-dark" className="au-main-nav__content">
							<button
								aria-controls="main-nav-default-dark"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return AU.mainNav.Toggle( this )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"/>
									<button
										aria-controls="main-nav-default-dark"
										className="au-main-nav__toggle au-main-nav__toggle--close"
										// onClick="return AU.mainNav.Toggle( this )"
									>
										Close
									</button>
									<ul className="au-link-list">
										<li><a href="#">About</a></li>
										<li><a href="#">Get started</a></li>
										<li className="active"><a href="#" aria-current="page">Components</a></li>
										<li><a href="#">Templates</a></li>
										<li><a href="#">Community</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">Github</a></li>
										<li><a href="#">Download</a></li>
									</ul>
									<div className="au-main-nav__focus-trap-bottom"></div>
								</div>
							</div>
							<div className="au-main-nav__overlay" aria-expanded="false" aria-controls="main-nav-default-dark"
								// onClick="return AU.mainNav.Toggle( this )"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>


		<h2>Test: main-nav <code>alt</code> <code>dark</code></h2>
		<nav className="au-main-nav au-main-nav--alt au-main-nav--dark" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-nav-default-dark-alt" className="au-main-nav__content">
							<button
								aria-controls="main-nav-default-dark-alt"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return AU.mainNav.Toggle( this )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"/>
									<button
										aria-controls="main-nav-default-dark-alt"
										className="au-main-nav__toggle au-main-nav__toggle--close"
										// onClick="return AU.mainNav.Toggle( this )"
									>
										Close
									</button>
									<ul className="au-link-list">
										<li><a href="#">About</a></li>
										<li><a href="#">Get started</a></li>
										<li className="active"><a href="#" aria-current="page">Components</a></li>
										<li><a href="#">Templates</a></li>
										<li><a href="#">Community</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">GitHub</a></li>
										<li><a href="#">Download</a></li>
									</ul>
									<div className="au-main-nav__focus-trap-bottom"/>
								</div>
							</div>
							<div className="au-main-nav__overlay" aria-expanded="false" aria-controls="main-nav-default-dark-alt"
								// onClick="return AU.mainNav.Toggle( this )"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>


		<h2>Test: main-nav <code>slow</code></h2>
		<nav className="au-main-nav au-main-nav--alt" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-nav-slow" className="au-main-nav__content">
							<button
								aria-controls="main-nav-slow"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return AU.mainNav.Toggle( this, 1000 )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"/>
									<button
										aria-controls="main-nav-slow"
										className="au-main-nav__toggle au-main-nav__toggle--close"
										// onClick="return AU.mainNav.Toggle( this, 1000 )"
									>
										Close
									</button>
									<ul className="au-link-list">
										<li><a href="#">About</a></li>
										<li><a href="#">Get started</a></li>
										<li className="active"><a href="#" aria-current="page">Components</a></li>
										<li><a href="#">Templates</a></li>
										<li><a href="#">Community</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">GitHub</a></li>
										<li><a href="#">Download</a></li>
									</ul>
									<div className="au-main-nav__focus-trap-bottom"/>
								</div>
							</div>
							<div className="au-main-nav__overlay" aria-expanded="false" aria-controls="main-nav-slow"
								// onClick="return AU.mainNav.Toggle( this, 1000 )"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>


		<h2>Test: main-nav with callbacks</h2>
		<nav className="au-main-nav au-main-nav--alt au-main-nav--dark" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-nav-callbacks" className="au-main-nav__content">
							<button
								aria-controls="main-nav-callbacks"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return MainNavCallback( this )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"/>
									<button
										aria-controls="main-nav-callbacks"
										className="au-main-nav__toggle au-main-nav__toggle--close"
										// onClick="return MainNavCallback( this )"
									>
										Close
									</button>
									<ul className="au-link-list">
										<li><a href="#">About</a></li>
										<li><a href="#">Get started</a></li>
										<li className="active"><a href="#" aria-current="page">Components</a></li>
										<li><a href="#">Templates</a></li>
										<li><a href="#">Community</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">GitHub</a></li>
										<li><a href="#">Download</a></li>
									</ul>
									<div className="au-main-nav__focus-trap-bottom"/>
								</div>
							</div>
							<div
								className="au-main-nav__overlay" aria-expanded="false" aria-controls="main-nav-callbacks"
								// onClick="return MainNavCallback( this )"
							></div>
						</div>
					</div>
				</div>
			</div>
		</nav>


		<h2>main-nav with header</h2>
		<header className="au-grid au-header au-header--dark" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<a className="au-header__brand" href="#">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">
									Service description that could be a little longer
								</div>
							</div>

						</a>
					</div>
				</div>
			</div>
		</header>
		<nav className="au-main-nav au-main-nav--dark" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-nav-header" className="au-main-nav__content">
							<button
								aria-controls="main-nav-header"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return AU.mainNav.Toggle( this )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"/>
									<button
										aria-controls="main-nav-header"
										className="au-main-nav__toggle au-main-nav__toggle--close"
										// onClick="return AU.mainNav.Toggle( this )"
									>
										Close
									</button>
									<ul className="au-link-list">
										<li><a href="#">About</a></li>
										<li><a href="#">Get started</a></li>
										<li className="active"><a href="#" aria-current="page">Components</a></li>
										<li><a href="#">Templates</a></li>
										<li><a href="#">Community</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">GitHub</a></li>
										<li><a href="#">Download</a></li>
									</ul>
									<div className="au-main-nav__focus-trap-bottom"/>
								</div>
							</div>
							<div className="au-main-nav__overlay" aria-expanded="false" aria-controls="main-nav-header"
								// onClick="return AU.mainNav.Toggle( this )"
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</>
);

export default withLayout(MainNav);
