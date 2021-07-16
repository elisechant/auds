import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Buttons = () => (
	<>
		<h1>Test: buttons</h1>

		<div className="split-wrapper">
			<div className="split">
				<h2>primary button</h2>

				<button className="au-btn">Continue</button>
				<button className="au-btn" disabled>Continue</button>

				<hr/>
				<h2>secondary button</h2>

				<button className="au-btn au-btn--secondary">Save</button>
				<button className="au-btn au-btn--secondary" disabled>Save</button>

				<hr/>
				<h2>tertiary button</h2>

				<button className="au-btn au-btn--tertiary">Cancel</button>
				<button className="au-btn au-btn--tertiary" disabled>Cancel</button>

				<hr/>
				<h2>buttons with block</h2>

				<button className="au-btn au-btn--block">Continue</button>
				<button className="au-btn au-btn--secondary au-btn--block">Save</button>
				<button className="au-btn au-btn--tertiary au-btn--block">Cancel</button>

				<hr/>
				<h2>Links <code>&lt;a</code> styled to look like buttons</h2>

				<a className="au-btn" href="#url">I am actually a link</a>
				<a className="au-btn au-btn--secondary" href="#url">I am actually a link</a>
				<a className="au-btn au-btn--tertiary" href="#url">I am actually a link</a>

				<hr/>

				<a className="au-btn au-btn--block" href="#url">I am actually a link</a>

				<div className="au-body">
					<h2>buttons as links in body</h2>

					<a className="au-btn" href="#url">I am actually a link</a>
					<a className="au-btn au-btn--secondary" href="#url">I am actually a link</a>
					<a className="au-btn au-btn--tertiary" href="#url">I am actually a link</a>

					<h2>buttons as buttons in body</h2>

					<button className="au-btn">Continue</button>
					<button className="au-btn au-btn--secondary">Save</button>
					<button className="au-btn au-btn--tertiary">Cancel</button>
				</div>
			</div>
			<div className="split split--dark">

				<h2>primary button <code>--dark</code></h2>

				<button className="au-btn au-btn--dark">Continue</button>
				<button className="au-btn au-btn--dark" disabled>Continue</button>

				<hr/>
				<h2>secondary button <code>--dark</code></h2>

				<button className="au-btn au-btn--dark au-btn--secondary">Save</button>
				<button className="au-btn au-btn--dark au-btn--secondary" disabled>Save</button>

				<hr/>
				<h2>tertiary button <code>--dark</code></h2>

				<button className="au-btn au-btn--dark au-btn--tertiary">Cancel</button>
				<button className="au-btn au-btn--dark au-btn--tertiary" disabled>Cancel</button>

				<hr/>
				<h2>buttons with block <code>--dark</code></h2>

				<button className="au-btn au-btn--dark au-btn--block">Continue</button>
				<button className="au-btn au-btn--dark au-btn--secondary au-btn--block">Save</button>
				<button className="au-btn au-btn--dark au-btn--tertiary au-btn--block">Cancel</button>

				<hr/>
				<h2>Links <code>&lt;a</code> styled to look like buttons <code>--dark</code></h2>

				<a className="au-btn au-btn--dark" href="#url">I am actually a link</a>
				<a className="au-btn au-btn--dark au-btn--secondary" href="#url">I am actually a link</a>
				<a className="au-btn au-btn--dark au-btn--tertiary" href="#url">I am actually a link</a>

				<hr/>

				<a className="au-btn au-btn--dark au-btn--block" href="#url">I am actually a link</a>

				<div className="au-body au-body--dark">
					<h2>buttons as links in body</h2>

					<a className="au-btn au-btn--dark" href="#url">I am actually a link</a>
					<a className="au-btn au-btn--dark au-btn--secondary" href="#url">I am actually a link</a>
					<a className="au-btn au-btn--dark au-btn--tertiary" href="#url">I am actually a link</a>

					<h2>buttons as buttons in body</h2>

					<button className="au-btn au-btn--dark">Continue</button>
					<button className="au-btn au-btn--dark au-btn--secondary">Save</button>
					<button className="au-btn au-btn--dark au-btn--tertiary">Cancel</button>
				</div>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
				<h2>primary button</h2>

				<button className="au-btn">Continue</button>
				<button className="au-btn" disabled>Continue</button>

				<hr/>
				<h2>secondary button</h2>

				<button className="au-btn au-btn--secondary">Save</button>
				<button className="au-btn au-btn--secondary" disabled>Save</button>

				<hr/>
				<h2>tertiary button</h2>

				<button className="au-btn au-btn--tertiary">Cancel</button>
				<button className="au-btn au-btn--tertiary" disabled>Cancel</button>

				<hr/>
				<h2>buttons with block</h2>

				<button className="au-btn au-btn--block">Continue</button>
				<button className="au-btn au-btn--secondary au-btn--block">Save</button>
				<button className="au-btn au-btn--tertiary au-btn--block">Cancel</button>

				<hr/>
				<h2>Links <code>&lt;a</code> styled to look like buttons</h2>

				<a className="au-btn" href="#url">I am actually a link</a>
				<a className="au-btn au-btn--secondary" href="#url">I am actually a link</a>
				<a className="au-btn au-btn--tertiary" href="#url">I am actually a link</a>

				<hr/>

				<a className="au-btn au-btn--block" href="#url">I am actually a link</a>

				<div className="au-body au-body--alt">
					<h2>buttons as links in body</h2>

					<a className="au-btn" href="#url">I am actually a link</a>
					<a className="au-btn au-btn--secondary" href="#url">I am actually a link</a>
					<a className="au-btn au-btn--tertiary" href="#url">I am actually a link</a>

					<h2>buttons as buttons in body</h2>

					<button className="au-btn">Continue</button>
					<button className="au-btn au-btn--secondary">Save</button>
					<button className="au-btn au-btn--tertiary">Cancel</button>
				</div>
			</div>
			<div className="split split--alt split--dark">

				<h2>primary button <code>--dark</code></h2>

				<button className="au-btn au-btn--dark">Continue</button>
				<button className="au-btn au-btn--dark" disabled>Continue</button>

				<hr/>
				<h2>secondary button <code>--dark</code></h2>

				<button className="au-btn au-btn--dark au-btn--secondary">Save</button>
				<button className="au-btn au-btn--dark au-btn--secondary" disabled>Save</button>

				<hr/>
				<h2>tertiary button <code>--dark</code></h2>

				<button className="au-btn au-btn--dark au-btn--tertiary">Cancel</button>
				<button className="au-btn au-btn--dark au-btn--tertiary" disabled>Cancel</button>

				<hr/>
				<h2>buttons with block <code>--dark</code></h2>

				<button className="au-btn au-btn--dark au-btn--block">Continue</button>
				<button className="au-btn au-btn--dark au-btn--secondary au-btn--block">Save</button>
				<button className="au-btn au-btn--dark au-btn--tertiary au-btn--block">Cancel</button>

				<hr/>
				<h2>Links <code>&lt;a</code> styled to look like buttons <code>--dark</code></h2>

				<a className="au-btn au-btn--dark" href="#url">I am actually a link</a>
				<a className="au-btn au-btn--dark au-btn--secondary" href="#url">I am actually a link</a>
				<a className="au-btn au-btn--dark au-btn--tertiary" href="#url">I am actually a link</a>

				<hr/>

				<a className="au-btn au-btn--dark au-btn--block" href="#url">I am actually a link</a>

				<div className="au-body au-body--dark au-body--alt">
					<h2>buttons as links in body</h2>

					<a className="au-btn au-btn--dark" href="#url">I am actually a link</a>
					<a className="au-btn au-btn--dark au-btn--secondary" href="#url">I am actually a link</a>
					<a className="au-btn au-btn--dark au-btn--tertiary" href="#url">I am actually a link</a>

					<h2>buttons as buttons in body</h2>

					<button className="au-btn au-btn--dark">Continue</button>
					<button className="au-btn au-btn--dark au-btn--secondary">Save</button>
					<button className="au-btn au-btn--dark au-btn--tertiary">Cancel</button>
				</div>
			</div>
		</div>

		<div className="height-test">
			<label className="no-a11y-test" htmlFor="select-height-test">What option?</label>
			<select id="select-height-test" className="au-select">
				<option value="">Please select</option>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</select>
			<label className="no-a11y-test" htmlFor="textinput-height-test">A text input field</label>
			<input className="au-text-input" name="textinput-height-test" id="textinput-height-test" type="text"
			       value="ABCZ abcjg liI1 12340"/>
			<button className="au-btn">Button</button>
			<button className="au-btn au-btn--secondary">Button</button>
			<button className="au-btn au-btn--tertiary">Button</button>
		</div>
	</>
);

export default withLayout(Buttons);
