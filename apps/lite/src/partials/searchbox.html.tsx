import React from 'react';
import {withLayout} from '../helpers/withLayout';

const SearchBox = () => (
	<>
		<h1>Test: searchbox</h1>

		<div className="split-wrapper">

			<div className="split">

				<h2>Standard</h2>
				<form role="search" className="au-search au-form-group">
					<label htmlFor="standard" className="au-search__label">Enter a domain</label>
					<input type="search" id="standard" name="standard" className="au-text-input"/>
					<div className="au-search__btn">
						<button className="au-btn" type="submit"><span className="au-search__submit-btn-text">Search</span></button>
					</div>
				</form>


				<h2>Responsive</h2>

				<form role="search" className="au-search au-search--responsive au-form-group">
					<label htmlFor="responsive" className="au-search__label">Search</label>
					<input type="search" id="responsive" name="responsive" className="au-text-input"/>
					<div className="au-search__btn">
						<button className="au-btn"><span className="au-search__submit-btn-text">Search</span></button>
					</div>
				</form>

				<h2>Icon only</h2>

				<form role="search" className="au-search au-search--icon au-form-group">
					<label htmlFor="icon" className="au-search__label">Search</label>
					<input type="search" name="icon" id="icon" className="au-text-input"/>
					<div className="au-search__btn">
						<button className="au-btn"><span className="au-search__submit-btn-text">Search</span></button>
					</div>
				</form>

				<br/>
				<h2>Different text and visible label</h2>

				<label htmlFor="vis" className="au-label">Enter a domain</label>
				<form role="search" className="au-search au-form-group">
					<input type="search" name="vis" id="vis" className="au-text-input"/>
					<div className="au-search__btn">
						<button className="au-btn"><span className="au-search__submit-btn-text">Check availability</span></button>
					</div>
				</form>

			</div>

			<div className="split split--dark">
				<h2>Standard</h2>
				<form className="au-search au-search--dark au-form-group" role="search">
					<label htmlFor="standard-dark" className="au-search__label">Search</label>
					<input type="search" id="standard-dark" className="au-text-input au-text-input--dark "/>
					<div className="au-search__btn">
						<button className="au-btn au-btn--dark" type="submit"><span
							className="au-search__submit-btn-text">Search</span>
						</button>
					</div>
				</form>

				<h2>Responsive</h2>

				<form role="search" className="au-search au-search--dark au-search--responsive au-form-group">
					<label htmlFor="resp-dark" className="au-search__label">Search</label>
					<input type="search" id="resp-dark" className="au-text-input au-text-input--dark"/>
					<div className="au-search__btn">
						<button className="au-btn au-btn--dark"><span className="au-search__submit-btn-text">Search</span></button>
					</div>
				</form>

				<h2>Icon only</h2>
				<form role="search" className="au-search au-search--dark au-search--icon au-form-group">
					<label htmlFor="icon-dark" className="au-search__label">Search</label>
					<input type="search" id="icon-dark" className="au-text-input au-text-input--dark"/>
					<div className="au-search__btn">
						<button className="au-btn au-btn--dark"><span className="au-search__submit-btn-text">Search</span></button>
					</div>
				</form>

				<br/>
				<h2>Different text and visible label</h2>
				<label htmlFor="vis-dark" className="au-label au-label--dark">Enter a domain</label>
				<form role="search" className="au-search au-search--dark au-form-group">
					<input type="search" id="vis-dark" className="au-text-input au-text-input--dark"/>
					<div className="au-search__btn">
						<button className="au-btn au-btn--dark"><span
							className="au-search__submit-btn-text">Check availability</span></button>
					</div>
				</form>


			</div>
		</div>

		<br/><br/><br/>

		<h1> AU header with search</h1>
		<header className="au-grid au-header" role="banner">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-9">
						<a className="au-header__brand" href="#">
							<img className="au-header__brand-image" alt="Insert alternate text here"
							     src="https://designsystem.gov.au/assets/img/placeholder/600X260.png"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">
									Service description that could be a little longer
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-3 col-sm-6">
						<form role="search" className="au-search">
							<label htmlFor="standard-nav" className="au-search__label">Search</label>
							<input type="search" id="standard-nav" name="standard" className="au-text-input"/>
							<div className="au-search__btn">
								<button className="au-btn"><span className="au-search__submit-btn-text">Search</span></button>
							</div>
						</form>

					</div>
				</div>
			</div>
		</header>
		<nav className="au-main-nav" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-nav-default-plain" className="au-main-nav__content">
							<button
								aria-controls="main-nav-default-plain"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return AU.mainNav.Toggle( this )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"></div>
									<button
										aria-controls="main-nav-default-plain"
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
									</ul>
									<div className="au-main-nav__focus-trap-bottom"></div>
								</div>
							</div>
							<div
								className="au-main-nav__overlay"
								aria-controls="main-nav-default-plain"
								// onClick="return AU.mainNav.Toggle( this )"
							>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<br/><br/><br/>


		<h1> AU header with search DARK</h1>
		<header className="au-grid au-header au-header--dark" role="banner">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8">
						<a className="au-header__brand" href="#">
							<img className="au-header__brand-image" alt="Insert alternate text here"
							     src="https://designsystem.gov.au/assets/img/placeholder/600X260.png"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">
									Service description that could be a little longer
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-4">
						<form role="search" className="au-search au-search--dark">
							<label htmlFor="dark-nav" className="au-search__label">Search</label>
							<input type="search" id="dark-nav" name="dark-nav" className="au-text-input au-text-input--dark"/>
							<div className="au-search__btn">
								<button className="au-btn au-btn--dark"><span className="au-search__submit-btn-text">Search</span>
								</button>
							</div>
						</form>

					</div>
				</div>
			</div>
		</header>
		<nav className="au-main-nav au-main-nav--dark" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-nav-default-2" className="au-main-nav__content">
							<button
								aria-controls="main-nav-default-2"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return AU.mainNav.Toggle( this )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"></div>
									<button
										aria-controls="main-nav-default-2"
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
									</ul>
									<div className="au-main-nav__focus-trap-bottom"></div>
								</div>
							</div>
							<div
								className="au-main-nav__overlay"
								aria-controls="main-nav-default-2"
								// onClick="return AU.mainNav.Toggle( this )"
							>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>


		<h1> AU header with search responsive DARK</h1>
		<header className="au-grid au-header au-header--dark" role="banner">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8">
						<a className="au-header__brand" href="#">
							<img className="au-header__brand-image" alt="Insert alternate text here"
							     src="https://designsystem.gov.au/assets/img/placeholder/600X260.png"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">
									Service description that could be a little longer
								</div>
							</div>
						</a>
					</div>
					<div className="col-md-4">
						<form role="search" className="au-search au-search--responsive au-search--dark">
							<label htmlFor="dark-rsp-nav" className="au-search__label">Search</label>
							<input type="search" id="dark-rsp-nav" name="dark-rsp-nav" className="au-text-input au-text-input--dark"/>
							<div className="au-search__btn">
								<button className="au-btn au-btn--dark"><span className="au-search__submit-btn-text">Search</span>
								</button>
							</div>
						</form>

					</div>
				</div>
			</div>
		</header>
		<nav className="au-main-nav au-main-nav--dark" aria-label="main">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-nav-default-1" className="au-main-nav__content">
							<button
								aria-controls="main-nav-default-1"
								aria-expanded="false"
								className="au-main-nav__toggle au-main-nav__toggle--open"
								// onClick="return AU.mainNav.Toggle( this )"
							>
								Menu
							</button>
							<div className="au-main-nav__menu">
								<div className="au-main-nav__menu-inner">
									<div className="au-main-nav__focus-trap-top"></div>
									<button
										aria-controls="main-nav-default-1"
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
									</ul>
									<div className="au-main-nav__focus-trap-bottom"></div>
								</div>
							</div>
							<div
								className="au-main-nav__overlay"
								aria-controls="main-nav-default"
								// onClick="return AU.mainNav.Toggle( this )"
							>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>


		<div className="container">
			<div className="row">
				<h2>Search in an au-grid and secondary</h2>
				<div className="col-md-offset-3 col-md-6">
					<form role="search" className="au-search au-search--responsive au-form-group">
						<label htmlFor="search-in-grid" className="au-search__label">Search</label>
						<input type="search" id="search-in-grid" className="au-text-input"/>
						<div className="au-search__btn">
							<button className="au-btn au-btn--secondary"><span className="au-search__submit-btn-text">Search</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</>
);

export default withLayout(SearchBox);
