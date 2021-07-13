import React from 'react';
import ReactDOM from 'react-dom';

import { AUlabel, AUhintText, AUerrorText, AUformGroup, AUfieldset, AUForm, AUlegend } from './form.js';
import AUtextInput from '../../../text-inputs/src/js/react';
import AUheading from '../../../headings/src/js/react';
import AUselect from '../../../select/src/js/react';
import { AUcheckbox } from '../../../control-input/src/js/react';

class App extends React.Component {

	render() {
		const states = [
			{ value: '', text: 'Please select'},
			{ value: '1', text: 'ACT' },
			{ value: '2', text: 'VIC' },
			{ value: '3', text: 'NSW' },
			];
		return (
			<React.Fragment>
			<div className="split-wrapper">
				<div className="split">
				<h2>Normal background</h2>
					<h3>Label</h3>
					<p>
						<AUlabel htmlFor="label" text="Email"></AUlabel>
						<AUtextInput type="email" id="label" />
					</p>

					<hr/>

					<h3>Label <code>--inline</code> </h3>
					<p>
						<AUlabel text="Email" htmlFor="label-inline" inline />
						<AUtextInput type="email" id="label-inline" />
					</p>

					<hr/>

					<h3>Hint Text</h3>
					<p>
						<AUlabel text="Email" htmlFor="email-with-hint" />
						<AUhintText text="We will only use this to respond to your request" id="hint-text"/>
						<AUtextInput type="email" id="email-with-hint" aria-describedby="hint-text"/>
					</p>

					<hr/>

					<h3>Error text</h3>
					<p>
							<AUlabel text="Email" htmlFor="email-with-error" />
							<AUhintText text="We will only use this to respond to your request" id="hint-text-with-error"/>
							<AUerrorText type="email" text="Enter an email address in the correct format, like name@example.com" id="error-text" />
							<AUtextInput id="email-with-error" aria-describedby="error-text hint-text-with-error" status="invalid" />
					</p>

					<hr/>

					<h3>Error text bottom</h3>
					<p>
							<AUlabel text="Email" htmlFor="email-with-error-bottom" />
							<AUhintText text="We will only use this to respond to your request" id="hint-text-with-error-bottom"/>
							<AUtextInput type="email" id="email-with-error-bottom" aria-describedby="error-text-bottom hint-text-with-error-bottom" status="invalid" />
							<AUerrorText text="Enter an email address in the correct format, like name@example.com" id="error-text-bottom" />
					</p>

					<hr/>

					<h3>Error text <code>--inline</code></h3>
					<p>
							<AUlabel text="Email" htmlFor="email-with-error-inline" />
							<AUhintText text="We will only use this to respond to your request" id="hint-text-with-error-inline"/>
							<AUtextInput type="email" id="email-with-error-inline" aria-describedby="error-text-inline hint-text-with-error-inline" status="invalid" />
							<AUerrorText text="Enter an email address in the correct format, like name@example.com" inline id="error-text-inline" />
					</p>

					<hr/>

					<h3>Form group</h3>
					<AUformGroup>
						<AUlabel text="Username" htmlFor="fg-username" />
						<AUtextInput type="email" id="fg-username"/>
					</AUformGroup>

					<AUformGroup>
						<AUlabel text="Email" htmlFor="fg-password" />
						<AUhintText text="We will only use this to respond to your request" id="fg-hint-text"/>
						<AUtextInput type="email" id="fg-password" aria-describedby="fg-hint-text" />
					</AUformGroup>

					<hr/>

					<h3>Form group with <code>--invalid</code></h3>
					<AUformGroup>
						<AUlabel text="Username" htmlFor="fg-username" />
						<AUtextInput type="email" id="fg-username"/>
					</AUformGroup>

					<AUformGroup status="invalid">
						<AUlabel text="Email" htmlFor="fg-password" />
						<AUhintText text="We will only use this to respond to your request" id="fg-hint-text"/>
						<AUerrorText text="Password was not 6 characters" id="fg-error-text" />
						<AUtextInput type="email" id="fg-password" aria-describedby="fg-hint-text fg-error-text" status="invalid" />
					</AUformGroup>

					<hr/>

					<h3>Form group with <code>--invalid</code> bottom</h3>
					<AUformGroup>
						<AUlabel text="Username" htmlFor="fg-username-err-bottom" />
						<AUtextInput type="email" id="fg-username-err-bottom"/>
					</AUformGroup>

					<AUformGroup status="invalid">
						<AUlabel text="Email" htmlFor="fg-password-err-bottom" />
						<AUhintText text="We will only use this to respond to your request" id="fg-hint-text-err-bottom"/>
						<AUtextInput type="email" id="fg-password-err-bottom" aria-describedby="fg-hint-text-err-bottom fg-error-text-err-bottom" status="invalid" />
						<AUerrorText text="Password was not 6 characters" id="fg-error-text-err-bottom" />
					</AUformGroup>

					<hr/>

					<h3>Fieldsets</h3>
					<br/>
					<AUfieldset>
						<AUlegend>
							<AUheading level="2" size="lg">
								What is your address?
							</AUheading>
						</AUlegend>
						<AUformGroup>
							<AUlabel htmlFor="address-1" text="Street and number" />
							<AUtextInput type="text" id="address-1" width="lg" />
						</AUformGroup>
						<AUformGroup>
							<AUlabel htmlFor="address-2" text="Suburb" />
							<AUtextInput type="text" id="address-2" width="lg" />
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="select1" text="State" />
							<AUselect id="select1" options={states} />
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4" text="Postcode" />
							<AUtextInput type="number" id="address-4" width="sm" />
						</AUformGroup>
					</AUfieldset>

					<hr/>

					<h3>Fieldsets with <code>--invalid</code></h3>
					<br/>
					<AUfieldset>
						<AUlegend>
							<AUheading level="2" size="lg">
								What is your address?
							</AUheading>
						</AUlegend>
						<AUformGroup>
							<AUlabel htmlFor="address-1-err" text="Street and number" />
							<AUtextInput type="text" id="address-1-err" width="lg" />
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-2-err" text="Suburb" />
							<AUtextInput type="text" id="address-2-err" width="lg" />
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel htmlFor="select1-err" text="State" />
							<AUerrorText text="A state was not selected" id="fg-error-text-err-bottom" />
							<AUselect status="invalid" id="select1-err" options={states} />
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-err" text="Postcode" />
							<AUtextInput type="number" id="address-4-err" width="sm" />
						</AUformGroup>
					</AUfieldset>
					<hr/>

					<h3>Fieldsets with control inputs <code>--invalid</code></h3>
					<p></p>
						<AUformGroup status="invalid">
							<AUfieldset >
								<AUlegend>
									<AUheading level="2" size="lg">
										Please select your favorite device
									</AUheading>
									<AUhintText text="We will only use this to respond to your request" id="device-hint-text-err" />
									<AUerrorText text="A device was not selected" id="device-cb-err" />
								</AUlegend>

								<AUcheckbox label="Phone" name="checkbox-ex-err" id="cb-phone-err" block/>
								<AUcheckbox label="Tablet" name="checkbox-ex-err" id="cb-tablet-err" block/>
								<AUcheckbox label="Laptop" name="checkbox-ex-err" id="cb-laptop-err" block/>

							</AUfieldset>
						</AUformGroup>
					<br/>
				</div>

				<div className="split split--alt">
					<h2><code>--alt</code> background</h2>
					<h3>Label</h3>
					<p>
						<AUlabel text="Email" htmlFor="label-alt"/>
						<AUtextInput id="label-alt"/>
					</p>

					<hr/>

					<h3>Label <code>--inline</code> </h3>
					<p>
							<AUlabel text="Email" htmlFor="label-inline-alt" inline/>
							<AUtextInput id="label-inline-alt"/>
					</p>

					<hr/>

					<h3>Hint Text</h3>
					<p>
							<AUlabel text="Email" htmlFor="email-with-hint-alt"/>
							<AUhintText text="We will only use this to respond to your request" id="hint-text-alt"/>
							<AUtextInput id="email-with-hint-alt" aria-describedby="hint-text-alt"/>
					</p>

					<hr/>

					<h3>Error text</h3>
					<p>
							<AUlabel text="Email" htmlFor="email-with-error-alt"/>
							<AUhintText text="We will only use this to respond to your request" id="hint-text-with-error-alt"/>
							<AUerrorText text="Enter an email address in the correct format, like name@example.com" id="error-text-alt"/>
							<AUtextInput id="email-with-error" aria-describedby="error-text-alt hint-text-with-error-alt" status="invalid" dark/>
					</p>

					<hr/>

					<h3>Error text bottom</h3>
					<p>
							<AUlabel text="Email" htmlFor="email-with-error-bottom-alt"/>
							<AUhintText text="We will only use this to respond to your request" id="hint-text-with-error-bottom-alt"/>
							<AUtextInput id="email-with-error-bottom-alt" aria-describedby="error-text-bottom-alt hint-text-with-error-bottom-alt" status="invalid"/>
							<AUerrorText text="Enter an email address in the correct format, like name@example.com" id="error-text-bottom-alt" />
					</p>

					<hr/>

					<h3>Error text <code>--inline</code></h3>
					<p>
							<AUlabel text="Email" htmlFor="email-with-error-inline-alt" />
							<AUhintText text="We will only use this to respond to your request" id="hint-text-with-error-inline-alt"/>
							<AUtextInput type="email" id="email-with-error-inline-alt" aria-describedby="error-text-inline-alt hint-text-with-error-inline-alt" status="invalid" />
							<AUerrorText text="Enter an email address in the correct format, like name@example.com" inline id="error-text-inline-alt" />
					</p>

					<hr/>

					<h3>Form group</h3>
					<AUformGroup>
						<AUlabel text="Username" htmlFor="fg-username-alt"/>
						<AUtextInput type="email" id="fg-username-alt"/>
					</AUformGroup>

					<AUformGroup>
						<AUlabel text="Email" htmlFor="fg-password-alt"/>
						<AUhintText text="We will only use this to respond to your request" id="fg-hint-text-alt"/>
						<AUtextInput type="email" id="fg-password-alt" aria-describedby="fg-hint-text-alt"/>
					</AUformGroup>

					<hr/>

					<h3>Form group with <code>--invalid</code></h3>
					<AUformGroup>
						<AUlabel text="Username" htmlFor="fg-username-invalid-alt"/>
						<AUtextInput type="email" id="fg-username-invalid-alt"/>
					</AUformGroup>

					<AUformGroup status="invalid">
						<AUlabel text="Email" htmlFor="fg-password-alt"/>
						<AUhintText text="We will only use this to respond to your request" id="fg-hint-text-alt"/>
						<AUerrorText text="Password was not 6 characters" id="fg-error-text-alt"/>
						<AUtextInput type="email" id="fg-password-alt" aria-describedby="fg-hint-text-alt fg-error-text-alt" status="invalid"/>
					</AUformGroup>

					<hr/>

					<h3>Form group with <code>--invalid</code> bottom</h3>
					<AUformGroup>
						<AUlabel text="Username" htmlFor="fg-username-err-bottom-alt"/>
						<AUtextInput id="fg-username-err-bottom-alt"/>
					</AUformGroup>

					<AUformGroup status="invalid">
						<AUlabel text="Email" htmlFor="fg-password-err-bottom-alt"/>
						<AUhintText text="We will only use this to respond to your request" id="fg-hint-text-err-bottom-alt"/>
						<AUtextInput type="email" id="fg-password-err-bottom-alt" aria-describedby="fg-hint-text-err-bottom-alt fg-error-text-err-bottom-alt" status="invalid" dark/>
						<AUerrorText text="Password was not 6 characters" id="fg-error-text-err-bottom-alt" />
					</AUformGroup>

					<hr/>

					<h3>Fieldsets</h3>
					<br/>
					<AUfieldset>
						<AUlegend>
							<AUheading level="2" size="lg">
								What is your address?
							</AUheading>
						</AUlegend>
						<AUformGroup>
							<AUlabel htmlFor="address-1-alt" text="Street and number"/>
							<AUtextInput id="address-1-alt" width="lg"/>
						</AUformGroup>
						<AUformGroup>
							<AUlabel htmlFor="address-2-alt" text="Suburb"/>
							<AUtextInput id="address-2-alt" width="lg"/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="select1-alt" text="State"/>
							<AUselect id="select1-alt" options={states}/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-alt" text="Postcode"/>
							<AUtextInput type="number" id="address-4-alt" width="sm"/>
						</AUformGroup>
					</AUfieldset>

					<hr/>

					<h3>Fieldsets with <code>--invalid</code></h3>
					<br/>
					<AUfieldset>
						<AUlegend>
							<AUheading level="2" size="lg">
								What is your address?
							</AUheading>
						</AUlegend>
						<AUformGroup>
							<AUlabel htmlFor="address-1-err-alt" text="Street and number"/>
							<AUtextInput id="address-1-err-alt" width="lg"/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-2-err-alt" text="Suburb"/>
							<AUtextInput id="address-2-err-alt" width="lg"/>
						</AUformGroup>

						<AUformGroup status="invalid">
							<AUlabel htmlFor="select1-err-alt" text="State"/>
							<AUerrorText text="A state was not selected" id="fg-error-text-err-bottom"/>
							<AUselect status="invalid" id="select1-err-alt" options={states}/>
						</AUformGroup>

						<AUformGroup>
							<AUlabel htmlFor="address-4-err-alt" text="Postcode"/>
							<AUtextInput id="address-4-err-alt" type="number" width="sm"/>
						</AUformGroup>
					</AUfieldset>

					<hr/>

					<h3>Fieldsets with control inputs <code>--invalid</code></h3>
					<p></p>
					<AUformGroup status="invalid">
						<AUfieldset>
							<AUlegend>
								<AUheading level="2" size="lg">
									Please select your favorite device
								</AUheading>
								<AUhintText text="We will only use this to respond to your request" id="device-hint-text-err-alt"/>
								<AUerrorText text="A device was not selected" id="device-cb-err-alt"/>
							</AUlegend>

							<AUcheckbox label="Phone" name="checkbox-ex-err-alt" id="cb-phone-err-alt" block/>
							<AUcheckbox label="Tablet" name="checkbox-ex-err-alt" id="cb-tablet-err-alt" block/>
							<AUcheckbox label="Laptop" name="checkbox-ex-err-alt" id="cb-laptop-err-alt" block/>
						</AUfieldset>
					</AUformGroup>
				</div>
			</div>
			</React.Fragment>
		);
	}
}


export default App;

ReactDOM.render(<App />,

	document.getElementById('root'),
);
