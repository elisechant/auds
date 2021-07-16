import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Form = () => (
	<>
		<h1>Site test: Form</h1>
		<div className="split-wrapper">

			<div className="split">
				<h3>Label</h3>
				<p>
					<label className="au-label" htmlFor="text-input-block-label">Email</label>
					<input type="text" className="au-text-input" id="text-input-block-label" name="text-input-block-label"/>
				</p>

				<hr/>

				<h3>Label <code>--inline</code></h3>
				<p>
					<label className="au-label au-label--inline" htmlFor="text-input-inline">Email</label>
					<input type="text" className="au-text-input" id="text-input-inline" name="text-input-inline"/>
				</p>

				<hr/>

				<h3>Hint text</h3>
				<p>
					<label className="au-label" htmlFor="text-input-hint-text">Email</label>
					<span className="au-hint-text" id="hint-text">We will only use this to respond to your request</span>
					<input className="au-text-input" id="text-input-hint-text" name="text-input-hint-text" type="email"
					       aria-describedby="hint-text"/>
				</p>

				<hr/>

				<h3>Error text</h3>
				<p>
					<label className="au-label" htmlFor="text-input-error">Email</label>
					<span className="au-hint-text" id="hint-text-e">We will only use this to respond to your request</span>
					<span className="au-error-text"
					      id="error-text">Enter an email address in the correct format, like name@example.com</span>
					<input type="email" className="au-text-input au-text-input--invalid" id="text-input-error"
					       name="text-input-error"
					       aria-invalid="true" aria-describedby="error-text hint-text-e"/>
				</p>

				<hr/>

				<h3>Error text bottom</h3>
				<p>
					<label className="au-label" htmlFor="text-input-error-bottom">Email</label>
					<span className="au-hint-text" id="hint-text-e-bottom">We will only use this to respond to your request</span>
					<input type="email" className="au-text-input au-text-input--invalid" id="text-input-error-bottom"
					       name="text-input-error"
					       aria-invalid="true" aria-describedby="error-text hint-text-e-bottom"/>
					<span className="au-error-text" id="error-text-bottom">Enter an email address in the correct format, like name@example.com</span>
				</p>

				<hr/>

				<h3>Error text <code>--inline</code></h3>
				<p>
					<label className="au-label" htmlFor="text-input-error-inline">Email</label>
					<span className="au-hint-text" id="hint-text-e-inline">We will only use this to respond to your request</span>
					<input type="text" className="au-text-input au-text-input--invalid" id="text-input-error-inline"
					       name="text-input-error"
					       aria-invalid="true" aria-describedby="error-text hint-text-e-inline"/>
					<span className="au-error-text au-error-text--inline" id="error-text-inline">Enter an email address in the correct format, like name@example.com</span>
				</p>

				<hr/>

				<h3>Form group</h3>
				<div className="au-form-group">
					<label className="au-label" htmlFor="text-input-form-group">Username</label>
					<input type="text" className="au-text-input" id="text-input-form-group" name="text-input-form-group"/>
				</div>
				<div className="au-form-group">
					<label className="au-label" htmlFor="text-input-2-form-group">Email</label>
					<span className="au-hint-text" id="hint-text-fg">We will only use this to respond to your request</span>
					<input type="email" className="au-text-input" id="text-input-2-form-group" name="text-input-2-form-group"
					       aria-describedby="hint-text-fg"/>
				</div>

				<hr/>

				<h3>Form group with <code>--invalid</code></h3>
				<div className="au-form-group">
					<label className="au-label" htmlFor="text-input-form-group-2">Username</label>
					<input type="text" className="au-text-input" id="text-input-form-group-2" name="text-input-form-group-2"/>
				</div>
				<div className="au-form-group au-form-group--invalid">
					<label className="au-label" htmlFor="text-input-form-group-3">Email</label>
					<span className="au-hint-text" id="hint-text-fg-err">We will only use this to respond to your request</span>
					<span className="au-error-text"
					      id="error-text-2">Enter an email address in the correct format, like name@example.com</span>
					<input type="email" className="au-text-input au-text-input--invalid" id="text-input-form-group-3"
					       name="text-input-form-group-3"
					       aria-invalid="true" aria-describedby="error-text-2 hint-text-fg-err"/>
				</div>

				<br/>

				<hr/>

				<h3>Form group with <code>--invalid</code> bottom</h3>
				<div className="au-form-group">
					<label className="au-label" htmlFor="text-input-form-group-2-bottom">Username</label>
					<input type="text" className="au-text-input" id="text-input-form-group-2-bottom"
					       name="text-input-form-group-2"/>
				</div>
				<div className="au-form-group au-form-group--invalid">
					<label className="au-label" htmlFor="text-input-form-group-3-bottom">Email</label>
					<span className="au-hint-text"
					      id="hint-text-fg-err-bottom">We will only use this to respond to your request</span>
					<input type="email" className="au-text-input au-text-input--invalid" id="text-input-form-group-3-bottom"
					       name="text-input-form-group-3"
					       aria-invalid="true" aria-describedby="error-text-2-bottom hint-text-fg-err-bottom"/>
					<span className="au-error-text" id="error-text-2-bottom">Enter an email address in the correct format, like name@example.com</span>
				</div>

				<br/>

				<hr/>

				<h3>Fieldsets</h3>
				<fieldset className="au-fieldset">
					<legend className="au-fieldset__legend">
						<span className="au-display-lg">What is your address?</span>
					</legend>
					<div className="au-form-group">
						<label className="au-label" htmlFor="fieldset-input-street">Street and number</label>
						<input type="text" className="au-text-input au-text-input--width-lg" id="fieldset-input-street"
						       name="fieldset-input-street"/>
					</div>
					<div className="au-form-group">
						<label className="au-label" htmlFor="fieldset-input-city">City or suburb</label>
						<input type="text" className="au-text-input au-text-input--width-lg" id="fieldset-input-city"
						       name="fieldset-input-city"/>
					</div>
					<div className="au-form-group">
						<label className="au-label" htmlFor="select1">Select state</label>
						<select id="select1" className="au-select">
							<option value="">Please select</option>
							<option value="1">VIC</option>
							<option value="2">NSW</option>
							<option value="3">QLD</option>
						</select>
					</div>
					<div className="au-form-group">
						<label className="au-label" htmlFor="fieldset-input-postcode">Postcode</label>
						<input type="text" className="au-text-input au-text-input--width-sm" id="fieldset-input-postcode"
						       name="fieldset-input-postcode"/>
					</div>
				</fieldset>

				<hr/>

				<h3>Fieldset control input</h3>
				<p>
					<div className="au-form-group">
						<fieldset className="au-fieldset">
							<legend className="au-fieldset__legend">
								<span className="au-display-lg">Which devices do you use?</span>
								<span className="au-hint-text">You may select more than one</span>
							</legend>

							<div className="au-control-input au-control-input--block">
								<input className="au-control-input__input" type="checkbox" id="phone-cb-1" name="checkbox-ex"/>
								<label className="au-control-input__text" htmlFor="phone-cb-1">Phone</label>
							</div>

							<div className="au-control-input au-control-input--block">
								<input className="au-control-input__input" type="checkbox" name="checkbox-ex" id="tablet-cb-1" checked/>
								<label className="au-control-input__text" htmlFor="tablet-cb-1">Tablet</label>
							</div>

							<div className="au-control-input au-control-input--block">
								<input className="au-control-input__input" type="checkbox" name="checkbox-ex" id="laptop-cb-1" checked/>
								<label className="au-control-input__text" htmlFor="laptop-cb-1">Laptop</label>
							</div>
						</fieldset>
					</div>
				</p>

				<hr/>

				<h3>Fieldsets with <code>--invalid</code></h3>
				<p>
					<fieldset className="au-fieldset">
						<legend className="au-fieldset__legend">
						<span className="au-display-lg">
							What is your address?
						</span>
						</legend>
						<div className="au-form-group">
							<label className="au-label" htmlFor="fieldset-input-street-2">Street and number</label>
							<input type="text" className="au-text-input au-text-input--width-lg" id="fieldset-input-street-2"
							       name="fieldset-input-street-2"/>
						</div>
						<div className="au-form-group">
							<label className="au-label" htmlFor="fieldset-input-city-2">City or suburb</label>
							<input type="text" className="au-text-input au-text-input--width-lg" id="fieldset-input-city-2"
							       name="fieldset-input-city-2"/>
						</div>

						<div className="au-form-group au-form-group--invalid">
							<label className="au-label" htmlFor="select2">Select state</label>
							<span className="au-error-text">A state was not selected</span>

							<select id="select2" className="au-select au-select--invalid" aria-invalid="true">
								<option value="">Please select</option>
								<option value="1">VIC</option>
								<option value="2">NSW</option>
								<option value="3">QLD</option>
							</select>
						</div>

						<div className="au-form-group">
							<label className="au-label" htmlFor="fieldset-input-postcode-2">Postcode</label>
							<input type="text" className="au-text-input au-text-input--width-sm" id="fieldset-input-postcode-2"
							       name="fieldset-input-postcode-2"/>
						</div>
					</fieldset>
				</p>

				<hr/>

				<h3>Fieldset control input <code>--invalid</code></h3>
				<p>
					<div className="au-form-group au-form-group--invalid">
						<fieldset className="au-fieldset">
							<legend className="au-fieldset__legend">
								<h3 className="au-display-lg">Which devices do you use?</h3>
								<span className="au-hint-text">You may select more than one</span>
								<span className="au-error-text">A device was not selected</span>
							</legend>

							<div className="au-control-input au-control-input--block">
								<input className="au-control-input__input" type="checkbox" name="checkbox-ex-1" id="phone-cb-2"/>
								<label className="au-control-input__text" htmlFor="phone-cb-2">Phone</label>
							</div>

							<div className="au-control-input au-control-input--block">
								<input className="au-control-input__input" type="checkbox" id="tablet-cb-2" name="checkbox-ex-1"/>
								<label className="au-control-input__text" htmlFor="tablet-cb-2">Tablet</label>
							</div>

							<div className="au-control-input au-control-input--block">
								<input className="au-control-input__input" type="checkbox" id="laptop-cb-2" name="checkbox-ex-1"/>
								<label className="au-control-input__text" htmlFor="laptop-cb-2">Laptop</label>
							</div>

						</fieldset>
					</div>
				</p>
			</div>

			<div className="split split--alt">
				<h3>Label</h3>
				<p>
					<label className="au-label" htmlFor="text-input-block-label-alt">Email</label>
					<input type="email" className="au-text-input" id="text-input-block-label-alt"
					       name="text-input-block-label-alt"/>
				</p>

				<hr/>

				<h3>Label <code>--inline</code></h3>
				<p>
					<label className="au-label au-label--inline" htmlFor="text-input-inline-alt">Email</label>
					<input type="email" className="au-text-input" id="text-input-inline-alt" name="text-input-inline-alt"/>
				</p>

				<hr/>

				<h3>Hint text</h3>
				<p>
					<label className="au-label" htmlFor="text-input-hint-text-alt">Email</label>
					<span className="au-hint-text au-hint-text--alt"
					      id="hint-text-alt">We will only use this to respond to your request</span>
					<input type="email" className="au-text-input" id="text-input-hint-text-alt" name="text-input-hint-text-alt"
					       aria-describedby="hint-text-alt"/>
				</p>

				<hr/>

				<h3>Error text</h3>
				<p>
					<label className="au-label" htmlFor="text-input-error-alt">Email</label>
					<span className="au-hint-text au-hint-text--alt"
					      id="hint-text-e-alt">We will only use this to respond to your request</span>
					<span className="au-error-text" id="error-text-alt">Enter an email address in the correct format, like name@example.com</span>
					<input type="email" className="au-text-input au-text-input--invalid" id="text-input-error-alt"
					       name="text-input-error-alt"
					       aria-invalid="true" aria-describedby="error-text-alt hint-text-e-alt"/>
				</p>

				<hr/>

				<h3>Error text bottom</h3>
				<p>
					<label className="au-label" htmlFor="text-input-error-bottom-alt">Email</label>
					<span className="au-hint-text au-hint-text--alt" id="hint-text-e-bottom-alt">We will only use this to respond to your request</span>
					<input type="email" className="au-text-input au-text-input--invalid" id="text-input-error-bottom-alt"
					       name="text-input-error-alt"
					       aria-invalid="true" aria-describedby="error-tex-altt hint-text-e-bottom-alt"/>
					<span className="au-error-text" id="error-text-bottom-alt">Enter an email address in the correct format, like name@example.com</span>
				</p>

				<hr/>

				<h3>Error text <code>--inline</code></h3>
				<p>
					<label className="au-label" htmlFor="text-input-error-inline-alt">Email</label>
					<span className="au-hint-text au-hint-text--alt" id="hint-text-e-inline-alt">We will only use this to respond to your request</span>
					<input type="email" className="au-text-input au-text-input--invalid" id="text-input-error-inline-alt"
					       name="text-input-error"
					       aria-invalid="true" aria-describedby="error-text-inline-alt hint-text-e-inline-alt"/>
					<span className="au-error-text au-error-text--inline" id="error-text-inline-alt">Enter an email address in the correct format, like name@example.com</span>
				</p>

				<hr/>

				<h3>Form group</h3>
				<div className="au-form-group">
					<label className="au-label" htmlFor="text-input-form-group-alt">Username</label>
					<input type="text" className="au-text-input" id="text-input-form-group-alt" name="text-input-form-group-alt"/>
				</div>

				<div className="au-form-group">
					<label className="au-label" htmlFor="text-input-2-form-group-alt">Email</label>
					<span className="au-hint-text au-hint-text--alt" id="hint-text-fg-alt">We will only use this to respond to your request</span>
					<input type="email" className="au-text-input" id="text-input-2-form-group-alt"
					       name="text-input-2-form-group-alt"
					       aria-describedby="hint-text-fg-alt"
					/>
				</div>

				<hr/>

				<h3>Form group with <code>--invalid</code></h3>
				<div className="au-form-group">
					<label className="au-label" htmlFor="text-input-form-group-2-alt">Username</label>
					<input type="text" className="au-text-input" id="text-input-form-group-2-alt"
					       name="text-input-form-group-2-alt"/>
				</div>
				<div className="au-form-group au-form-group--invalid">
					<label className="au-label" htmlFor="text-input-form-group-3-alt">Email</label>
					<span className="au-hint-text au-hint-text--alt" id="hint-text-fg-err-alt">We will only use this to respond to your request</span>
					<span className="au-error-text" id="error-text-2-alt">Enter an email address in the correct format, like name@example.com</span>
					<input type="email" className="au-text-input au-text-input--invalid" id="text-input-form-group-3-alt"
					       name="text-input-form-group-3-alt"
					       aria-invalid="true" aria-describedby="error-text-2-alt hint-text-fg-err-alt"/>
				</div>

				<br/>

				<hr/>

				<h3>Form group with <code>--invalid</code> bottom</h3>
				<div className="au-form-group">
					<label className="au-label" htmlFor="text-input-form-group-2-bottom-alt">Username</label>
					<input type="text" className="au-text-input" id="text-input-form-group-2-bottom-alt"
					       name="text-input-form-group-2-alt"/>
				</div>
				<div className="au-form-group au-form-group--invalid">
					<label className="au-label" htmlFor="text-input-form-group-3-bottom-alt">Email</label>
					<span className="au-hint-text au-hint-text--alt" id="hint-text-fg-err-bottom-alt">We will only use this to respond to your request</span>
					<input type="email" className="au-text-input au-text-input--invalid" id="text-input-form-group-3-bottom-alt"
					       name="text-input-form-group-3-alt"
					       aria-invalid="true" aria-describedby="error-text-2-bottom-alt hint-text-fg-err-bottom-alt"/>
					<span className="au-error-text" id="error-text-2-bottom-alt">Enter an email address in the correct format, like name@example.com</span>
				</div>

				<br/>

				<hr/>

				<h3>Fieldsets</h3>
				<fieldset className="au-fieldset">
					<legend className="au-fieldset__legend">
						<span className="au-display-lg">What is your address?</span>
					</legend>

					<div className="au-form-group">
						<label className="au-label" htmlFor="fieldset-input-street-alt">Street and number</label>
						<input type="text" className="au-text-input au-text-input--width-lg" id="fieldset-input-street-alt"
						       name="fieldset-input-street-alt"/>
					</div>

					<div className="au-form-group">
						<label className="au-label" htmlFor="fieldset-input-city-alt">City or suburb</label>
						<input type="text" className="au-text-input au-text-input--width-lg" id="fieldset-input-city-alt"
						       name="fieldset-input-city-alt"/>
					</div>

					<div className="au-form-group">
						<label className="au-label" htmlFor="select1-alt">Select state</label>
						<select id="select1-alt" className="au-select">
							<option value="">Please select</option>
							<option value="1">VIC</option>
							<option value="2">NSW</option>
							<option value="3">QLD</option>
						</select>
					</div>

					<div className="au-form-group">
						<label className="au-label" htmlFor="fieldset-input-postcode-alt">Postcode</label>
						<input type="number" className="au-text-input au-text-input--width-sm" id="fieldset-input-postcode-alt"
						       name="fieldset-input-postcode-alt"/>
					</div>
				</fieldset>

				<hr/>

				<h3>Fieldset control input</h3>
				<div className="au-form-group">
					<fieldset className="au-fieldset">
						<legend className="au-fieldset__legend">
							<h3 className="au-display-lg">Which devices do you use?</h3>
							<span className="au-hint-text au-hint-text--alt">You may select more than one</span>
						</legend>

						<div className="au-control-input au-control-input--block">
							<input className="au-control-input__input" type="checkbox" id="phone-cb-alt" name="checkbox-ex-alt"/>
							<label className="au-control-input__text" htmlFor="phone-cb-alt">Phone</label>
						</div>

						<div className="au-control-input au-control-input--block">
							<input className="au-control-input__input" type="checkbox" id="tablet-cb-alt" name="checkbox-ex-alt"
							       checked/>
							<label className="au-control-input__text" htmlFor="tablet-cb-alt">Tablet</label>
						</div>

						<div className="au-control-input au-control-input--block">
							<input className="au-control-input__input" type="checkbox" id="laptop-cb-alt" name="checkbox-ex-alt"
							       checked/>
							<label className="au-control-input__text" htmlFor="laptop-cb-alt">Laptop</label>
						</div>

					</fieldset>
				</div>

				<hr/>

				<h3>Fieldsets with <code>--invalid</code></h3>
				<fieldset className="au-fieldset">
					<legend className="au-fieldset__legend">
						<h3 className="au-display-lg">
							What is your address?
						</h3>
					</legend>
					<div className="au-form-group">
						<label className="au-label" htmlFor="fieldset-input-street-2-alt">Street and number</label>
						<input type="text" className="au-text-input au-text-input--width-lg" id="fieldset-input-street-2-alt"
						       name="fieldset-input-street-2-alt"/>
					</div>

					<div className="au-form-group">
						<label className="au-label" htmlFor="fieldset-input-city-2-alt">City or suburb</label>
						<input type="text" className="au-text-input au-text-input--width-lg" id="fieldset-input-city-2-alt"
						       name="fieldset-input-city-2-alt"/>
					</div>

					<div className="au-form-group au-form-group--invalid">
						<label className="au-label" htmlFor="select2-alt">Select state</label>
						<h3 className="au-error-text">A state was not selected</h3>

						<select id="select2-alt" className="au-select au-select--invalid" aria-invalid="true">
							<option value="">Please select</option>
							<option value="1">VIC</option>
							<option value="2">NSW</option>
							<option value="3">QLD</option>
						</select>
					</div>

					<div className="au-form-group">
						<label className="au-label" htmlFor="fieldset-input-postcode-2-alt">Postcode</label>
						<input type="number" className="au-text-input au-text-input--width-sm" id="fieldset-input-postcode-2-alt"
						       name="fieldset-input-postcode-2-alt"/>
					</div>

				</fieldset>

				<hr/>

				<h3>Fieldset control input <code>--invalid</code></h3>
				<div className="au-form-group au-form-group--invalid">
					<fieldset className="au-fieldset">
						<legend className="au-fieldset__legend">
							<h3 className="au-display-lg">Which devices do you used?</h3>
							<span className="au-hint-text au-hint-text--alt">You may select more than one</span>
							<span className="au-error-text">A device was not selected</span>
						</legend>

						<div className="au-control-input au-control-input--block">
							<input className="au-control-input__input" type="checkbox" id="phone-cb-alt-2" name="checkbox-ex-alt-2"/>
							<label className="au-control-input__text" htmlFor="phone-cb-alt-2">Phone</label>
						</div>

						<div className="au-control-input au-control-input--block">
							<input className="au-control-input__input" type="checkbox" id="tablet-cb-alt-2" name="checkbox-ex-alt-2"/>
							<label className="au-control-input__text" htmlFor="tablet-cb-alt-2">Tablet</label>
						</div>

						<div className="au-control-input au-control-input--block">
							<input className="au-control-input__input" type="checkbox" id="laptop-cb-alt-2" name="checkbox-ex-alt-2"/>
							<label className="au-control-input__text" htmlFor="laptop-cb-alt-2">Laptop</label>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	</>
);

export default withLayout(Form);
