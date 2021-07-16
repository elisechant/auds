import React from 'react';
import {withLayout} from '../helpers/withLayout';

const ControlInput = () => (
	<>
		<h1>Test: control-input</h1>

		<div className="split-wrapper">
			<div className="split">

				<h2>checkboxes</h2>

				<div className="au-control-input">
					<input id="phone-cb" type="checkbox" className="au-control-input__input" name="checkbox-cb"/>
					<label htmlFor="phone-cb" className="au-control-input__text">Phone</label>
				</div>
				<div className="au-control-input">
					<input id="tablet-cb" type="checkbox" className="au-control-input__input" name="checkbox-cb" checked/>
					<label htmlFor="tablet-cb" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input">
					<input id="fax-cb-uc" type="checkbox" className="au-control-input__input" name="checkbox-cb" disabled/>
					<label htmlFor="fax-cb-uc" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input">
					<input id="fax-cb-ch" type="checkbox" className="au-control-input__input" name="checkbox-cb" checked
					       disabled/>
					<label htmlFor="fax-cb-ch" className="au-control-input__text">Fax</label>
				</div>

				<hr/>

				<h2>checkboxes <code>--small</code></h2>

				<div className="au-control-input au-control-input--small">
					<input id="phone-cb-small" type="checkbox" className="au-control-input__input" name="checkbox-small"/>
					<label htmlFor="phone-cb-small" className="au-control-input__text">Phone</label>
				</div>
				<div className="au-control-input au-control-input--small">
					<input id="tablet-cb-small" type="checkbox" className="au-control-input__input" name="checkbox-small"
					       checked/>
					<label htmlFor="tablet-cb-small" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--small">
					<input id="fax-cb-small" type="checkbox" className="au-control-input__input" name="checkbox-small" disabled/>
					<label htmlFor="fax-cb-small" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--small">
					<input id="fax-cb-small-disabled" type="checkbox" className="au-control-input__input" name="checkbox-small"
					       disabled
					       checked/>
					<label htmlFor="fax-cb-small-disabled" className="au-control-input__text">Fax</label>
				</div>

				<hr/>

				<h2>radio Buttons</h2>

				<div className="au-control-input">
					<input type="radio" id="radio-yes" className="au-control-input__input" name="radio-ex"/>
					<label htmlFor="radio-yes" className="au-control-input__text"> Yes</label>
				</div>
				<div className="au-control-input">
					<input type="radio" id="radio-no" className="au-control-input__input" name="radio-ex" checked/>
					<label htmlFor="radio-no" className="au-control-input__text">No</label>
				</div>
				<div className="au-control-input">
					<input type="radio" id="radio-maybe" className="au-control-input__input" name="radio-ex-d" disabled/>
					<label htmlFor="radio-maybe" className="au-control-input__text">Maybe</label>
				</div>
				<div className="au-control-input">
					<input type="radio" id="radio-idk" className="au-control-input__input" name="radio-ex-d" disabled checked/>
					<label htmlFor="radio-idk" className="au-control-input__text">I don't know</label>
				</div>
				<hr/>

				<h2>radio <code>--small</code></h2>

				<div className="au-control-input au-control-input--small">
					<input type="radio" id="radio-yes-small" className="au-control-input__input " name="radio-ex-small"/>
					<label htmlFor="radio-yes-small" className="au-control-input__text">Yes</label>
				</div>
				<div className="au-control-input au-control-input--small">
					<input type="radio" id="radio-no-small" className="au-control-input__input" name="radio-ex-small" checked/>
					<label htmlFor="radio-no-small" className="au-control-input__text">No</label>
				</div>
				<div className="au-control-input au-control-input--small">
					<input type="radio" id="radio-maybe-small" className="au-control-input__input" name="radio-ex-small-d"
					       disabled/>
					<label htmlFor="radio-maybe-small" className="au-control-input__text">Maybe</label>
				</div>
				<div className="au-control-input au-control-input--small">
					<input type="radio" id="radio-idk-small" className="au-control-input__input" name="radio-ex-small-d" disabled
					       checked/>
					<label htmlFor="radio-idk-small" className="au-control-input__text">I don't know</label>
				</div>

				<hr/>

				<h2>checkboxes <code>--block</code></h2>


				<div className="au-control-input au-control-input--block">
					<input id="phone-cb-block" type="checkbox" className="au-control-input__input" name="checkbox-block" checked/>
					<label htmlFor="phone-cb-block" className="au-control-input__text">Phone, lorem ipsum dolor sit amet,
						consectetur
						adipiscing elit. Sed consectetur tempor sodales.</label>
				</div>
				<div className="au-control-input au-control-input--block">
					<input id="tablet-cb-block" type="checkbox" className="au-control-input__input" name="checkbox-block"/>
					<label htmlFor="tablet-cb-block" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--block">
					<input id="fax-cb-block" type="checkbox" className="au-control-input__input" name="checkbox-block" disabled/>
					<label htmlFor="fax-cb-block" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--block">
					<input id="fax-cb-block-disabled" type="checkbox" className="au-control-input__input" name="checkbox-block"
					       disabled
					       checked/>
					<label htmlFor="fax-cb-block-disabled" className="au-control-input__text">Fax</label>
				</div>

				<hr/>
				<h2>radio <code>--block</code></h2>

				<div className="au-control-input au-control-input--block">
					<input id="phone-radio-block" type="radio" className="au-control-input__input" name="radio-block"/>
					<label htmlFor="phone-radio-block" className="au-control-input__text">Phone, lorem ipsum dolor sit amet,
						consectetur
						adipiscing elit. Sed consectetur tempor sodales.</label>
				</div>
				<div className="au-control-input au-control-input--block">
					<input id="tablet-radio-block" type="radio" className="au-control-input__input" name="radio-block" checked/>
					<label htmlFor="tablet-radio-block" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--block">
					<input id="fax-radio-block" type="radio" className="au-control-input__input" name="radio-block-d" disabled/>
					<label htmlFor="fax-radio-block" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--block">
					<input id="fax-radio-block-disabled" type="radio" className="au-control-input__input" name="radio-block-d"
					       disabled
					       checked/>
					<label htmlFor="fax-radio-block-disabled" className="au-control-input__text">Fax</label>
				</div>

				<hr/>
				<h2>checkboxes invalid</h2>

				<div className="au-control-input">
					<input id="phone-cb-invalid" type="checkbox" className="au-control-input__input" name="checkbox-block"
					       required/>
					<label htmlFor="phone-cb-invalid" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>checkboxes invalid using className</h2>

				<div className="au-control-input au-control-input--invalid">
					<input id="phone-cb-invalid-className" type="checkbox" className="au-control-input__input"
					       name="checkbox-block"/>
					<label htmlFor="phone-cb-invalid-className" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>checkboxes valid</h2>

				<div className="au-control-input au-control-input--valid">
					<input id="phone-cb-valid-className" type="checkbox" className="au-control-input__input"
					       name="checkbox-block"/>
					<label htmlFor="phone-cb-valid-className" className="au-control-input__text">I agree</label>
				</div>


				<hr/>
				<h2>radio invalid</h2>

				<div className="au-control-input">
					<input id="phone-radio-invalid" type="radio" className="au-control-input__input" name="radio-block-invalid"
					       required/>
					<label htmlFor="phone-radio-invalid" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>radio invalid using className</h2>

				<div className="au-control-input au-control-input--invalid">
					<input id="phone-radio-invalid-className" type="radio" className="au-control-input__input"
					       name="radio-block-invalid-className"/>
					<label htmlFor="phone-radio-invalid-className" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>radio valid using className</h2>

				<div className="au-control-input au-control-input--valid">
					<input id="phone-radio-valid-className" type="radio" className="au-control-input__input"
					       name="radio-block-valid-className"/>
					<label htmlFor="phone-radio-valid-className" className="au-control-input__text">I agree</label>
				</div>


				<hr/>
				<h2>control inputs with states <code>--small</code></h2>
				<div className="au-control-input au-control-input--invalid au-control-input--small">
					<input id="phone-cb-invalid-className-small" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-small"/>
					<label htmlFor="phone-cb-invalid-className-small" className="au-control-input__text">I agree</label>
				</div>

				<div className="au-control-input au-control-input--valid au-control-input--small">
					<input id="phone-cb-valid-className-small" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-small"/>
					<label htmlFor="phone-cb-valid-className-small" className="au-control-input__text">I agree</label>
				</div>
				<div className="au-control-input au-control-input--invalid au-control-input--small">
					<input id="phone-radio-invalid-className-small" type="radio" className="au-control-input__input"
					       name="radio-invalid-small"/>
					<label htmlFor="phone-radio-invalid-className-small" className="au-control-input__text">I agree</label>
				</div>

				<div className="au-control-input au-control-input--valid au-control-input--small">
					<input id="phone-radio-valid-className-small" type="radio" className="au-control-input__input"
					       name="radio-invalid-small"/>
					<label htmlFor="phone-radio-valid-className-small" className="au-control-input__text">I agree</label>
				</div>
			</div>

			<div className="split split--dark">
				<h2>checkboxes <code>--dark</code></h2>

				<div className="au-control-input au-control-input--dark">
					<input id="phone-cb-dark" type="checkbox" className="au-control-input__input" name="checkbox-cb-dark"/>
					<label htmlFor="phone-cb-dark" className="au-control-input__text">Phone</label>
				</div>
				<div className="au-control-input au-control-input--dark">
					<input id="tablet-cb-dark" type="checkbox" className="au-control-input__input" name="checkbox-cb-dark"/>
					<label htmlFor="tablet-cb-dark" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--dark">
					<input id="fax-cb-uc-dark" type="checkbox" className="au-control-input__input" name="checkbox-cb-dark"
					       disabled/>
					<label htmlFor="fax-cb-uc-dark" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--dark">
					<input id="fax-cb-ch-dark" type="checkbox" className="au-control-input__input" name="checkbox-cb-dark" checked
					       disabled/>
					<label htmlFor="fax-cb-ch-dark" className="au-control-input__text">Fax</label>
				</div>

				<hr/>

				<h2>checkboxes <code>--dark --small</code></h2>

				<div className="au-control-input au-control-input--small au-control-input--dark">
					<input id="phone-cb-small-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-small-dark"/>
					<label htmlFor="phone-cb-small-dark" className="au-control-input__text">Phone</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--dark">
					<input id="tablet-cb-small-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-small-dark"/>
					<label htmlFor="tablet-cb-small-dark" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--dark">
					<input id="fax-cb-small-dark" type="checkbox" className="au-control-input__input" name="checkbox-small-dark"
					       disabled/>
					<label htmlFor="fax-cb-small-dark" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--dark">
					<input id="fax-cb-small-disabled-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-small-dark"
					       disabled checked/>
					<label htmlFor="fax-cb-small-disabled-dark" className="au-control-input__text">Fax</label>
				</div>

				<hr/>

				<h2>radio buttons <code>--dark</code></h2>

				<div className="au-control-input au-control-input--dark">
					<input type="radio" id="radio-yes-dark" className="au-control-input__input" name="radio-ex-dark"/>
					<label htmlFor="radio-yes-dark" className="au-control-input__text"> Yes</label>
				</div>
				<div className="au-control-input au-control-input--dark">
					<input type="radio" id="radio-no-dark" className="au-control-input__input" name="radio-ex-dark"/>
					<label htmlFor="radio-no-dark" className="au-control-input__text">No</label>
				</div>
				<div className="au-control-input au-control-input--dark">
					<input type="radio" id="radio-maybe-dark" className="au-control-input__input" name="radio-ex-dark" disabled/>
					<label htmlFor="radio-maybe-dark" className="au-control-input__text">Maybe</label>
				</div>
				<div className="au-control-input au-control-input--dark">
					<input type="radio" id="radio-idk-dark" className="au-control-input__input" name="radio-ex-dark" disabled
					       checked/>
					<label htmlFor="radio-idk-dark" className="au-control-input__text">I don't know</label>
				</div>

				<hr/>

				<h2>Radio <code>--dark --small</code></h2>

				<div className="au-control-input au-control-input--small au-control-input--dark">
					<input type="radio" id="radio-yes-small-dark" className="au-control-input__input" name="radio-ex-small-dark"/>
					<label htmlFor="radio-yes-small-dark" className="au-control-input__text">Yes</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--dark">
					<input type="radio" id="radio-no-small-dark" className="au-control-input__input" name="radio-ex-small-dark"/>
					<label htmlFor="radio-no-small-dark" className="au-control-input__text">No</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--dark">
					<input type="radio" id="radio-maybe-small-dark" className="au-control-input__input" name="radio-ex-small-dark"
					       disabled/>
					<label htmlFor="radio-maybe-small-dark" className="au-control-input__text">Maybe</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--dark">
					<input type="radio" id="radio-idk-small-dark" className="au-control-input__input" name="radio-ex-small-dark"
					       disabled
					       checked/>
					<label htmlFor="radio-idk-small-dark" className="au-control-input__text">I don't know</label>
				</div>

				<hr/>

				<h2>checkboxes <code>--dark --block</code></h2>


				<div className="au-control-input au-control-input--block au-control-input--dark">
					<input id="phone-cb-block-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-block-dark"/>
					<label htmlFor="phone-cb-block-dark" className="au-control-input__text">Phone, lorem ipsum dolor sit amet,
						consectetur
						adipiscing elit. Sed consectetur tempor sodales.</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--dark">
					<input id="tablet-cb-block-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-block-dark"/>
					<label htmlFor="tablet-cb-block-dark" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--dark">
					<input id="fax-cb-block-dark" type="checkbox" className="au-control-input__input" name="checkbox-block-dark"
					       disabled/>
					<label htmlFor="fax-cb-block-dark" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--dark">
					<input id="fax-cb-block-disabled-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-block-dark"
					       disabled checked/>
					<label htmlFor="fax-cb-block-disabled-dark" className="au-control-input__text">Fax</label>
				</div>

				<hr/>
				<h2>radio <code>--dark --block</code></h2>


				<div className="au-control-input au-control-input--block au-control-input--dark">
					<input id="phone-radio-block-dark" type="radio" className="au-control-input__input" name="radio-block-dark"/>
					<label htmlFor="phone-radio-block-dark" className="au-control-input__text">Phone, lorem ipsum dolor sit amet,
						consectetur
						adipiscing elit. Sed consectetur tempor sodales.</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--dark">
					<input id="tablet-radio-block-dark" type="radio" className="au-control-input__input" name="radio-block-dark"/>
					<label htmlFor="tablet-radio-block-dark" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--dark">
					<input id="fax-radio-block-dark" type="radio" className="au-control-input__input" name="radio-block-dark"
					       disabled/>
					<label htmlFor="fax-radio-block-dark" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--dark">
					<input id="fax-radio-block-disabled-dark" type="radio" className="au-control-input__input"
					       name="radio-block-dark"
					       disabled checked/>
					<label htmlFor="fax-radio-block-disabled-dark" className="au-control-input__text">Fax</label>
				</div>

				<hr/>
				<h2>checkboxes invalid <code>--dark</code></h2>

				<div className="au-control-input au-control-input--dark">
					<input id="phone-cb-invalid-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-dark"
					       required/>
					<label htmlFor="phone-cb-invalid-dark" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>checkboxes invalid using className <code>--dark</code></h2>

				<div className="au-control-input au-control-input--invalid au-control-input--dark">
					<input id="phone-cb-invalid-className-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-className-dark"/>
					<label htmlFor="phone-cb-invalid-className-dark" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>checkboxes valid <code>--dark</code></h2>

				<div className="au-control-input au-control-input--valid au-control-input--dark">
					<input id="phone-cb-valid-className-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-valid-dark"/>
					<label htmlFor="phone-cb-valid-className-dark" className="au-control-input__text">I agree</label>
				</div>


				<hr/>
				<h2>radio invalid <code>--dark</code></h2>

				<div className="au-control-input au-control-input--dark">
					<input id="phone-radio-invalid-dark" type="radio" className="au-control-input__input"
					       name="radio-invalid-dark"
					       required/>
					<label htmlFor="phone-radio-invalid-dark" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>radio invalid using className <code>--dark</code></h2>

				<div className="au-control-input au-control-input--invalid au-control-input--dark">
					<input id="phone-radio-invalid-className-dark" type="radio" className="au-control-input__input"
					       name="radio-invalid-className-dark"/>
					<label htmlFor="phone-radio-invalid-className-dark" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>radio valid using className <code>--dark</code></h2>

				<div className="au-control-input au-control-input--valid au-control-input--dark">
					<input id="phone-radio-valid-className-dark" type="radio" className="au-control-input__input"
					       name="radio-valid-className-dark"/>
					<label htmlFor="phone-radio-valid-className-dark" className="au-control-input__text">I agree</label>
				</div>


				<hr/>
				<h2>control inputs with states <code>--dark --small</code></h2>
				<div className="au-control-input au-control-input--invalid au-control-input--small au-control-input--dark">
					<input id="phone-cb-invalid-className-small-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-small-dark"/>
					<label htmlFor="phone-cb-invalid-className-small-dark" className="au-control-input__text">I agree</label>
				</div>

				<div className="au-control-input au-control-input--valid au-control-input--small au-control-input--dark">
					<input id="phone-cb-valid-className-small-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-small-dark"/>
					<label htmlFor="phone-cb-valid-className-small-dark" className="au-control-input__text">I agree</label>
				</div>
				<div className="au-control-input au-control-input--invalid au-control-input--small au-control-input--dark">
					<input id="phone-radio-invalid-className-small-dark" type="radio" className="au-control-input__input"
					       name="radio-invalid-small-dark"/>
					<label htmlFor="phone-radio-invalid-className-small-dark" className="au-control-input__text">I agree</label>
				</div>

				<div className="au-control-input au-control-input--valid au-control-input--small au-control-input--dark">
					<input id="phone-radio-valid-className-small-dark" type="radio" className="au-control-input__input"
					       name="radio-invalid-small-dark"/>
					<label htmlFor="phone-radio-valid-className-small-dark" className="au-control-input__text">I agree</label>
				</div>
			</div>
		</div>


		<div className="split-wrapper">
			<div className="split split--alt">
				<h2>checkboxes <code>--alt</code></h2>

				<div className="au-control-input au-control-input--alt">
					<input id="phone-cb-alt" type="checkbox" className="au-control-input__input" name="checkbox-cb-alt"/>
					<label htmlFor="phone-cb-alt" className="au-control-input__text">Phone</label>
				</div>
				<div className="au-control-input au-control-input--alt">
					<input id="tablet-cb-alt" type="checkbox" className="au-control-input__input" name="checkbox-cb-alt" checked/>
					<label htmlFor="tablet-cb-alt" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--alt">
					<input id="fax-cb-uc-alt" type="checkbox" className="au-control-input__input" name="checkbox-cb-alt"
					       disabled/>
					<label htmlFor="fax-cb-uc-alt" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--alt">
					<input id="fax-cb-ch-alt" type="checkbox" className="au-control-input__input" name="checkbox-cb-alt" checked
					       disabled/>
					<label htmlFor="fax-cb-ch-alt" className="au-control-input__text">Fax</label>
				</div>
				<hr/>

				<h2>checkboxes <code>--alt --small</code></h2>

				<div className="au-control-input au-control-input--small au-control-input--alt">
					<input id="phone-cb-small-alt" type="checkbox" className="au-control-input__input" name="checkbox-small-alt"/>
					<label htmlFor="phone-cb-small-alt" className="au-control-input__text">Phone</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt">
					<input id="tablet-cb-small-alt" type="checkbox" className="au-control-input__input" name="checkbox-small-alt"
					       checked/>
					<label htmlFor="tablet-cb-small-alt" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt">
					<input id="fax-cb-small-alt" type="checkbox" className="au-control-input__input" name="checkbox-small-alt"
					       disabled/>
					<label htmlFor="fax-cb-small-alt" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt">
					<input id="fax-cb-small-disabled-alt" type="checkbox" className="au-control-input__input"
					       name="checkbox-small-alt"
					       disabled checked/>
					<label htmlFor="fax-cb-small-disabled-alt" className="au-control-input__text">Fax</label>
				</div>

				<hr/>

				<h2>radio buttons <code>--alt</code></h2>

				<div className="au-control-input au-control-input--alt">
					<input type="radio" id="radio-yes-alt" className="au-control-input__input" name="radio-ex-alt"/>
					<label htmlFor="radio-yes-alt" className="au-control-input__text"> Yes</label>
				</div>
				<div className="au-control-input au-control-input--alt">
					<input type="radio" id="radio-no-alt" className="au-control-input__input" name="radio-ex-alt" checked/>
					<label htmlFor="radio-no-alt" className="au-control-input__text">No</label>
				</div>
				<div className="au-control-input au-control-input--alt">
					<input type="radio" id="radio-maybe-alt" className="au-control-input__input" name="radio-ex-alt-d" disabled/>
					<label htmlFor="radio-maybe-alt" className="au-control-input__text">Maybe</label>
				</div>
				<div className="au-control-input au-control-input--alt">
					<input type="radio" id="radio-idk-alt" className="au-control-input__input" name="radio-ex-alt-d" disabled
					       checked/>
					<label htmlFor="radio-idk-alt" className="au-control-input__text">I don't know</label>
				</div>

				<hr/>

				<h2>radio <code>--alt --small</code></h2>

				<div className="au-control-input au-control-input--small au-control-input--alt">
					<input type="radio" id="radio-yes-small-alt" className="au-control-input__input" name="radio-ex-small-alt"/>
					<label htmlFor="radio-yes-small-alt" className="au-control-input__text">Yes</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt">
					<input type="radio" id="radio-no-small-alt" className="au-control-input__input" name="radio-ex-small-alt"
					       checked/>
					<label htmlFor="radio-no-small-alt" className="au-control-input__text">No</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt">
					<input type="radio" id="radio-maybe-small-alt" className="au-control-input__input" name="radio-ex-small-alt-d"
					       disabled/>
					<label htmlFor="radio-maybe-small-alt" className="au-control-input__text">Maybe</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt">
					<input type="radio" id="radio-idk-small-alt" className="au-control-input__input" name="radio-ex-small-alt-d"
					       disabled
					       checked/>
					<label htmlFor="radio-idk-small-alt" className="au-control-input__text">I don't know</label>
				</div>

				<hr/>

				<h2>checkboxes <code>--alt --block</code></h2>


				<div className="au-control-input au-control-input--block au-control-input--alt">
					<input id="phone-cb-block-alt" type="checkbox" className="au-control-input__input" name="checkbox-block-alt"/>
					<label htmlFor="phone-cb-block-alt" className="au-control-input__text">Phone, lorem ipsum dolor sit amet,
						consectetur
						adipiscing elit. Sed consectetur tempor sodales.</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt">
					<input id="tablet-cb-block-alt" type="checkbox" className="au-control-input__input" name="checkbox-block-alt"
					       checked/>
					<label htmlFor="tablet-cb-block-alt" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt">
					<input id="fax-cb-block-alt" type="checkbox" className="au-control-input__input" name="checkbox-block-alt"
					       disabled/>
					<label htmlFor="fax-cb-block-alt" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt">
					<input id="fax-cb-block-disabled-alt" type="checkbox" className="au-control-input__input"
					       name="checkbox-block-alt"
					       disabled checked/>
					<label htmlFor="fax-cb-block-disabled-alt" className="au-control-input__text">Fax</label>
				</div>

				<hr/>
				<h2>radio <code>--alt --block</code></h2>


				<div className="au-control-input au-control-input--block au-control-input--alt">
					<input id="phone-radio-block-alt" type="radio" className="au-control-input__input" name="radio-block-alt"/>
					<label htmlFor="phone-radio-block-alt" className="au-control-input__text">Phone, lorem ipsum dolor sit amet,
						consectetur
						adipiscing elit. Sed consectetur tempor sodales.</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt">
					<input id="tablet-radio-block-alt" type="radio" className="au-control-input__input" name="radio-block-alt"
					       checked/>
					<label htmlFor="tablet-radio-block-alt" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt">
					<input id="fax-radio-block-alt" type="radio" className="au-control-input__input" name="radio-block-alt-d"
					       disabled/>
					<label htmlFor="fax-radio-block-alt" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt">
					<input id="fax-radio-block-disabled-alt" type="radio" className="au-control-input__input"
					       name="radio-block-alt-d"
					       disabled checked/>
					<label htmlFor="fax-radio-block-disabled-alt" className="au-control-input__text">Fax</label>
				</div>

				<hr/>
				<h2>checkboxes invalid <code>--alt</code></h2>

				<div className="au-control-input au-control-input--alt">
					<input id="phone-cb-invalid-alt" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-alt"
					       required/>
					<label htmlFor="phone-cb-invalid-alt" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>checkboxes invalid using className <code>--alt</code></h2>

				<div className="au-control-input au-control-input--invalid au-control-input--alt">
					<input id="phone-cb-invalid-className-alt" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-className-alt"/>
					<label htmlFor="phone-cb-invalid-className-alt" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>checkboxes valid <code>--alt</code></h2>

				<div className="au-control-input au-control-input--valid au-control-input--alt">
					<input id="phone-cb-valid-className-alt" type="checkbox" className="au-control-input__input"
					       name="checkbox-valid-alt"/>
					<label htmlFor="phone-cb-valid-className-alt" className="au-control-input__text">I agree</label>
				</div>


				<hr/>
				<h2>radio invalid <code>--alt</code></h2>

				<div className="au-control-input au-control-input--alt">
					<input id="phone-radio-invalid-alt" type="radio" className="au-control-input__input" name="radio-invalid-alt"
					       required/>
					<label htmlFor="phone-radio-invalid-alt" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>radio invalid using className <code>--alt</code></h2>

				<div className="au-control-input au-control-input--invalid au-control-input--alt">
					<input id="phone-radio-invalid-className-alt" type="radio" className="au-control-input__input"
					       name="radio-invalid-className-alt"/>
					<label htmlFor="phone-radio-invalid-className-alt" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>radio valid using className <code>--alt</code></h2>

				<div className="au-control-input au-control-input--valid au-control-input--alt">
					<input id="phone-radio-valid-className-alt" type="radio" className="au-control-input__input"
					       name="radio-valid-className-alt"/>
					<label htmlFor="phone-radio-valid-className-alt" className="au-control-input__text">I agree</label>
				</div>


				<hr/>
				<h2>control inputs with states <code>--alt --small</code></h2>
				<div className="au-control-input au-control-input--invalid au-control-input--small au-control-input--alt">
					<input id="phone-cb-invalid-className-small-alt" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-small-alt"/>
					<label htmlFor="phone-cb-invalid-className-small-alt" className="au-control-input__text">I agree</label>
				</div>

				<div className="au-control-input au-control-input--valid au-control-input--small au-control-input--alt">
					<input id="phone-cb-valid-className-small-alt" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-small-alt"/>
					<label htmlFor="phone-cb-valid-className-small-alt" className="au-control-input__text">I agree</label>
				</div>
				<div className="au-control-input au-control-input--invalid au-control-input--small au-control-input--alt">
					<input id="phone-radio-invalid-className-small-alt" type="radio" className="au-control-input__input"
					       name="radio-invalid-small-alt"/>
					<label htmlFor="phone-radio-invalid-className-small-alt" className="au-control-input__text">I agree</label>
				</div>

				<div className="au-control-input au-control-input--valid au-control-input--small au-control-input--alt">
					<input id="phone-radio-valid-className-small-alt" type="radio" className="au-control-input__input"
					       name="radio-invalid-small-alt"/>
					<label htmlFor="phone-radio-valid-className-small-alt" className="au-control-input__text">I agree</label>
				</div>
			</div>


			<div className="split split--dark split--alt">
				<h2>checkboxes <code>--alt --dark</code></h2>

				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input id="phone-cb-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-cb-alt-dark"/>
					<label htmlFor="phone-cb-alt-dark" className="au-control-input__text">Phone</label>
				</div>
				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input id="tablet-cb-alt-dark" type="checkbox" className="au-control-input__input" name="checkbox-cb-alt-dark"
					       checked/>
					<label htmlFor="tablet-cb-alt-dark" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input id="fax-cb-uc-alt-dark" type="checkbox" className="au-control-input__input" name="checkbox-cb-alt-dark"
					       disabled/>
					<label htmlFor="fax-cb-uc-alt-dark" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input id="fax-cb-ch-alt-dark" type="checkbox" className="au-control-input__input" name="checkbox-cb-alt-dark"
					       checked
					       disabled/>
					<label htmlFor="fax-cb-ch-alt-dark" className="au-control-input__text">Fax</label>
				</div>

				<hr/>

				<h2>checkboxes <code>--alt --dark --small</code></h2>

				<div className="au-control-input au-control-input--small au-control-input--alt au-control-input--dark">
					<input id="phone-cb-small-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-small-alt-dark"/>
					<label htmlFor="phone-cb-small-alt-dark" className="au-control-input__text">Phone</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt au-control-input--dark">
					<input id="tablet-cb-small-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-small-alt-dark" checked/>
					<label htmlFor="tablet-cb-small-alt-dark" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt au-control-input--dark">
					<input id="fax-cb-small-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-small-alt-dark"
					       disabled/>
					<label htmlFor="fax-cb-small-alt-dark" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt au-control-input--dark">
					<input id="fax-cb-small-disabled-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-small-alt-dark" disabled checked/>
					<label htmlFor="fax-cb-small-disabled-alt-dark" className="au-control-input__text">Fax</label>
				</div>

				<hr/>

				<h2>radio buttons <code>--alt --dark</code></h2>

				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input type="radio" id="radio-yes-alt-dark" className="au-control-input__input" name="radio-ex-alt-dark"/>
					<label htmlFor="radio-yes-alt-dark" className="au-control-input__text"> Yes</label>
				</div>
				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input type="radio" id="radio-no-alt-dark" className="au-control-input__input" name="radio-ex-alt-dark"
					       checked/>
					<label htmlFor="radio-no-alt-dark" className="au-control-input__text">No</label>
				</div>
				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input type="radio" id="radio-maybe-alt-dark" className="au-control-input__input" name="radio-ex-alt-dark-d"
					       disabled/>
					<label htmlFor="radio-maybe-alt-dark" className="au-control-input__text">Maybe</label>
				</div>
				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input type="radio" id="radio-idk-alt-dark" className="au-control-input__input" name="radio-ex-alt-dark-d"
					       disabled
					       checked/>
					<label htmlFor="radio-idk-alt-dark" className="au-control-input__text">I don't know</label>
				</div>

				<hr/>

				<h2>radio <code>--alt --dark --small</code></h2>

				<div className="au-control-input au-control-input--small au-control-input--alt au-control-input--dark">
					<input type="radio" id="radio-yes-small-alt-dark" className="au-control-input__input"
					       name="radio-ex-small-alt-dark"/>
					<label htmlFor="radio-yes-small-alt-dark" className="au-control-input__text">Yes</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt au-control-input--dark">
					<input type="radio" id="radio-no-small-alt-dark" className="au-control-input__input"
					       name="radio-ex-small-alt-dark"
					       checked/>
					<label htmlFor="radio-no-small-alt-dark" className="au-control-input__text">No</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt au-control-input--dark">
					<input type="radio" id="radio-maybe-small-alt-dark" className="au-control-input__input"
					       name="radio-ex-small-alt-dark-d" disabled/>
					<label htmlFor="radio-maybe-small-alt-dark" className="au-control-input__text">Maybe</label>
				</div>
				<div className="au-control-input au-control-input--small au-control-input--alt au-control-input--dark">
					<input type="radio" id="radio-idk-small-alt-dark" className="au-control-input__input"
					       name="radio-ex-small-alt-dark-d"
					       disabled checked/>
					<label htmlFor="radio-idk-small-alt-dark" className="au-control-input__text">I don't know</label>
				</div>

				<hr/>

				<h2>checkboxes <code>--alt --dark --block</code></h2>


				<div className="au-control-input au-control-input--block au-control-input--alt au-control-input--dark">
					<input id="phone-cb-block-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-block-alt-dark"/>
					<label htmlFor="phone-cb-block-alt-dark" className="au-control-input__text">Phone, lorem ipsum dolor sit amet,
						consectetur
						adipiscing elit. Sed consectetur tempor sodales.</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt au-control-input--dark">
					<input id="tablet-cb-block-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-block-alt-dark" checked/>
					<label htmlFor="tablet-cb-block-alt-dark" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt au-control-input--dark">
					<input id="fax-cb-block-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-block-alt-dark"
					       disabled/>
					<label htmlFor="fax-cb-block-alt-dark" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt au-control-input--dark">
					<input id="fax-cb-block-disabled-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-block-alt-dark" disabled checked/>
					<label htmlFor="fax-cb-block-disabled-alt-dark" className="au-control-input__text">Fax</label>
				</div>

				<hr/>
				<h2>radio <code>--alt --dark --block</code></h2>


				<div className="au-control-input au-control-input--block au-control-input--alt au-control-input--dark">
					<input id="phone-radio-block-alt-dark" type="radio" className="au-control-input__input"
					       name="radio-block-alt-dark"/>
					<label htmlFor="phone-radio-block-alt-dark" className="au-control-input__text">Phone, lorem ipsum dolor sit
						amet,
						consectetur adipiscing elit. Sed consectetur tempor sodales.</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt au-control-input--dark">
					<input id="tablet-radio-block-alt-dark" type="radio" className="au-control-input__input"
					       name="radio-block-alt-dark"
					       checked/>
					<label htmlFor="tablet-radio-block-alt-dark" className="au-control-input__text">Tablet</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt au-control-input--dark">
					<input id="fax-radio-block-alt-dark" type="radio" className="au-control-input__input"
					       name="radio-block-alt-dark-d"
					       disabled/>
					<label htmlFor="fax-radio-block-alt-dark" className="au-control-input__text">Fax</label>
				</div>
				<div className="au-control-input au-control-input--block au-control-input--alt au-control-input--dark">
					<input id="fax-radio-block-disabled-alt-dark" type="radio" className="au-control-input__input"
					       name="radio-block-alt-dark-d" disabled checked/>
					<label htmlFor="fax-radio-block-disabled-alt-dark" className="au-control-input__text">Fax</label>
				</div>

				<hr/>
				<h2>checkboxes invalid <code>--alt --dark</code></h2>

				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input id="phone-cb-invalid-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-alt-dark" required/>
					<label htmlFor="phone-cb-invalid-alt-dark" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>checkboxes invalid using className <code>--alt --dark</code></h2>

				<div className="au-control-input au-control-input--invalid au-control-input--alt au-control-input--dark">
					<input id="phone-cb-invalid-className-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-className-alt-dark"/>
					<label htmlFor="phone-cb-invalid-className-alt-dark" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>checkboxes valid <code>--alt --dark</code></h2>

				<div className="au-control-input au-control-input--valid au-control-input--alt au-control-input--dark">
					<input id="phone-cb-valid-className-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-valid-alt-dark"/>
					<label htmlFor="phone-cb-valid-className-alt-dark" className="au-control-input__text">I agree</label>
				</div>


				<hr/>
				<h2>radio invalid <code>--alt --dark</code></h2>

				<div className="au-control-input au-control-input--alt au-control-input--dark">
					<input id="phone-radio-invalid-alt-dark" type="radio" className="au-control-input__input"
					       name="radio-invalid-alt-dark" required/>
					<label htmlFor="phone-radio-invalid-alt-dark" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>radio invalid using className <code>--alt --dark</code></h2>

				<div className="au-control-input au-control-input--invalid au-control-input--alt au-control-input--dark">
					<input id="phone-radio-invalid-className-alt-dark" type="radio" className="au-control-input__input"
					       name="radio-invalid-className-alt-dark"/>
					<label htmlFor="phone-radio-invalid-className-alt-dark" className="au-control-input__text">I agree</label>
				</div>

				<hr/>
				<h2>radio valid using className <code>--alt --dark</code></h2>

				<div className="au-control-input au-control-input--valid au-control-input--alt au-control-input--dark">
					<input id="phone-radio-valid-className-alt-dark" type="radio" className="au-control-input__input"
					       name="radio-valid-className-alt-dark"/>
					<label htmlFor="phone-radio-valid-className-alt-dark" className="au-control-input__text">I agree</label>
				</div>


				<hr/>
				<h2>control inputs with states <code>--alt --dark --small</code></h2>
				<div
					className="au-control-input au-control-input--invalid au-control-input--small au-control-input--alt au-control-input--dark">
					<input id="phone-cb-invalid-className-small-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-small-alt-dark"/>
					<label htmlFor="phone-cb-invalid-className-small-alt-dark" className="au-control-input__text">I agree</label>
				</div>

				<div
					className="au-control-input au-control-input--valid au-control-input--small au-control-input--alt au-control-input--dark">
					<input id="phone-cb-valid-className-small-alt-dark" type="checkbox" className="au-control-input__input"
					       name="checkbox-invalid-small-alt-dark"/>
					<label htmlFor="phone-cb-valid-className-small-alt-dark" className="au-control-input__text">I agree</label>
				</div>
				<div
					className="au-control-input au-control-input--invalid au-control-input--small au-control-input--alt au-control-input--dark">
					<input id="phone-radio-invalid-className-small-alt-dark" type="radio" className="au-control-input__input"
					       name="radio-invalid-small-alt-dark"/>
					<label htmlFor="phone-radio-invalid-className-small-alt-dark" className="au-control-input__text">I
						agree</label>
				</div>

				<div
					className="au-control-input au-control-input--valid au-control-input--small au-control-input--alt au-control-input--dark">
					<input id="phone-radio-valid-className-small-alt-dark" type="radio" className="au-control-input__input"
					       name="radio-invalid-small-alt-dark"/>
					<label htmlFor="phone-radio-valid-className-small-alt-dark" className="au-control-input__text">I agree</label>
				</div>
			</div>
		</div>
	</>
);

export default withLayout(ControlInput);
