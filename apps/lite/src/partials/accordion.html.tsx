import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Accordion = () => (
	<>
		<h1 id="url">Test: accordion</h1>

		{/*<button onClick="return AU.accordion.Open( document.querySelectorAll('.js-au-accordion') )">Open all</button>*/}
		{/*<button onClick="return AU.accordion.Close( document.querySelectorAll('.js-au-accordion') )">Close all</button>*/}
		{/*<button onClick="return AU.accordion.Toggle( document.querySelectorAll('.js-au-accordion') )">Toggle all</button>*/}

		<hr/>

		<h2>API test for Toggle, Open and Close</h2>
		<button
			className="js-au-accordion"
			aria-controls="accordion-nude"
			aria-expanded="true"
			// onClick="return AU.accordion.Toggle( this )"
		>
			Toggle text below
		</button>
		<button
			aria-controls="accordion-nude"
			aria-expanded="true"
			// onClick="return AU.accordion.Open( this )"
		>
			Open text below
		</button>
		<button
			aria-controls="accordion-nude"
			aria-expanded="true"
			// onClick="return AU.accordion.Close( this )"
		>
			Close text below
		</button>
		<div className="au-accordion__body au-body" id="accordion-nude">
			<p>
				Here some content that is just collapsible via our accordion function<br/>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi magni, nobis laborum dolorum ex excepturi
				perferendis, pariatur id odit.<br/>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi magni, nobis laborum dolorum ex excepturi
				perferendis, pariatur id odit.<br/>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi magni, nobis laborum dolorum ex excepturi
				perferendis, pariatur id odit.
			</p>
		</div>

		<hr/>

		<div className="split-wrapper">
			<div className="split">

				<h2>Without body</h2>

				<h3>Accordion open by default</h3>

				<section className="au-accordion">
					<button
						className="au-accordion__title js-au-accordion"
						aria-controls="accordion-default"
						aria-expanded="true"
						// onClick="return AU.accordion.Toggle( this )"
					>
						Button Accordion title
					</button>

					<div className="au-accordion__body" id="accordion-default">
						<div className="au-accordion__body-wrapper">

							<div className="no-a11y-test">Here <a href="#url">is</a> some accordion content</div>

						</div>
					</div>
				</section>


				<hr/>
				<h3>Accordion closed by default</h3>

				<section className="au-accordion">
					<button
						className="au-accordion__title au-accordion--closed js-au-accordion"
						aria-controls="accordion-closed"
						aria-expanded="false"
						aria-selected="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						Accordion title
					</button>

					<div className="au-accordion__body au-accordion--closed" id="accordion-closed">
						<div className="au-accordion__body-wrapper">

							<div className="no-a11y-test">Here is some accordion <a href="#url">content</a>.</div>

						</div>
					</div>
				</section>


				<hr/>
				<h3>Accordion slow</h3>

				<section className="au-accordion">
					<button
						className="au-accordion__title js-au-accordion"
						aria-controls="accordion-slow"
						aria-expanded="true"
						// onClick="return AU.accordion.Toggle( this, 1000 )"
					>
						Accordion title
					</button>

					<div className="au-accordion__body" id="accordion-slow">
						<div className="au-accordion__body-wrapper">

							<div className="no-a11y-test">Here is some accordion <a href="#url">content</a>.
								<div className="no-a11y-test">

								</div>
							</div>
						</div>
					</div>
				</section>


				<hr/>
				<h3>Accordion with all callbacks</h3>

				<section className="au-accordion">
					<button
						className="au-accordion__title js-au-accordion"
						aria-controls="accordion-callbacks"
						aria-expanded="true"
						// onClick="return AU.accordion.Toggle( this, undefined, {
						// 		onOpen: function() {
						// 			console.log('This function will run when an accordion opens');
						// 		},
						// 		afterOpen: function() {
						// 			console.log('This function will run after an accordion has opened');
						// 		},
						// 		onClose: function() {
						// 			console.log('This function will run when an accordion closes');
						// 		},
						// 		afterClose: function() {
						// 			console.log('This function will run after an accordion has closed');
						// 		},
						// 	} )"
					>
						Accordion title
					</button>

					<div className="au-accordion__body" id="accordion-callbacks">
						<div className="au-accordion__body-wrapper">

							<div className="no-a11y-test">Here is some accordion <a href="#url">content</a>.</div>

						</div>
					</div>
				</section>


				<hr/>
				<h3>Accordion group</h3>

				<ul className="au-accordion-group" aria-label="Group of Accordions">
					<li>
						<section className="au-accordion">
							<button
								className="au-accordion__title au-accordion--closed js-au-accordion"
								aria-controls="accordion-stacked1"
								aria-expanded="false"
								aria-selected="false"
								// onClick="return AU.accordion.Toggle( this )"
							>
								First accordion title

							</button>

							<div className="au-accordion__body au-accordion--closed" id="accordion-stacked1">
								<div className="au-accordion__body-wrapper">

									<p>Here is some accordion content</p>

									<section className="au-accordion">
										<button
											className="au-accordion__title js-au-accordion"
											aria-controls="inner-accordion"
											aria-expanded="true"
											// onClick="return AU.accordion.Toggle( this )"
										>
											A nested accordion
										</button>

										<div className="au-accordion__body" id="inner-accordion">
											<div className="au-accordion__body-wrapper">

												<div className="no-a11y-test">Here is some <a href="#url">accordion</a> content</div>

											</div>
										</div>

									</section>

									<div className="no-a11y-test"><p>Here is some accordion <a href="#url">content</a>.</p></div>

								</div>
							</div>
						</section>
					</li>

					<li>
						<section className="au-accordion">
							<button
								className="au-accordion__title au-accordion--closed js-au-accordion"
								aria-controls="accordion-stacked2"
								aria-expanded="false"
								aria-selected="false"
								// onClick="return AU.accordion.Toggle( this )"
							>
								Another accordion
							</button>

							<div className="au-accordion__body au-accordion--closed" id="accordion-stacked2">
								<div className="au-accordion__body-wrapper">
									<p>Here is some accordion content</p>
									<div className="no-a11y-test">
										<p>Here is some <a href="#url">accordion</a> content</p>
										<p>Here is some accordion content</p>
									</div>
								</div>
							</div>
						</section>
					</li>

					<li>
						<section className="au-accordion">
							<button
								className="au-accordion__title au-accordion--closed js-au-accordion"
								aria-controls="accordion-stacked3"
								aria-expanded="false"
								aria-selected="false"
								// onClick="return AU.accordion.Toggle( this )"
							>
								Accordion with words and words and a very long title so that it can break into several
							</button>

							<div className="au-accordion__body au-accordion--closed" id="accordion-stacked3">
								<div className="au-accordion__body-wrapper">
									<p>Here is some accordion content</p>
									<p>Here is some <a href="#url">accordion</a> content</p>
									<p>Here is some accordion content</p>
								</div>
							</div>
						</section>
					</li>
				</ul>

				<br/>
				<hr/>
				<div className="au-body">
					<h2>With body</h2>

					<h3>Accordion open by default</h3>

					<section className="au-accordion">
						<button
							className="au-accordion__title js-au-accordion"
							aria-controls="accordion-default-grid"
							aria-expanded="true"
							// onClick="return AU.accordion.Toggle( this )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body" id="accordion-default-grid">
							<div className="au-accordion__body-wrapper">

								Here <a href="#url">is</a> some accordion content

							</div>
						</div>
					</section>


					<hr/>
					<h3>Accordion closed by default</h3>

					<section className="au-accordion">
						<button
							className="au-accordion__title au-accordion--closed js-au-accordion"
							aria-controls="accordion-closed-grid"
							aria-expanded="false"
							aria-selected="false"
							// onClick="return AU.accordion.Toggle( this )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body au-accordion--closed" id="accordion-closed-grid">
							<div className="au-accordion__body-wrapper">

								Here is some accordion <a href="#url">content</a>.

							</div>
						</div>
					</section>


					<hr/>
					<h3>Accordion slow</h3>

					<section className="au-accordion">
						<button
							className="au-accordion__title js-au-accordion"
							aria-controls="accordion-slow-grid"
							aria-expanded="true"
							// onClick="return AU.accordion.Toggle( this, 1000 )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body" id="accordion-slow-grid">
							<div className="au-accordion__body-wrapper">

								Here is some accordion <a href="#url">content</a>.

							</div>
						</div>
					</section>


					<hr/>
					<h3>Accordion with all callbacks</h3>

					<section className="au-accordion">
						<button
							className="au-accordion__title js-au-accordion"
							aria-controls="accordion-callbacks-grid"
							aria-expanded="true"
							// onClick="return AU.accordion.Toggle( this, undefined, {
							// 		onOpen: function() {
							// 			console.log('This function will run when an accordion opens');
							// 		},
							// 		afterOpen: function() {
							// 			console.log('This function will run after an accordion has opened');
							// 		},
							// 		onClose: function() {
							// 			console.log('This function will run when an accordion closes');
							// 		},
							// 		afterClose: function() {
							// 			console.log('This function will run after an accordion has closed');
							// 		},
							// 	} )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body" id="accordion-callbacks-grid">
							<div className="au-accordion__body-wrapper">

								Here is some accordion <a href="#url">content</a>.

							</div>
						</div>
					</section>


					<hr/>
					<h3>Accordion group</h3>

					<ul className="au-accordion-group">
						<li>
							<section className="au-accordion">
								<button
									className="au-accordion__title au-accordion--closed js-au-accordion"
									aria-controls="accordion-stacked-grid1"
									aria-expanded="false"
									aria-selected="false"
									// onClick="return AU.accordion.Toggle( this )"
								>
									First accordion title
								</button>

								<div className="au-accordion__body au-accordion--closed" id="accordion-stacked-grid1">
									<div className="au-accordion__body-wrapper">

										<p>Here is some accordion content</p>

										<section className="au-accordion">
											<button
												className="au-accordion__title js-au-accordion"
												aria-controls="inner-accordion-grid"
												aria-expanded="true"
												// onClick="return AU.accordion.Toggle( this )"
											>
												A nested accordion
											</button>

											<div className="au-accordion__body" id="inner-accordion-grid">
												<div className="au-accordion__body-wrapper">
													Here is some <a href="#url">accordion</a> content
												</div>
											</div>

										</section>

										<p>Here is some accordion <a href="#url">content</a>.</p>

									</div>

								</div>
							</section>
						</li>
						<li>
							<section className="au-accordion">
								<button
									className="au-accordion__title au-accordion--closed js-au-accordion"
									aria-controls="accordion-stacked-grid2"
									aria-expanded="false"
									aria-selected="false"
									// onClick="return AU.accordion.Toggle( this )"
								>
									Another accordion
								</button>

								<div className="au-accordion__body au-accordion--closed" id="accordion-stacked-grid2">
									<div className="au-accordion__body-wrapper">
										<p>Here is some accordion content</p>
										<p>Here is some <a href="#url">accordion</a> content</p>
										<p>Here is some accordion content</p>
									</div>
								</div>
							</section>
						</li>
						<li>
							<section className="au-accordion">
								<button
									className="au-accordion__title au-accordion--closed js-au-accordion"
									aria-controls="accordion-stacked-grid3"
									aria-expanded="false"
									aria-selected="false"
									// onClick="return AU.accordion.Toggle( this )"
								>
									Accordion with words and words and a very long title so that it can break into several
								</button>

								<div className="au-accordion__body au-accordion--closed" id="accordion-stacked-grid3">
									<div className="au-accordion__body-wrapper">
										<p>Here is some accordion content</p>
										<p>Here is some <a href="#url">accordion</a> content</p>
										<p>Here is some accordion content</p>
									</div>
								</div>
							</section>
						</li>
					</ul>

				</div>

			</div>

			<div className="split split--dark">

				<h2>Without body</h2>

				<h3>Accordion open by default <code>--dark</code></h3>

				<section className="au-accordion au-accordion--dark">
					<button
						className="au-accordion__title js-au-accordion"
						aria-controls="accordion-dark-default"
						aria-expanded="true"
						// onClick="return AU.accordion.Toggle( this )"
					>
						Accordion title
					</button>

					<div className="au-accordion__body" id="accordion-dark-default">
						<div className="au-accordion__body-wrapper">

							<div className="no-a11y-test">Here <a href="#url">is</a> some accordion content</div>

						</div>
					</div>
				</section>


				<hr/>
				<h3>Accordion closed by default <code>--dark</code></h3>

				<section className="au-accordion au-accordion--dark">
					<button
						className="au-accordion__title au-accordion--closed js-au-accordion"
						aria-controls="accordion-dark-closed"
						aria-expanded="false"
						aria-selected="false"
						// onClick="return AU.accordion.Toggle( this )"
					>
						Accordion title
					</button>

					<div className="au-accordion__body au-accordion--closed" id="accordion-dark-closed">
						<div className="au-accordion__body-wrapper">

							<div className="no-a11y-test">Here is some accordion <a href="#url">content</a>.</div>

						</div>
					</div>
				</section>


				<hr/>
				<h3>Accordion slow <code>--dark</code></h3>

				<section className="au-accordion au-accordion--dark">
					<button
						className="au-accordion__title js-au-accordion"
						aria-controls="accordion-dark-slow"
						aria-expanded="true"
						// onClick="return AU.accordion.Toggle( this, 1000 )"
					>
						Accordion title
					</button>

					<div className="au-accordion__body" id="accordion-dark-slow">
						<div className="au-accordion__body-wrapper">

							<div className="no-a11y-test">Here is some accordion <a href="#url">content</a>.</div>

						</div>
					</div>
				</section>


				<hr/>
				<h3>Accordion with all callbacks <code>--dark</code></h3>

				<section className="au-accordion au-accordion--dark">
					<button
						className="au-accordion__title js-au-accordion"
						aria-controls="accordion-dark-callbacks"
						aria-expanded="true"
						// onClick="return AU.accordion.Toggle( this, undefined, {
						// 		onOpen: function() {
						// 			console.log('This function will run when an accordion opens');
						// 		},
						// 		afterOpen: function() {
						// 			console.log('This function will run after an accordion has opened');
						// 		},
						// 		onClose: function() {
						// 			console.log('This function will run when an accordion closes');
						// 		},
						// 		afterClose: function() {
						// 			console.log('This function will run after an accordion has closed');
						// 		},
						// 	} )"
					>
						Accordion title
					</button>

					<div className="au-accordion__body" id="accordion-dark-callbacks">
						<div className="au-accordion__body-wrapper">

							<div className="no-a11y-test">Here is some accordion <a href="#url">content</a>.</div>

						</div>
					</div>
				</section>


				<hr/>
				<h3>Accordion group <code>--dark</code></h3>

				<ul className="au-accordion-group">
					<li>
						<section className="au-accordion au-accordion--dark">
							<button
								className="au-accordion__title au-accordion--closed js-au-accordion"
								aria-controls="accordion-dark-stacked1"
								aria-expanded="false"
								aria-selected="false"
								// onClick="return AU.accordion.Toggle( this )"
							>
								First accordion title
							</button>

							<div className="au-accordion__body au-accordion--closed" id="accordion-dark-stacked1">
								<div className="au-accordion__body-wrapper">

									<p>Here is some accordion content</p>

									<section className="au-accordion au-accordion--dark">
										<button
											className="au-accordion__title js-au-accordion"
											aria-controls="inner-accordion-dark"
											aria-expanded="true"
											// onClick="return AU.accordion.Toggle( this )"
										>
											A nested accordion
										</button>

										<div className="au-accordion__body" id="inner-accordion-dark">
											<div className="au-accordion__body-wrapper">

												<div className="no-a11y-test">Here is some <a href="#url">accordion</a> content</div>

											</div>
										</div>

									</section>

									<p>Here is some accordion <a href="#url">content</a>.</p>

								</div>

							</div>
						</section>
					</li>
					<li>
						<section className="au-accordion au-accordion--dark">
							<button
								className="au-accordion__title au-accordion--closed js-au-accordion"
								aria-controls="accordion-dark-stacked2"
								aria-expanded="false"
								aria-selected="false"
								// onClick="return AU.accordion.Toggle( this )"
							>
								Another accordion
							</button>

							<div className="au-accordion__body au-accordion--closed" id="accordion-dark-stacked2">
								<div className="au-accordion__body-wrapper">
									<p>Here is some accordion content</p>
									<div className="no-a11y-test"><p>Here is some <a href="#url">accordion</a> content</p></div>
									<p>Here is some accordion content</p>
								</div>
							</div>
						</section>
					</li>
					<li>

						<section className="au-accordion au-accordion--dark">
							<button
								className="au-accordion__title au-accordion--closed js-au-accordion"
								aria-controls="accordion-dark-stacked3"
								aria-expanded="false"
								aria-selected="false"
								// onClick="return AU.accordion.Toggle( this )"
							>
								Accordion with words and words and a very long title so that it can break into several
							</button>

							<div className="au-accordion__body au-accordion--closed" id="accordion-dark-stacked3">
								<div className="au-accordion__body-wrapper">
									<p>Here is some accordion content</p>
									<div className="no-a11y-test"><p>Here is some <a href="#url">accordion</a> content</p></div>
									<p>Here is some accordion content</p>
								</div>
							</div>
						</section>
					</li>
				</ul>

				<br/>
				<hr/>
				<div className="au-body au-body--dark">
					<h2>With body</h2>

					<h3>Accordion open by default <code>--dark</code></h3>

					<section className="au-accordion au-accordion--dark">
						<button
							className="au-accordion__title js-au-accordion"
							aria-controls="accordion-dark-default-grid"
							aria-expanded="true"
							// onClick="return AU.accordion.Toggle( this )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body" id="accordion-dark-default-grid">
							<div className="au-accordion__body-wrapper">

								Here <a href="#url">is</a> some accordion content

							</div>
						</div>
					</section>


					<hr/>
					<h3>Accordion closed by default <code>--dark</code></h3>

					<section className="au-accordion au-accordion--dark">
						<button
							className="au-accordion__title au-accordion--closed js-au-accordion"
							aria-controls="accordion-dark-closed-grid"
							aria-expanded="false"
							aria-selected="false"
							// onClick="return AU.accordion.Toggle( this )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body au-accordion--closed" id="accordion-dark-closed-grid">
							<div className="au-accordion__body-wrapper">

								Here is some accordion <a href="#url">content</a>.

							</div>
						</div>
					</section>


					<hr/>
					<h3>Accordion slow <code>--dark</code></h3>

					<section className="au-accordion au-accordion--dark">
						<button
							className="au-accordion__title js-au-accordion"
							aria-controls="accordion-dark-slow-grid"
							aria-expanded="true"
							// onClick="return AU.accordion.Toggle( this, 1000 )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body" id="accordion-dark-slow-grid">
							<div className="au-accordion__body-wrapper">

								Here is some accordion <a href="#url">content</a>.

							</div>
						</div>
					</section>


					<hr/>
					<h3>Accordion with all callbacks <code>--dark</code></h3>

					<section className="au-accordion au-accordion--dark">
						<button
							className="au-accordion__title js-au-accordion"
							aria-controls="accordion-dark-callbacks-grid"
							aria-expanded="true"
							// onClick="return AU.accordion.Toggle( this, undefined, {
							// 		onOpen: function() {
							// 			console.log('This function will run when an accordion opens');
							// 		},
							// 		afterOpen: function() {
							// 			console.log('This function will run after an accordion has opened');
							// 		},
							// 		onClose: function() {
							// 			console.log('This function will run when an accordion closes');
							// 		},
							// 		afterClose: function() {
							// 			console.log('This function will run after an accordion has closed');
							// 		},
							// 	} )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body" id="accordion-dark-callbacks-grid">
							<div className="au-accordion__body-wrapper">

								Here is some accordion <a href="#url">content</a>.

							</div>
						</div>
					</section>


					<hr/>
					<h3>Accordion group <code>--dark</code></h3>

					<ul className="au-accordion-group">
						<li>
							<section className="au-accordion au-accordion--dark">
								<button
									className="au-accordion__title au-accordion--closed js-au-accordion"
									aria-controls="accordion-dark-stacked-grid1"
									aria-expanded="false"
									aria-selected="false"
									// onClick="return AU.accordion.Toggle( this )"
								>
									First accordion title
								</button>

								<div className="au-accordion__body au-accordion--closed" id="accordion-dark-stacked-grid1">
									<div className="au-accordion__body-wrapper">

										<p>Here is some accordion content</p>

										<section className="au-accordion au-accordion--dark">
											<a href="#inner-accordion-dark-grid"
											   className="au-accordion__title js-au-accordion"
											   aria-controls="inner-accordion-dark-grid"
											   aria-expanded="true"
												// onClick="return AU.accordion.Toggle( this )"
											>
												A nested accordion
											</a>

											<div className="au-accordion__body" id="inner-accordion-dark-grid">
												<div className="au-accordion__body-wrapper">
													Here is some <a href="#url">accordion</a> content
												</div>
											</div>

										</section>

										<p>Here is some accordion <a href="#url">content</a>.</p>

									</div>

								</div>
							</section>
						</li>
						<li>
							<section className="au-accordion au-accordion--dark">
								<button
									className="au-accordion__title au-accordion--closed js-au-accordion"
									aria-controls="accordion-dark-stacked-grid2"
									aria-expanded="false"
									aria-selected="false"
									// onClick="return AU.accordion.Toggle( this )"
								>
									Another accordion
								</button>

								<div className="au-accordion__body au-accordion--closed" id="accordion-dark-stacked-grid2">
									<div className="au-accordion__body-wrapper">
										<p>Here is some accordion content</p>
										<p>Here is some <a href="#url">accordion</a> content</p>
										<p>Here is some accordion content</p>
									</div>
								</div>
							</section>
						</li>
						<li>
							<section className="au-accordion au-accordion--dark">
								<button
									className="au-accordion__title au-accordion--closed js-au-accordion"
									aria-controls="accordion-dark-stacked-grid3"
									aria-expanded="false"
									aria-selected="false"
									// onClick="return AU.accordion.Toggle( this )"
								>
									Accordion with words and words and a very long title so that it can break into several
								</button>

								<div className="au-accordion__body au-accordion--closed" id="accordion-dark-stacked-grid3">
									<div className="au-accordion__body-wrapper">
										<p>Here is some accordion content</p>
										<p>Here is some <a href="#url">accordion</a> content</p>
										<p>Here is some accordion content</p>
									</div>
								</div>
							</section>
						</li>
					</ul>


				</div>

			</div>
		</div>
		<div className="split-wrapper">

			<div className="split split--alt">
				<h3>Accordion open by default on alt</h3>

				<section className="au-accordion">
					<button
						className="au-accordion__title js-au-accordion"
						aria-controls="accordion-alt"
						aria-expanded="true"
						// onClick="return AU.accordion.Toggle( this )"
					>
						Accordion title
					</button>

					<div className="au-accordion__body" id="accordion-alt">
						<div className="au-accordion__body-wrapper">
							<div className="no-a11y-test">Here <a href="#url">is</a> some accordion content</div>
						</div>
					</div>
				</section>

				<div className="au-body au-body--alt">
					<h2>With body on alt</h2>

					<h3>Accordion open by default <code>--alt</code></h3>
					<section className="au-accordion">
						<button
							className="au-accordion__title js-au-accordion"
							aria-controls="accordion-body-alt"
							aria-expanded="true"
							// onClick="return AU.accordion.Toggle( this )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body" id="accordion-body-alt">
							<div className="au-accordion__body-wrapper">

								Here <a href="#url">is</a> some accordion content

							</div>
						</div>
					</section>
				</div>

			</div>

			<div className="split split--dark split--alt">
				<h3>Accordion <code>--dark</code> open by default on alt</h3>

				<section className="au-accordion au-accordion--dark">
					<button
						className="au-accordion__title js-au-accordion"
						aria-controls="accordion-altdark"
						aria-expanded="true"
						// onClick="return AU.accordion.Toggle( this )"
					>
						Accordion title
					</button>

					<div className="au-accordion__body" id="accordion-altdark">
						<div className="au-accordion__body-wrapper">
							<div className="no-a11y-test">Here <a href="#url">is</a> some accordion content</div>
						</div>
					</div>
				</section>

				<div className="au-body au-body--dark au-body--alt">
					<h2>With body on dark and alt</h2>

					<h3>Accordion <code>--dark</code> open by default</h3>
					<section className="au-accordion au-accordion--dark">
						<button
							className="au-accordion__title js-au-accordion"
							aria-controls="accordion-body-altdark"
							aria-expanded="true"
							// onClick="return AU.accordion.Toggle( this )"
						>
							Accordion title
						</button>

						<div className="au-accordion__body" id="accordion-body-altdark">
							<div className="au-accordion__body-wrapper">

								Here <a href="#url">is</a> some accordion content

							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</>
);

export default withLayout(Accordion);
