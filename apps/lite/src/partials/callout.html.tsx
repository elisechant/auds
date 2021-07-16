import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Callout = () => (
	<>
		<h1>Test: callout</h1>

		<div className="split-wrapper">
			<div className="split">
				<h2>Generic callout applied to a container</h2>

				<p>The following container has the callout className, and holds a number of paragraphs.</p>

				<section className="au-callout">
					<h2 className="au-callout__heading">Description of the callout</h2>
					<p>Nullam quis aliquam massa. Nunc suscipit, nisi in facilisis tempus, lectus quam ullamcorper tellus, in
						rutrum
						ipsum tortor sed nisl.</p>
					<p>Duis condimentum maximus ligula sed tincidunt.</p>
				</section>

				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam esse, deserunt eius facilis sit
					laudantium veritatis soluta corrupti repudiandae.</p>

				<hr/>
				<h2>Callout with screen reader only title</h2>

				<p>The following container has the callout className, and holds a number of paragraphs.</p>

				<section className="au-callout">
					<h2 className="au-callout__heading au-callout__heading--sronly">Description of the callout</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>Eum accusantium fuga libero delectus dolor, dicta eaque obcaecati doloremque corporis ut amet molestias
						totam a
						rerum eius vitae, laboriosam soluta unde!</p>
				</section>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempora voluptates aliquid minus minima
					repellendus
					est porro facilis numquam excepturi totam quo, deleniti atque voluptas accusantium dicta, incidunt ad?
					Temporibus.</p>

				<hr/>
				<h2>Generic callout applied to a container with au-body</h2>

				<div className="au-body">
					<section className="au-callout">
						<h2 className="au-callout__heading">Description of the callout</h2>
						<p>Nullam quis aliquam massa. Nunc suscipit, nisi in facilisis tempus, lectus quam ullamcorper tellus, in
							rutrum
							ipsum tortor sed nisl.</p>

						<p>Duis condimentum maximus ligula sed tincidunt.</p>
					</section>
				</div>

				<hr/>
				<h2>Calendar event callout</h2>

				<section className="au-callout au-callout--calendar-event">
					<h2 className="au-callout__heading au-callout__heading--sronly">Description of the callout</h2>
					<p className="au-callout--calendar-event__lede">The next public holiday is:</p>
					<time className="au-callout--calendar-event__time" dateTime="2017-01-01T00:00:00+00:00">Sunday 1 January
					</time>
					<span className="au-callout--calendar-event__name">New Year’s Day</span>
				</section>
			</div>
			<div className="split split--dark">
				<h2>Generic callout applied to a container <code>--dark</code></h2>

				<p>The following container has the callout className, and holds a number of paragraphs.</p>

				<section className="au-callout au-callout--dark">
					<h2 className="au-callout__heading">Description of the callout</h2>
					<p>Nullam quis aliquam massa. Nunc suscipit, nisi in facilisis tempus, lectus quam ullamcorper tellus, in
						rutrum
						ipsum tortor sed nisl.</p>
					<p>Duis condimentum maximus ligula sed tincidunt.</p>
				</section>

				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam esse, deserunt eius facilis sit
					laudantium veritatis soluta corrupti repudiandae.</p>

				<hr/>
				<h2>Callout with screen reader only title <code>--dark</code></h2>

				<p>The following container has the callout className, and holds a number of paragraphs.</p>

				<section className="au-callout au-callout--dark">
					<h2 className="au-callout__heading au-callout__heading--sronly">Description of the callout</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<p>Eum accusantium fuga libero delectus dolor, dicta eaque obcaecati doloremque corporis ut amet molestias
						totam a
						rerum eius vitae, laboriosam soluta unde!</p>
				</section>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempora voluptates aliquid minus minima
					repellendus
					est porro facilis numquam excepturi totam quo, deleniti atque voluptas accusantium dicta, incidunt ad?
					Temporibus.</p>

				<hr/>
				<h2>Generic callout applied to a container with au-body <code>--dark</code></h2>

				<div className="au-body">
					<section className="au-callout au-callout--dark">
						<h2 className="au-callout__heading">Description of the callout</h2>
						<p>Nullam quis aliquam massa. Nunc suscipit, nisi in facilisis tempus, lectus quam ullamcorper tellus, in
							rutrum
							ipsum tortor sed nisl.</p>

						<p>Duis condimentum maximus ligula sed tincidunt.</p>
					</section>
				</div>

				<hr/>
				<h2>Calendar event callout <code>--dark</code></h2>

				<section className="au-callout au-callout--calendar-event au-callout--dark">
					<h2 className="au-callout__heading au-callout__heading--sronly">Description of the callout</h2>
					<p className="au-callout--calendar-event__lede">The next public holiday is:</p>
					<time className="au-callout--calendar-event__time" dateTime="2017-01-01T00:00:00+00:00">Sunday 1 January
					</time>
					<span className="au-callout--calendar-event__name">New Year’s Day</span>
				</section>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
				<h2>Generic callout applied to a container <code>--alt</code></h2>

				<p>The following container has the callout className, and holds a number of paragraphs.</p>

				<section className="au-callout au-callout--alt">
					<h2 className="au-callout__heading">Description of the callout</h2>
					<p>Nullam quis aliquam massa. Nunc suscipit, nisi in facilisis tempus, lectus quam ullamcorper tellus, in
						rutrum
						ipsum tortor sed nisl.</p>
					<p>Duis condimentum maximus ligula sed tincidunt.</p>
				</section>
			</div>
			<div className="split split--alt split--dark">
				<h2>Generic callout applied to a container <code>--dark</code> <code>--alt</code></h2>

				<p>The following container has the callout className, and holds a number of paragraphs.</p>

				<section className="au-callout au-callout--dark au-callout--alt">
					<h2 className="au-callout__heading">Description of the callout</h2>
					<p>Nullam quis aliquam massa. Nunc suscipit, nisi in facilisis tempus, lectus quam ullamcorper tellus, in
						rutrum
						ipsum tortor sed nisl.</p>
					<p>Duis condimentum maximus ligula sed tincidunt.</p>
				</section>
			</div>
		</div>
	</>
);

export default withLayout(Callout);
