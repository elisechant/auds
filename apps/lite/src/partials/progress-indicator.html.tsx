import React from 'react';
import {withLayout} from '../helpers/withLayout';

const ProgressIndicator = () => (
	<>

		<h1 id="url">Test: progress-indicator</h1>

		<div className="split-wrapper">
			<div className="split">
				<h2>without body</h2>

				<nav>
					<ul className="au-progress-indicator">
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--doing" href="#url">
								<span className="au-progress-indicator__status">Doing</span>
								Introduction
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Business Contacts
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Case Studies
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Personal Infos
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Very long title that will likely break because it is a very long line as I just mentioned
							</a>
						</li>
						<li>
							<button type="button" className="au-progress-indicator__link au-progress-indicator__link--todo">
								<span className="au-progress-indicator__status">To do</span>
								With a button
							</button>
						</li>
						<li>
							<button type="button" className="au-progress-indicator__link au-progress-indicator__link--todo">
								<span className="au-progress-indicator__status">done</span>
								With a button and really a lot of text because we have to test what long lines look like
							</button>
						</li>
					</ul>
				</nav>


				<hr/>
				<h2>with body</h2>

				<nav className="au-body">
					<ul className="au-progress-indicator">
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--doing" href="#url">
								<span className="au-progress-indicator__status">Doing</span>
								Introduction
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Business Contacts
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Case Studies
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Personal Infos
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Very long title that will likely break because it is a very long line as I just mentioned
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="split split--dark">
				<h2>without body</h2>

				<nav>
					<ul className="au-progress-indicator au-progress-indicator--dark">
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--doing" href="#url">
								<span className="au-progress-indicator__status">Doing</span>
								Introduction
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Business Contacts
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Case Studies
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Personal Infos
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Very long title that will likely break because it is a very long line as I just mentioned
							</a>
						</li>
						<li>
							<button type="button" className="au-progress-indicator__link au-progress-indicator__link--todo">
								<span className="au-progress-indicator__status">To do</span>
								With a button
							</button>
						</li>
						<li>
							<button type="button" className="au-progress-indicator__link au-progress-indicator__link--todo">
								<span className="au-progress-indicator__status">done</span>
								With a button and really a lot of text because we have to test what long lines look like
							</button>
						</li>
					</ul>
				</nav>


				<hr/>
				<h2>with body</h2>

				<nav className="au-body au-body--dark">
					<ul className="au-progress-indicator au-progress-indicator--dark">
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--doing" href="#url">
								<span className="au-progress-indicator__status">Doing</span>
								Introduction
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Business Contacts
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Case Studies
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Personal Infos
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Very long title that will likely break because it is a very long line as I just mentioned
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
				<h2>without body alt</h2>

				<nav>
					<ul className="au-progress-indicator">
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--doing" href="#url">
								<span className="au-progress-indicator__status">Doing</span>
								Introduction
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Business Contacts
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Case Studies
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Personal Infos
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Very long title that will likely break because it is a very long line as I just mentioned
							</a>
						</li>
						<li>
							<button type="button" className="au-progress-indicator__link au-progress-indicator__link--todo">
								<span className="au-progress-indicator__status">To do</span>
								With a button
							</button>
						</li>
						<li>
							<button type="button" className="au-progress-indicator__link au-progress-indicator__link--todo">
								<span className="au-progress-indicator__status">done</span>
								With a button and really a lot of text because we have to test what long lines look like
							</button>
						</li>
					</ul>
				</nav>


				<hr/>
				<h2>with body alt</h2>

				<nav className="au-body au-body--alt">
					<ul className="au-progress-indicator">
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--doing" href="#url">
								<span className="au-progress-indicator__status">Doing</span>
								Introduction
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Business Contacts
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Case Studies
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Personal Infos
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Very long title that will likely break because it is a very long line as I just mentioned
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="split split--alt split--dark">
				<h2>without body and alt</h2>

				<nav>
					<ul className="au-progress-indicator au-progress-indicator--dark">
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--doing" href="#url">
								<span className="au-progress-indicator__status">Doing</span>
								Introduction
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Business Contacts
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Case Studies
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Personal Infos
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Very long title that will likely break because it is a very long line as I just mentioned
							</a>
						</li>
						<li>
							<button type="button" className="au-progress-indicator__link au-progress-indicator__link--todo">
								<span className="au-progress-indicator__status">To do</span>
								With a button
							</button>
						</li>
						<li>
							<button type="button" className="au-progress-indicator__link au-progress-indicator__link--todo">
								<span className="au-progress-indicator__status">done</span>
								With a button and really a lot of text because we have to test what long lines look like
							</button>
						</li>
					</ul>
				</nav>


				<hr/>
				<h2>with body and alt</h2>

				<nav className="au-body au-body--alt au-body--dark">
					<ul className="au-progress-indicator au-progress-indicator--dark">
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--doing" href="#url">
								<span className="au-progress-indicator__status">Doing</span>
								Introduction
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Business Contacts
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Case Studies
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--done" href="#url">
								<span className="au-progress-indicator__status">Done</span>
								Personal Infos
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Spouses
							</a>
						</li>
						<li>
							<a className="au-progress-indicator__link au-progress-indicator__link--todo" href="#url">
								<span className="au-progress-indicator__status">To do</span>
								Very long title that will likely break because it is a very long line as I just mentioned
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</>
);

export default withLayout(ProgressIndicator);

