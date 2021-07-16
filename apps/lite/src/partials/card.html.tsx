import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Card = () => (
	<>
		<h1>Test: card</h1>

		<div className="row">
			<div className="col-md-4">
				<h2>Basic card</h2><br/>
				<div className="au-card">
					<div className="au-card__inner">
						<h2 className="au-card__title">Card Title</h2>
						<p>Some text</p>
						<p>Additional text</p>
					</div>
				</div>
				<br/><br/>

				<h2>Basic card with feature title</h2><br/>

				<div className="au-card">
					<div className="au-card__header au-body au-body--alt">
						Some heading
					</div>
					<div className="au-card__inner">
						<div className="au-card__body">
							<p>Some text</p>
							<p>Additional text</p>
						</div>
					</div>
				</div>
				<br/><br/>

				<h2>Basic card with centered content</h2><br/>

				<div className="au-card au-card--centred au-body">
					<div className="au-body au-body--alt">
						<h2 className="au-card__header">Some heading</h2>
					</div>
					<div className="au-card__inner">
						<p>Some text</p>
						<p>Additional text</p>
					</div>
				</div>
				<br/><br/>


				<h2>Basic card with centered header but not body</h2><br/>

				<div className="au-card au-body">
					<div className="au-body au-body--alt au-card--centred">
						<h2 className="au-card__header">Some heading</h2>
					</div>
					<div className="au-card__inner">
						<span>Some text</span> <br/>
						<p>Additional text</p>
					</div>
				</div>
				<br/><br/>

				<h2>Dark Card</h2><br/>

				<div className="au-card au-body au-body--dark  ">
					<div className="au-card__inner">
						<h2 className="au-card__title">Card title</h2>
						<span>Some text</span> <br/>
					</div>
				</div>
				<br/><br/>


				<h2>Alt card</h2><br/>

				<div className="au-card au-body au-body--alt">
					<div className="au-card__inner">
						<h2 className="au-card__title">Card title</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, assumenda?</p>
					</div>
				</div>
				<br/><br/>

				<h2>Basic card with a box shadow</h2><br/>
				<div className="au-card au-card--shadow">
					<div className="au-card__inner">
						<h2 className="au-card__title">Card title</h2>
						<hr className="au-card__divider"/>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illum illo quis magnam sapiente ipsum
							quos
							aperiam quas. Tempora delectus nemo sequi quisquam sapiente sed nesciunt! Amet, voluptatem. Dolore,
							corrupti?</p>
					</div>
				</div>
				<br/><br/>


				<h2>Basic card with call to action link and footer</h2><br/>
				<div className="au-card au-body">
					<div className="au-card__inner">
						<h2 className="au-card__title">Some heading</h2>
						<div className="au-card__body">
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, voluptatibus.</p>
						</div>
					</div>
					<div className="au-card__footer">
						<a className="au-cta-link au-cta-link--alt" href="#">Sign up</a>
					</div>
				</div>
				<br/><br/>


				<h2>Basic card with image and CTA</h2><br/>
				<div className="au-card au-card--shadow">
					<div className="au-card__inner">
						<h2 className="au-card__title">Some heading</h2>
						<img className="au-responsive-media-img" src="http://placehold.it/1200x500"
						     alt="Placeholder image 1200 by 500"/>
						<p>Some text</p>
						<p>Additional text</p>
						<hr className="au-card__divider"/>
						<br/>
						<a className="au-cta-link" href="#">Sign up</a>
					</div>
				</div>
				<br/><br/>

				<h2>Basic card with full width images</h2><br/>
				<div className="au-card au-card--shadow">
					<img className="au-responsive-media-img" src="http://placehold.it/1200x500"
					     alt="Placeholder image 1200 by 500"/>
					<div className="au-card__inner">
						<h2 className="au-card__title">Card title</h2>
						<p>Some text</p>
						<p>Additional text</p>
						<div className="au-body">
							<a href="#">Sign up</a>
						</div>
					</div>
				</div>
			</div>
			<br/><br/>

			<div className="col-md-4 col-md-offset-2">
				<h1>Link cards</h1>
				<h2>Card wrapped around an anchor tag</h2><br/>
				<a className="au-card" href="#">
					<div className="au-card__inner">
						<h2 className="au-card__title">Card title</h2>
						<hr className="au-card__divider"/>
						<p>Some text</p>
						<p>Additional text</p>
					</div>
				</a>
				<br/><br/>

				<h2>Card wrapped around an anchor tag, with image</h2><br/>
				<a className="au-card au-card--shadow au-body" href="#">
					<img className="au-responsive-media-img" src="http://placehold.it/1200x500"
					     alt="Placeholder image 1200 by 500"/>
					<div className="au-card__inner">
						<h2 className="au-card__title">Card title</h2>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus nemo excepturi adipisci
							accusamus
							aut.</p>
					</div>
				</a>
				<br/><br/>

				<h2>Card with a single anchor, with hit area wrapping card </h2><br/>
				<div className="au-card au-card--shadow au-card--clickable au-body">
					<img className="au-responsive-media-img" src="http://placehold.it/1200x500"
					     alt="Placeholder image 1200 by 500"/>
					<div className="au-card__inner">
						<h2 className="au-card__title"><a className="au-card--clickable__link" href="#">Some heading</a></h2>
						<p>Some text</p>
						<p>Additional text</p>
					</div>
				</div>
				<br/><br/>

				<h2>Card with a single anchor, with hit area wrapping card <code>--alt</code></h2><br/>
				<div className="au-card au-card--shadow au-card--clickable au-body au-body--alt">
					<img className="au-responsive-media-img" src="http://placehold.it/1200x500"
					     alt="Placeholder image 1200 by 500"/>
					<h2 className="au-card__header"><a className="au-card--clickable__link" href="#">Some heading</a></h2>
					<div className="au-card__inner">
						<p>Some text</p>
						<p>Additional text</p>
					</div>
				</div>
				<br/><br/>

			</div>
		</div>

		<div>
			<h1>Card List example</h1>

			<div className="row">
				<ul className="au-card-list au-card-list--matchheight">
					<li className="col-sm-3 xol-xs-6">
						<div className="au-card">
							<h2 className="au-card__header">Card 1</h2>
							<div className="au-card__inner">
								<p>Some text</p>
								<p>Additional text</p>
							</div>
						</div>
					</li>
					<li className="col-sm-3 xol-xs-6">
						<div className="au-card">
							<h2 className="au-card__header">Card 2</h2>
							<div className="au-card__inner">
								<p>Some text</p>
								<p>Additional text</p>
								<p>More text</p>
							</div>
						</div>
					</li>
					<li className="col-sm-3 xol-xs-6">
						<div className="au-card">
							<h2 className="au-card__header">Card 3</h2>
							<div className="au-card__inner">
								<p>Some text</p>
								<p>Additional text</p>
							</div>
						</div>
					</li>
					<li className="col-sm-3 xol-xs-6">
						<div className="au-card">
							<h2 className="au-card__header">Card 4</h2>
							<div className="au-card__inner">
								<p>Some text</p>
								<p>Additional text</p>
							</div>
						</div>
					</li>

					<li className="col-sm-3 xol-xs-6">
						<div className="au-card">
							<h2 className="au-card__header">Card 5</h2>
							<div className="au-card__inner">
								<p>Some text</p>
								<p>Additional text</p>
							</div>
						</div>
					</li>
					<li className="col-sm-3 xol-xs-6">
						<div className="au-card">
							<h2 className="au-card__header">Card 6</h2>
							<div className="au-card__inner">
								<p>Some text</p>
								<p>Additional text</p>
							</div>
						</div>
					</li>
					<li className="col-sm-3 xol-xs-6">
						<div className="au-card">
							<h2 className="au-card__header">Card 7</h2>
							<div className="au-card__inner">
								<p>Some text</p>
								<p>Additional text</p>
							</div>
						</div>
					</li>
					<li className="col-sm-3 xol-xs-6">
						<div className="au-card">
							<h2 className="au-card__header">Card 8</h2>
							<div className="au-card__inner">
								<p>Some text</p>
								<p>Additional text</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</>
);

export default withLayout(Card);
