import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Select = () => (
	<>
		<h1>Test: select</h1>

		<div className="split-wrapper">
			<div className="split">
				<h2>normal select</h2>

				<label htmlFor="select1">What option?</label>

				<select id="select1" className="au-select">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select disabled</h2>

				<label htmlFor="select2">What option?</label>

				<select id="select2" className="au-select" disabled>
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select invalid</h2>

				<label htmlFor="select-invalid">What option?</label>

				<select id="select-invalid" className="au-select" required>
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select invalid via className</h2>

				<label htmlFor="select-invalid2">What option?</label>

				<select id="select-invalid2" className="au-select au-select--invalid">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select valid</h2>

				<label htmlFor="select-valid">What option?</label>

				<select id="select-valid" className="au-select au-select--valid">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>block select</h2>

				<label htmlFor="select3">What option?</label>

				<select id="select3" className="au-select au-select--block">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>

			</div>
			<div className="split split--dark">
				<h2>normal select <code>--dark</code></h2>

				<label htmlFor="select4">What option?</label>

				<select id="select4" className="au-select au-select--dark">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select disabled <code>--dark</code></h2>

				<label htmlFor="select5">What option?</label>

				<select id="select5" className="au-select au-select--dark" disabled>
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select invalid</h2>

				<label htmlFor="select-dark-invalid">What option?</label>

				<select id="select-dark-invalid" className="au-select au-select--dark" required>
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select invalid via className</h2>

				<label htmlFor="select-dark-invalid2">What option?</label>

				<select id="select-dark-invalid2" className="au-select au-select--dark au-select--invalid">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select valid</h2>

				<label htmlFor="select-dark-valid">What option?</label>

				<select id="select-dark-valid" className="au-select au-select--dark au-select--valid">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>block select <code>--dark</code></h2>

				<label htmlFor="select6">What option?</label>

				<select id="select6" className="au-select au-select--dark au-select--block">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
				<h2>normal select on <code>--alt</code> background</h2>

				<label htmlFor="select7">What option?</label>

				<select id="select7" className="au-select">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select disabled</h2>

				<label htmlFor="select8">What option?</label>

				<select id="select8" className="au-select" disabled>
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select invalid</h2>

				<label htmlFor="select-alt-invalid">What option?</label>

				<select id="select-alt-invalid" className="au-select" required>
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select invalid via className</h2>

				<label htmlFor="select-alt-invalid2">What option?</label>

				<select id="select-alt-invalid2" className="au-select au-select--invalid">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select valid</h2>

				<label htmlFor="select-alt-valid">What option?</label>

				<select id="select-alt-valid" className="au-select au-select--valid">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>block select</h2>

				<label htmlFor="select9">What option?</label>

				<select id="select9" className="au-select au-select--block">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
			</div>
			<div className="split split--alt split--dark">
				<h2>normal select <code>--alt --dark</code></h2>

				<label htmlFor="select10">What option?</label>

				<select id="select10" className="au-select au-select--dark">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select disabled <code>--dark</code></h2>

				<label htmlFor="select11">What option?</label>

				<select id="select11" className="au-select au-select--dark" disabled>
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select invalid</h2>

				<label htmlFor="select-alt-dark-invalid">What option?</label>

				<select id="select-alt-dark-invalid" className="au-select au-select--dark" required>
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select invalid via className</h2>

				<label htmlFor="select-alt-dark-invalid2">What option?</label>

				<select id="select-alt-dark-invalid2" className="au-select au-select--dark au-select--invalid">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>select valid</h2>

				<label htmlFor="select-alt-dark-valid">What option?</label>

				<select id="select-alt-dark-valid" className="au-select au-select--dark au-select--valid">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>


				<hr/>
				<h2>block select <code>--dark</code></h2>

				<label htmlFor="select12">What option?</label>

				<select id="select12" className="au-select au-select--dark au-select--block">
					<option value="">Please select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
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

export default withLayout(Select);
