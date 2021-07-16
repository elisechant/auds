import React from 'react';
import { withLayout } from '../helpers/withLayout';

const Header = () => (
	<>
		<h1>Test: header</h1>

		<h2>Logo Only with grid (Eg. Agency Header)</h2>

		<header className="au-grid au-header" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<a href="#" className="au-header__brand">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
						</a>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--alt" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<a className="au-header__brand" href="#">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
						</a>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--dark" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<a className="au-header__brand" href="#">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
						</a>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--dark au-header--alt" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<a className="au-header__brand" href="#">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
						</a>
					</div>
				</div>
			</div>
		</header>

		<h2>Text only with grid</h2>

		<header className="au-grid au-header" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<a href="#" className="au-header__brand">
							<h1 className="au-header__heading">Site title</h1>
							<div className="au-header__subline">
								Service description that could be a little longer
							</div>
						</a>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--alt" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<a className="au-header__brand" href="#">
							<h1 className="au-header__heading">Site title</h1>
							<div className="au-header__subline">
								Service description that could be a little longer
							</div>
						</a>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--dark" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<a className="au-header__brand" href="#">
							<h1 className="au-header__heading">Site title</h1>
							<div className="au-header__subline">
								Service description that could be a little longer
							</div>
						</a>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--dark au-header--alt" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<a className="au-header__brand" href="#">
							<h1 className="au-header__heading">Site title</h1>
							<div className="au-header__subline">
								Service description that could be a little longer
							</div>
						</a>
					</div>
				</div>
			</div>
		</header>

		<h2>Header with service description with grid</h2>

		<header className="au-grid au-header" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-lg-9">
						<a className="au-header__brand" href="#">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">
									Service description that could be a little longer Service description that could be a little longer
									Service description that could be a little longer
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--alt" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-lg-9">
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

		<header className="au-grid au-header au-header--dark" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-lg-9">
						<a href="#" className="au-header__brand">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">Service description that could be a little longer</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--dark au-header--alt" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-lg-9">
						<a href="#" className="au-header__brand">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">Service description that could be a little longer</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</header>


		<h2>Hero header with service description with grid (E.g Home page)</h2>

		<header className="au-grid au-header au-header--hero" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="au-header__brand">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">
									Service description that could be a little longer
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--hero au-header--alt" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="au-header__brand">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">Service description that could be a little longer</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--hero au-header--dark" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="au-header__brand">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">
									Service description that could be a little longer
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<header className="au-grid au-header au-header--alt au-header--hero au-header--dark" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="au-header__brand">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline">
									Service description that could be a little longer Service description that could be a little longer
									Service description that could be a little longer
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<h2>Use <code>.au-body</code> for extra description styles with grid</h2>

		<header className="au-grid au-header au-header--alt au-header--hero au-header--dark" role="banner">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="au-header__brand">
							<img className="au-header__brand-image" alt="Australian Government Crest"
							     src="http://placehold.it/256x80"/>
							<div className="au-header__text">
								<h1 className="au-header__heading">Site title</h1>
								<div className="au-header__subline au-body au-body--dark au-body--alt">
									Service <a href="#">description</a> that could <code>be a little</code> longer
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>


		<h2>Logo Only (Eg. Agency Header)</h2>

		<header className="au-header au-header--alt" role="banner">
			<a href="#" className="au-header__brand">
				<img className="au-header__brand-image" alt="Australian Government Crest" src="http://placehold.it/256x80"/>
			</a>
		</header>

		<h2>Text only</h2>

		<header className="au-header au-header--alt" role="banner">
			<a href="#" className="au-header__brand">
				<h1 className="au-header__heading">Site title</h1>
				<div className="au-header__subline">
					Service description that could be a little longer
				</div>
			</a>
		</header>

		<h2>Header with service description</h2>

		<header className="au-header au-header--alt" role="banner">
			<a className="au-header__brand" href="#">
				<img className="au-header__brand-image" alt="Australian Government Crest" src="http://placehold.it/256x80"/>
				<div className="au-header__text">
					<h1 className="au-header__heading">Site title</h1>
					<div className="au-header__subline">
						Service description that could be a little longer Service description that could be a little longer Service
						description that could be a little longer
					</div>
				</div>
			</a>
		</header>


		<h2>Hero header with service description (E.g Home page)</h2>

		<header className="au-header au-header--alt au-header--hero" role="banner">
			<div className="au-header__brand">
				<img className="au-header__brand-image" alt="Australian Government Crest" src="http://placehold.it/256x80"/>
				<div className="au-header__text">
					<h1 className="au-header__heading">Site title</h1>
					<div className="au-header__subline">
						Service description that could be a little longer
					</div>
				</div>
			</div>
		</header>


		<h2>Use <code>.au-body</code> for extra description styles</h2>

		<header className="au-header au-header--alt au-header--hero au-header--dark" role="banner">
			<div className="au-header__brand">
				<img className="au-header__brand-image" alt="Australian Government Crest" src="http://placehold.it/256x80"/>
				<div className="au-header__text">
					<h1 className="au-header__heading">Site title</h1>
					<div className="au-header__subline au-body au-body--dark au-body--alt">
						Service <a href="#">description</a> that could <code>be a little</code> longer
					</div>
				</div>
			</div>
		</header>
	</>
);

export default withLayout(Header);
