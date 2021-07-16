import React from 'react';
import {withLayout} from '../helpers/withLayout';

const CtaLink = () => (
	<>
		<h1>Test: cta-link</h1>

		<div className="split-wrapper">
			<div className="split">
				<h2>cta-link</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
					maiores minus ipsum sit ut aut atque nesciunt
					doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
					Deleniti consectetur, sed saepe rem culpa
					quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque
					optio quos quisquam?
				</p>

				<a className="au-cta-link" href="#">Sign up</a>

				<hr/>

				<h2>cta-link as button</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
					maiores minus ipsum sit ut aut atque nesciunt
					doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
					Deleniti consectetur, sed saepe rem culpa
					quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque
					optio quos quisquam?
				</p>

				<button className="au-cta-link">Sign up</button>

				<hr/>

				<div className="au-body">
					<h2>cta-link with body</h2>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
						maiores minus ipsum sit ut aut atque nesciunt
						doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
						Deleniti consectetur, sed saepe rem culpa
						quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum
						neque
						optio quos quisquam?
					</p>

					<a className="au-cta-link" href="#">Sign up</a>
				</div>
			</div>
			<div className="split split--dark">
				<h2>cta-link <code>--dark</code></h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
					maiores minus ipsum sit ut aut atque nesciunt
					doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
					Deleniti consectetur, sed saepe rem culpa
					quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque
					optio quos quisquam?
				</p>

				<a className="au-cta-link au-cta-link--dark" href="#">Sign up</a>

				<hr/>

				<h2>cta-link as button <code>--dark</code></h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
					maiores minus ipsum sit ut aut atque nesciunt
					doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
					Deleniti consectetur, sed saepe rem culpa
					quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque
					optio quos quisquam?
				</p>

				<button className="au-cta-link au-cta-link--dark">Sign up</button>

				<hr/>

				<div className="au-body au-body--dark">
					<h2>cta-link with body <code>--dark</code></h2>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
						maiores minus ipsum sit ut aut atque nesciunt
						doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
						Deleniti consectetur, sed saepe rem culpa
						quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum
						neque
						optio quos quisquam?
					</p>

					<a className="au-cta-link au-cta-link--dark" href="#">Sign up</a>
				</div>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
				<h2>cta-link</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
					maiores minus ipsum sit ut aut atque nesciunt
					doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
					Deleniti consectetur, sed saepe rem culpa
					quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque
					optio quos quisquam?
				</p>

				<a className="au-cta-link" href="#">Sign up</a>

				<hr/>

				<h2>cta-link as button</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
					maiores minus ipsum sit ut aut atque nesciunt
					doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
					Deleniti consectetur, sed saepe rem culpa
					quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque
					optio quos quisquam?
				</p>

				<button className="au-cta-link">Sign up</button>

				<hr/>

				<div className="au-body au-body--alt">
					<h2>cta-link with body</h2>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
						maiores minus ipsum sit ut aut atque nesciunt
						doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
						Deleniti consectetur, sed saepe rem culpa
						quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum
						neque
						optio quos quisquam?
					</p>

					<a className="au-cta-link" href="#">Sign up</a>
				</div>
			</div>
			<div className="split split--alt split--dark">
				<h2>cta-link <code>--dark</code></h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
					maiores minus ipsum sit ut aut atque nesciunt
					doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
					Deleniti consectetur, sed saepe rem culpa
					quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque
					optio quos quisquam?
				</p>

				<a className="au-cta-link au-cta-link--dark" href="#">Sign up</a>

				<hr/>

				<h2>cta-link as button <code>--dark</code></h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
					maiores minus ipsum sit ut aut atque nesciunt
					doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
					Deleniti consectetur, sed saepe rem culpa
					quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum neque
					optio quos quisquam?
				</p>

				<button className="au-cta-link au-cta-link--dark">Sign up</button>

				<hr/>

				<div className="au-body au-body--alt au-body--dark">
					<h2>cta-link with body <code>--dark</code></h2>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero impedit, iure sequi debitis optio porro unde
						maiores minus ipsum sit ut aut atque nesciunt
						doloremque voluptas doloribus blanditiis suscipit rem? Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
						Deleniti consectetur, sed saepe rem culpa
						quo inventore deserunt, dolore. Provident temporibus consequatur eius maxime assumenda possimus nostrum
						neque
						optio quos quisquam?
					</p>

					<a className="au-cta-link au-cta-link--dark" href="#">Sign up</a>
				</div>
			</div>
		</div>
	</>
);

export default withLayout(CtaLink);
