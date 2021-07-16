import React from 'react';
import {withLayout} from '../helpers/withLayout';

const SideNav = () => (
	<>
		<h1>Test: side-nav</h1>

		<div className="split-wrapper">
			<div className="split au-body">

				<h2>Test: default</h2>
				<aside className="au-side-nav au-accordion" aria-role="side navigation">

					<button
						className="au-side-nav__toggle au-accordion__title au-accordion--closed"
						aria-controls="nav-default"
						aria-expanded="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						In this section
					</button>

					<div id="nav-default" className="au-side-nav__content au-accordion--closed au-accordion__body">
						<h2 className="au-sidenav__title">
							<a href="#">Lodging your tax return</a>
						</h2>
						<ul className="au-link-list">
							<li><a href="#">Do you need to lodge a tax return?</a></li>
							<li><a href="#">Lodging your first tax return</a></li>
							<li><a href="#">Lodge online</a>
								<ul className="au-link-list">
									<li><a href="#">Pre-filling your online tax return</a></li>
								</ul>
							</li>
							<li><a href="#">Lodge with a registered tax agent</a></li>
							<li><a href="#">Lodge a paper tax return</a></li>
							<li><a href="#">Tax Help program</a>
								<ul className="au-link-list">
									<li><a href="#">Become a Tax Help volunteer</a></li>
								</ul>
							</li>
							<li><a href="#">What's new for individuals</a></li>
							<li><a href="#">Why you may receive a tax bill</a></li>
							<li><a href="#">Tracking your refund or fixing a mistake</a></li>
							<li><a href="#">Prior year returns</a></li>
							<li><a href="#">In detail</a>
								<ul className="au-link-list">
									<li className="active"><span>Record keeping</span>
										<ul className="au-link-list">
											<li><a href="#">Keeping your tax records</a></li>
											<li><a href="#">Incorrect amounts at reportable employer super contributions on payment
												summaries</a>
											</li>
										</ul>
									</li>
									<li><a href="#">Your notice of assessment</a></li>
									<li><a href="#">MyTax replaces e-tax</a></li>
									<li><a href="#">What is income?</a></li>
									<li><a href="#">Certainty letter</a></li>
									<li><a href="#">Tax receipt</a></li>
									<li><a href="#">Pre-fill availability</a></li>
									<li><a href="#">Tax: what you need to know</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</aside>
			</div>
			<div className="split au-body au-body--alt">

				<h2>Test: <code>alt</code></h2>

				<aside className="au-side-nav au-side-nav--alt au-accordion au-accordion--alt" aria-role="side navigation">

					<button
						className="au-side-nav__toggle au-accordion__title au-accordion--closed"
						aria-controls="nav-alt"
						aria-expanded="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						In this section
					</button>

					<div id="nav-alt" className="au-side-nav__content au-accordion--closed au-accordion__body">
						<h2 className="au-sidenav__title">
							<a href="#">Lodging your tax return</a>
						</h2>
						<ul className="au-link-list">
							<li><a href="#">Do you need to lodge a tax return?</a></li>
							<li><a href="#">Lodging your first tax return</a></li>
							<li><a href="#">Lodge online</a>
								<ul className="au-link-list">
									<li><a href="#">Pre-filling your online tax return</a></li>
								</ul>
							</li>
							<li><a href="#">Lodge with a registered tax agent</a></li>
							<li><a href="#">Lodge a paper tax return</a></li>
							<li><a href="#">Tax Help program</a>
								<ul className="au-link-list">
									<li><a href="#">Become a Tax Help volunteer</a></li>
								</ul>
							</li>
							<li><a href="#">What's new for individuals</a></li>
							<li><a href="#">Why you may receive a tax bill</a></li>
							<li><a href="#">Tracking your refund or fixing a mistake</a></li>
							<li><a href="#">Prior year returns</a></li>
							<li><a href="#">In detail</a>
								<ul className="au-link-list">
									<li className="active"><span>Record keeping</span>
										<ul className="au-link-list">
											<li><a href="#">Record keeping</a></li>
											<li><a href="#">Incorrect amounts at reportable employer super contributions on payment
												summaries</a></li>
										</ul>
									</li>
									<li><a href="#">Your notice of assessment</a></li>
									<li><a href="#">MyTax replaces e-tax</a></li>
									<li><a href="#">What is income?</a></li>
									<li><a href="#">Certainty letter</a></li>
									<li><a href="#">Tax receipt</a></li>
									<li><a href="#">Pre-fill availability</a></li>
									<li><a href="#">Tax: what you need to know</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</aside>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split au-body au-body--dark">
				<h2>Test: <code>dark</code></h2>
				<aside className="au-side-nav au-side-nav--dark au-accordion au-accordion--dark" aria-role="side navigation">
					<button
						className="au-side-nav__toggle au-accordion__title au-accordion--closed"
						aria-controls="nav-dark"
						aria-expanded="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						In this section
					</button>

					<div id="nav-dark" className="au-side-nav__content au-accordion--closed au-accordion__body">
						<h2 className="au-sidenav__title">
							<a href="#">Lodging your tax return</a>
						</h2>
						<ul className="au-link-list">
							<li><a href="#">Do you need to lodge a tax return?</a></li>
							<li><a href="#">Lodging your first tax return</a></li>
							<li><a href="#">Lodge online</a>
								<ul className="au-link-list">
									<li><a href="#">Pre-filling your online tax return</a></li>
								</ul>
							</li>
							<li><a href="#">Lodge with a registered tax agent</a></li>
							<li><a href="#">Lodge a paper tax return</a></li>
							<li><a href="#">Tax Help program</a>
								<ul className="au-link-list">
									<li><a href="#">Become a Tax Help volunteer</a></li>
								</ul>
							</li>
							<li><a href="#">What's new for individuals</a></li>
							<li><a href="#">Why you may receive a tax bill</a></li>
							<li><a href="#">Tracking your refund or fixing a mistake</a></li>
							<li><a href="#">Prior year returns</a></li>
							<li><a href="#">In detail</a>
								<ul className="au-link-list">
									<li className="active"><span>Record keeping</span>
										<ul className="au-link-list">
											<li><a href="#">Record keeping</a></li>
											<li><a href="#">Incorrect amounts at reportable employer super contributions on payment
												summaries</a>
											</li>
										</ul>
									</li>
									<li><a href="#">Your notice of assessment</a></li>
									<li><a href="#">MyTax replaces e-tax</a></li>
									<li><a href="#">What is income?</a></li>
									<li><a href="#">Certainty letter</a></li>
									<li><a href="#">Tax receipt</a></li>
									<li><a href="#">Pre-fill availability</a></li>
									<li><a href="#">Tax: what you need to know</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</aside>
			</div>
			<div className="split au-body au-body--alt au-body--dark">

				<h2>Test: <code>dark</code> <code>alt</code></h2>

				<aside className="au-accordion au-accordion--dark au-side-nav au-side-nav--alt au-side-nav--dark"
				       aria-role="side navigation">
					<button
						className="au-side-nav__toggle au-accordion__title au-accordion--closed"
						aria-controls="nav-dark-alt"
						aria-expanded="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						In this section
					</button>

					<div id="nav-dark-alt" className="au-side-nav__content au-accordion--closed au-accordion__body">
						<h2 className="au-sidenav__title">
							<a href="#">Lodging your tax return</a>
						</h2>
						<ul className="au-link-list">
							<li><a href="#">Do you need to lodge a tax return?</a></li>
							<li><a href="#">Lodging your first tax return</a></li>
							<li><a href="#">Lodge online</a>
								<ul className="au-link-list">
									<li><a href="#">Pre-filling your online tax return</a></li>
								</ul>
							</li>
							<li><a href="#">Lodge with a registered tax agent</a></li>
							<li><a href="#">Lodge a paper tax return</a></li>
							<li><a href="#">Tax Help program</a>
								<ul className="au-link-list">
									<li><a href="#">Become a Tax Help volunteer</a></li>
								</ul>
							</li>
							<li><a href="#">What's new for individuals</a></li>
							<li><a href="#">Why you may receive a tax bill</a></li>
							<li><a href="#">Tracking your refund or fixing a mistake</a></li>
							<li><a href="#">Prior year returns</a></li>
							<li><a href="#">In detail</a>
								<ul className="au-link-list">
									<li className="active"><span>Record keeping</span>
										<ul className="au-link-list">
											<li><a href="#">Record keeping</a></li>
											<li><a href="#">Incorrect amounts at reportable employer super contributions on payment
												summaries</a>
											</li>
										</ul>
									</li>
									<li><a href="#">Your notice of assessment</a></li>
									<li><a href="#">MyTax replaces e-tax</a></li>
									<li><a href="#">What is income?</a></li>
									<li><a href="#">Certainty letter</a></li>
									<li><a href="#">Tax receipt</a></li>
									<li><a href="#">Pre-fill availability</a></li>
									<li><a href="#">Tax: what you need to know</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</aside>
			</div>
		</div>


		<div className="split-wrapper">
			<div className="split">

				<h2>Test: default</h2>
				<aside className="au-side-nav au-accordion" aria-role="side navigation">

					<button
						className="au-side-nav__toggle au-accordion__title au-accordion--closed"
						aria-controls="nav-default-nobody"
						aria-expanded="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						In this section
					</button>

					<div id="nav-default-nobody" className="au-side-nav__content au-accordion--closed au-accordion__body">
						<h2 className="au-sidenav__title">
							<a href="#">Lodging your tax return</a>
						</h2>
						<ul className="au-link-list">
							<li><a href="#">Do you need to lodge a tax return?</a></li>
							<li><a href="#">Lodging your first tax return</a></li>
							<li><a href="#">Lodge online</a>
								<ul className="au-link-list">
									<li><a href="#">Pre-filling your online tax return</a></li>
								</ul>
							</li>
							<li><a href="#">Lodge with a registered tax agent</a></li>
							<li><a href="#">Lodge a paper tax return</a></li>
							<li><a href="#">Tax Help program</a>
								<ul className="au-link-list">
									<li><a href="#">Become a Tax Help volunteer</a></li>
								</ul>
							</li>
							<li><a href="#">What's new for individuals</a></li>
							<li><a href="#">Why you may receive a tax bill</a></li>
							<li><a href="#">Tracking your refund or fixing a mistake</a></li>
							<li><a href="#">Prior year returns</a></li>
							<li><a href="#">In detail</a>
								<ul className="au-link-list">
									<li className="active"><span>Record keeping</span>
										<ul className="au-link-list">
											<li><a href="#">Record keeping</a></li>
											<li><a href="#">Incorrect amounts at reportable employer super contributions on payment
												summaries</a>
											</li>
										</ul>
									</li>
									<li><a href="#">Your notice of assessment</a></li>
									<li><a href="#">MyTax replaces e-tax</a></li>
									<li><a href="#">What is income?</a></li>
									<li><a href="#">Certainty letter</a></li>
									<li><a href="#">Tax receipt</a></li>
									<li><a href="#">Pre-fill availability</a></li>
									<li><a href="#">Tax: what you need to know</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</aside>
			</div>
			<div className="split split--alt">

				<h2>Test: <code>alt</code></h2>

				<aside className="au-side-nav au-side-nav--alt au-accordion au-accordion--alt" aria-role="side navigation">

					<button
						className="au-side-nav__toggle au-accordion__title au-accordion--closed"
						aria-controls="nav-alt-nobody"
						aria-expanded="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						In this section
					</button>

					<div id="nav-alt-nobody" className="au-side-nav__content au-accordion--closed au-accordion__body">
						<h2 className="au-sidenav__title">
							<a href="#">Lodging your tax return</a>
						</h2>
						<ul className="au-link-list">
							<li><a href="#">Do you need to lodge a tax return?</a></li>
							<li><a href="#">Lodging your first tax return</a></li>
							<li><a href="#">Lodge online</a>
								<ul className="au-link-list">
									<li><a href="#">Pre-filling your online tax return</a></li>
								</ul>
							</li>
							<li><a href="#">Lodge with a registered tax agent</a></li>
							<li><a href="#">Lodge a paper tax return</a></li>
							<li><a href="#">Tax Help program</a>
								<ul className="au-link-list">
									<li><a href="#">Become a Tax Help volunteer</a></li>
								</ul>
							</li>
							<li><a href="#">What's new for individuals</a></li>
							<li><a href="#">Why you may receive a tax bill</a></li>
							<li><a href="#">Tracking your refund or fixing a mistake</a></li>
							<li><a href="#">Prior year returns</a></li>
							<li><a href="#">In detail</a>
								<ul className="au-link-list">
									<li className="active"><span>Record keeping</span>
										<ul className="au-link-list">
											<li><a href="#">Record keeping</a></li>
											<li><a href="#">Incorrect amounts at reportable employer super contributions on payment
												summaries</a>
											</li>
										</ul>
									</li>
									<li><a href="#">Your notice of assessment</a></li>
									<li><a href="#">MyTax replaces e-tax</a></li>
									<li><a href="#">What is income?</a></li>
									<li><a href="#">Certainty letter</a></li>
									<li><a href="#">Tax receipt</a></li>
									<li><a href="#">Pre-fill availability</a></li>
									<li><a href="#">Tax: what you need to know</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</aside>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--dark">
				<h2>Test: <code>dark</code></h2>
				<aside className="au-side-nav au-side-nav--dark  au-accordion au-accordion--dark" aria-role="side navigation">
					<button
						className="au-side-nav__toggle au-accordion__title au-accordion--closed"
						aria-controls="nav-dark-nobody"
						aria-expanded="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						In this section
					</button>

					<div id="nav-dark-nobody" className="au-side-nav__content au-accordion--closed au-accordion__body">
						<h2 className="au-sidenav__title">
							<a href="#">Lodging your tax return</a>
						</h2>
						<ul className="au-link-list">
							<li><a href="#">Do you need to lodge a tax return?</a></li>
							<li><a href="#">Lodging your first tax return</a></li>
							<li><a href="#">Lodge online</a>
								<ul className="au-link-list">
									<li><a href="#">Pre-filling your online tax return</a></li>
								</ul>
							</li>
							<li><a href="#">Lodge with a registered tax agent</a></li>
							<li><a href="#">Lodge a paper tax return</a></li>
							<li><a href="#">Tax Help program</a>
								<ul className="au-link-list">
									<li><a href="#">Become a Tax Help volunteer</a></li>
								</ul>
							</li>
							<li><a href="#">What's new for individuals</a></li>
							<li><a href="#">Why you may receive a tax bill</a></li>
							<li><a href="#">Tracking your refund or fixing a mistake</a></li>
							<li><a href="#">Prior year returns</a></li>
							<li><a href="#">In detail</a>
								<ul className="au-link-list">
									<li className="active"><span>Record keeping</span>
										<ul className="au-link-list">
											<li><a href="#">Record keeping</a></li>
											<li><a href="#">Incorrect amounts at reportable employer super contributions on payment
												summaries</a>
											</li>
										</ul>
									</li>
									<li><a href="#">Your notice of assessment</a></li>
									<li><a href="#">MyTax replaces e-tax</a></li>
									<li><a href="#">What is income?</a></li>
									<li><a href="#">Certainty letter</a></li>
									<li><a href="#">Tax receipt</a></li>
									<li><a href="#">Pre-fill availability</a></li>
									<li><a href="#">Tax: what you need to know</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</aside>
			</div>
			<div className="split split--dark split--alt">

				<h2>Test: <code>dark</code> <code>alt</code></h2>

				<aside
					className="au-side-nav au-side-nav--alt au-side-nav--dark au-accordion au-accordion--alt au-accordion--dark"
					aria-role="side navigation">
					<button
						className="au-side-nav__toggle au-accordion__title au-accordion--closed"
						aria-controls="nav-dark-alt-nobody"
						aria-expanded="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						In this section
					</button>

					<div id="nav-dark-alt-nobody" className="au-side-nav__content au-accordion--closed au-accordion__body">
						<h2 className="au-sidenav__title">
							<a href="#">Lodging your tax return</a>
						</h2>
						<ul className="au-link-list">
							<li><a href="#">Do you need to lodge a tax return?</a></li>
							<li><a href="#">Lodging your first tax return</a></li>
							<li><a href="#">Lodge online</a>
								<ul className="au-link-list">
									<li><a href="#">Pre-filling your online tax return</a></li>
								</ul>
							</li>
							<li><a href="#">Lodge with a registered tax agent</a></li>
							<li><a href="#">Lodge a paper tax return</a></li>
							<li><a href="#">Tax Help program</a>
								<ul className="au-link-list">
									<li><a href="#">Become a Tax Help volunteer</a></li>
								</ul>
							</li>
							<li><a href="#">What's new for individuals</a></li>
							<li><a href="#">Why you may receive a tax bill</a></li>
							<li><a href="#">Tracking your refund or fixing a mistake</a></li>
							<li><a href="#">Prior year returns</a></li>
							<li><a href="#">In detail</a>
								<ul className="au-link-list">
									<li className="active"><span>Record keeping</span>
										<ul className="au-link-list">
											<li><a href="#">Record keeping</a></li>
											<li><a href="#">Incorrect amounts at reportable employer super contributions on payment
												summaries</a>
											</li>
										</ul>
									</li>
									<li><a href="#">Your notice of assessment</a></li>
									<li><a href="#">MyTax replaces e-tax</a></li>
									<li><a href="#">What is income?</a></li>
									<li><a href="#">Certainty letter</a></li>
									<li><a href="#">Tax receipt</a></li>
									<li><a href="#">Pre-fill availability</a></li>
									<li><a href="#">Tax: what you need to know</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</aside>
			</div>
		</div>

	</>
);

export default withLayout(SideNav);
