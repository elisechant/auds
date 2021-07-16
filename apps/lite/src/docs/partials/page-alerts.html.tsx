import React from 'react';
import {withLayout} from '../helpers/withLayout';

const PageAlerts = () => (
	<>
		<h1>Test: page-alerts</h1>

		<div className="split-wrapper">
			<div className="split">
				<h2>no variant</h2>

				<div className="au-body au-page-alerts">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--info</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--info">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--success</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--success">
					<h3>Success</h3>
					<p>Your immunisation appointment for
						<mark>August 7, 2017</mark>
						has been confirmed.
					</p>
					<h3>What will happen next</h3>
					<ul>
						<li>
							You’ll receive an email to <strong>foo@bar.com</strong> with the appointment details for your reference.
							<br/>
							<small>This is your current <a href="#">primary contact email address</a>.</small>
						</li>
						<li>
							2 days before your appointment we’ll send you a reminder via text message to <strong>0404 123 456</strong>.
							<br/>
							<small>This is your current <a href="#">primary contact phone number</a>.</small>
						</li>
					</ul>
				</div>

				<hr/>

				<h2><code>--warning</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--warning">
					<h3>Warning: Protect yourself against phone scams</h3>
					<p>The <dfn><abbr title="Australian Tax Office">ATO</abbr></dfn> is warning the public to be aware of a phone
						scam
						that is again circulating where fraudsters are intimidating people into paying a fake tax debt over the
						phone.
					</p>
					<p><strong>We will never contact you in person over the phone to make a payment</strong>.</p>
				</div>

				<hr/>

				<h2><code>--error</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--error">
					<h3>Alert</h3>
					<span>There were 3 errors found in the information you submitted</span>
					<ol>
						<li><a href="#">Please enter a valid licence number <span
							className="au-page-alerts__sronly">- Error 1 of 3</span></a></li>
						<li><a href="#">Please enter a valid email address <span
							className="au-page-alerts__sronly">- Error 2 of 3</span></a></li>
						<li><a href="#">First name is required <span className="au-page-alerts__sronly">- Error 3 of 3</span></a>
						</li>
					</ol>
				</div>
			</div>


			<div className="split split--dark">
				<h2>no variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--info</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark au-page-alerts--info">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--info</code> variant with <code>au-body--dark</code></h2>

				<div className="au-body au-body--dark au-page-alerts au-page-alerts--dark au-page-alerts--info">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--success</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark au-page-alerts--success">
					<h3>Success</h3>
					<p>Your immunisation appointment for
						<mark>August 7, 2017</mark>
						has been confirmed.
					</p>
					<h4>What will happen next</h4>
					<ul>
						<li>
							You’ll receive an email to <strong>foo@bar.com</strong> with the appointment details for your reference.
							<br/>
							<small>This is your current <a href="#">primary contact email address</a>.</small>
						</li>
						<li>
							2 days before your appointment we’ll send you a reminder via text message to <strong>0404 123 456</strong>.
							<br/>
							<small>This is your current <a href="#">primary contact phone number</a>.</small>
						</li>
					</ul>
				</div>

				<hr/>

				<h2><code>--success</code> variant with <code>au-body--dark</code></h2>

				<div className="au-body au-body--dark au-page-alerts au-page-alerts--dark au-page-alerts--success">
					<h3>Success</h3>
					<p>Your immunisation appointment for
						<mark>August 7, 2017</mark>
						has been confirmed.
					</p>
					<h4>What will happen next</h4>
					<ul>
						<li>
							You’ll receive an email to <strong>foo@bar.com</strong> with the appointment details for your reference.
							<br/>
							<small>This is your current <a href="#">primary contact email address</a>.</small>
						</li>
						<li>
							2 days before your appointment we’ll send you a reminder via text message to <strong>0404 123 456</strong>.
							<br/>
							<small>This is your current <a href="#">primary contact phone number</a>.</small>
						</li>
					</ul>
				</div>

				<hr/>

				<h2><code>--warning</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark au-page-alerts--warning">
					<h3>Warning: Protect yourself against phone scams</h3>
					<p>The <dfn><abbr title="Australian Tax Office">ATO</abbr></dfn> is warning the public to be aware of a phone
						scam
						that is again circulating where fraudsters are intimidating people into paying a fake tax debt over the
						phone.
					</p>
					<p><strong>We will never contact you in person over the phone to make a payment</strong>.</p>
				</div>

				<hr/>

				<h2><code>--warning</code> variant with <code>au-body--dark</code></h2>

				<div className="au-body au-body--dark au-page-alerts au-page-alerts--dark au-page-alerts--warning">
					<h3>Warning: Protect yourself against phone scams</h3>
					<p>The <dfn><abbr title="Australian Tax Office">ATO</abbr></dfn> is warning the public to be aware of a phone
						scam
						that is again circulating where fraudsters are intimidating people into paying a fake tax debt over the
						phone.
					</p>
					<p><strong>We will never contact you in person over the phone to make a payment</strong>.</p>
				</div>

				<hr/>

				<h2><code>--error</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark au-page-alerts--error">
					<h3>Error</h3>
					<span>There were 3 errors found in the information you submitted</span>
					<ol>
						<li><a href="#">Please enter a valid licence number <span
							className="au-page-alerts__sronly">- Error 1 of 3</span></a></li>
						<li><a href="#">Please enter a valid email address <span
							className="au-page-alerts__sronly">- Error 2 of 3</span></a></li>
						<li><a href="#">First name is required <span className="au-page-alerts__sronly">- Error 3 of 3</span></a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--error</code> variant with <code>au-body--dark</code></h2>

				<div className="au-body au-body--dark au-page-alerts au-page-alerts--dark au-page-alerts--error">
					<h3>Error</h3>
					<span>There were 3 errors found in the information you submitted</span>
					<ol>
						<li><a href="#">Please enter a valid licence number <span
							className="au-page-alerts__sronly">- Error 1 of 3</span></a></li>
						<li><a href="#">Please enter a valid email address <span
							className="au-page-alerts__sronly">- Error 2 of 3</span></a></li>
						<li><a href="#">First name is required <span className="au-page-alerts__sronly">- Error 3 of 3</span></a>
						</li>
					</ol>
				</div>
			</div>
		</div>



		<div className="split-wrapper">
			<div className="split split--alt">
				<h2>no variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--alt">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--info</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--alt au-page-alerts--info">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--info</code> variant with <code>au-body--alt</code></h2>

				<div className="au-body au-body--alt au-page-alerts au-page-alerts--alt au-page-alerts--info">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--success</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--alt au-page-alerts--success">
					<h3>Success</h3>
					<p>Your immunisation appointment for
						<mark>August 7, 2017</mark>
						has been confirmed.
					</p>
					<h4>What will happen next</h4>
					<ul>
						<li>
							You’ll receive an email to <strong>foo@bar.com</strong> with the appointment details for your reference.
							<br/>
							<small>This is your current <a href="#">primary contact email address</a>.</small>
						</li>
						<li>
							2 days before your appointment we’ll send you a reminder via text message to <strong>0404 123 456</strong>.
							<br/>
							<small>This is your current <a href="#">primary contact phone number</a>.</small>
						</li>
					</ul>
				</div>

				<h2><code>--success</code> variant with <code>au-body--alt</code></h2>

				<div className="au-body au-body--alt au-page-alerts au-page-alerts--alt au-page-alerts--success">
					<h3>Success</h3>
					<p>Your immunisation appointment for
						<mark>August 7, 2017</mark>
						has been confirmed.
					</p>
					<h4>What will happen next</h4>
					<ul>
						<li>
							You’ll receive an email to <strong>foo@bar.com</strong> with the appointment details for your reference.
							<br/>
							<small>This is your current <a href="#">primary contact email address</a>.</small>
						</li>
						<li>
							2 days before your appointment we’ll send you a reminder via text message to <strong>0404 123 456</strong>.
							<br/>
							<small>This is your current <a href="#">primary contact phone number</a>.</small>
						</li>
					</ul>
				</div>

				<hr/>

				<h2><code>--warning</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--alt au-page-alerts--warning">
					<h3>Warning: Protect yourself against phone scams</h3>
					<p>The <dfn><abbr title="Australian Tax Office">ATO</abbr></dfn> is warning the public to be aware of a phone
						scam
						that is again circulating where fraudsters are intimidating people into paying a fake tax debt over the
						phone.
					</p>
					<p><strong>We will never contact you in person over the phone to make a payment</strong>.</p>
				</div>

				<hr/>

				<h2><code>--warning</code> variant with <code>au-body--alt</code></h2>

				<div className="au-body au-body--alt au-page-alerts au-page-alerts--alt au-page-alerts--warning">
					<h3>Warning: Protect yourself against phone scams</h3>
					<p>The <dfn><abbr title="Australian Tax Office">ATO</abbr></dfn> is warning the public to be aware of a phone
						scam
						that is again circulating where fraudsters are intimidating people into paying a fake tax debt over the
						phone.
					</p>
					<p><strong>We will never contact you in person over the phone to make a payment</strong>.</p>
				</div>

				<hr/>

				<h2><code>--error</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--alt au-page-alerts--error">
					<h3>Error</h3>
					<span>There were 3 errors found in the information you submitted</span>
					<ol>
						<li><a href="#">Please enter a valid licence number <span
							className="au-page-alerts__sronly">- Error 1 of 3</span></a></li>
						<li><a href="#">Please enter a valid email address <span
							className="au-page-alerts__sronly">- Error 2 of 3</span></a></li>
						<li><a href="#">First name is required <span className="au-page-alerts__sronly">- Error 3 of 3</span></a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--error</code> variant with <code>au-body--alt</code></h2>

				<div className="au-body au-body--alt au-page-alerts au-page-alerts--alt au-page-alerts--error">
					<h3>Error</h3>
					<span>There were 3 errors found in the information you submitted</span>
					<ol>
						<li><a href="#">Please enter a valid licence number <span
							className="au-page-alerts__sronly">- Error 1 of 3</span></a></li>
						<li><a href="#">Please enter a valid email address <span
							className="au-page-alerts__sronly">- Error 2 of 3</span></a></li>
						<li><a href="#">First name is required <span className="au-page-alerts__sronly">- Error 3 of 3</span></a>
						</li>
					</ol>
				</div>
			</div>



			<div className="split split--alt split--dark">
				<h2>variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark au-page-alerts--alt">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--info</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark au-page-alerts--alt au-page-alerts--info">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--info</code> variant with <code>au-body--dark au-body--alt</code></h2>

				<div
					className="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--dark au-page-alerts--alt au-page-alerts--info">
					<h3>Info: Accessibility reading</h3>
					<ol>
						<li>The <a href="https://www.legislation.gov.au/Latest/C2016C00763">Disability Discrimination Act (1992)</a>
						</li>
						<li>The <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">Web Content Accessibility Guidelines 2
							(<abbr>WCAG</abbr>)</a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--success</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark au-page-alerts--alt au-page-alerts--success">
					<h3>Success</h3>
					<p>Your immunisation appointment for
						<mark>August 7, 2017</mark>
						has been confirmed.
					</p>
					<h4>What will happen next</h4>
					<ul>
						<li>
							You’ll receive an email to <strong>foo@bar.com</strong> with the appointment details for your reference.
							<br/>
							<small>This is your current <a href="#">primary contact email address</a>.</small>
						</li>
						<li>
							2 days before your appointment we’ll send you a reminder via text message to <strong>0404 123 456</strong>.
							<br/>
							<small>This is your current <a href="#">primary contact phone number</a>.</small>
						</li>
					</ul>
				</div>

				<hr/>

				<h2><code>--success</code> variant with <code>au-body--dark au-body--alt</code></h2>

				<div
					className="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--dark au-page-alerts--alt au-page-alerts--success">
					<h3>Success</h3>
					<p>Your immunisation appointment for
						<mark>August 7, 2017</mark>
						has been confirmed.
					</p>
					<h4>What will happen next</h4>
					<ul>
						<li>
							You’ll receive an email to <strong>foo@bar.com</strong> with the appointment details for your reference.
							<br/>
							<small>This is your current <a href="#">primary contact email address</a>.</small>
						</li>
						<li>
							2 days before your appointment we’ll send you a reminder via text message to <strong>0404 123 456</strong>.
							<br/>
							<small>This is your current <a href="#">primary contact phone number</a>.</small>
						</li>
					</ul>
				</div>

				<hr/>

				<h2><code>--warning</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark au-page-alerts--alt au-page-alerts--warning">
					<h3>Warning: Protect yourself against phone scams</h3>
					<p>The <dfn><abbr title="Australian Tax Office">ATO</abbr></dfn> is warning the public to be aware of a phone
						scam
						that is again circulating where fraudsters are intimidating people into paying a fake tax debt over the
						phone.
					</p>
					<p><strong>We will never contact you in person over the phone to make a payment</strong>.</p>
				</div>

				<hr/>

				<h2><code>--warning</code> variant with <code>au-body--dark au-body--alt</code></h2>

				<div
					className="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--dark au-page-alerts--alt au-page-alerts--warning">
					<h3>Warning: Protect yourself against phone scams</h3>
					<p>The <dfn><abbr title="Australian Tax Office">ATO</abbr></dfn> is warning the public to be aware of a phone
						scam
						that is again circulating where fraudsters are intimidating people into paying a fake tax debt over the
						phone.
					</p>
					<p><strong>We will never contact you in person over the phone to make a payment</strong>.</p>
				</div>

				<hr/>

				<h2><code>--error</code> variant</h2>

				<div className="au-body au-page-alerts au-page-alerts--dark au-page-alerts--alt au-page-alerts--error">
					<h3>Error</h3>
					<span>There were 3 errors found in the information you submitted</span>
					<ol>
						<li><a href="#">Please enter a valid licence number <span
							className="au-page-alerts__sronly">- Error 1 of 3</span></a></li>
						<li><a href="#">Please enter a valid email address <span
							className="au-page-alerts__sronly">- Error 2 of 3</span></a></li>
						<li><a href="#">First name is required <span className="au-page-alerts__sronly">- Error 3 of 3</span></a>
						</li>
					</ol>
				</div>

				<hr/>

				<h2><code>--error</code> variant with <code>au-body--dark au-body--alt</code></h2>

				<div
					className="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--dark au-page-alerts--alt au-page-alerts--error">
					<h3>Error</h3>
					<span>There were 3 errors found in the information you submitted</span>
					<ol>
						<li><a href="#">Please enter a valid licence number <span
							className="au-page-alerts__sronly">- Error 1 of 3</span></a></li>
						<li><a href="#">Please enter a valid email address <span
							className="au-page-alerts__sronly">- Error 2 of 3</span></a></li>
						<li><a href="#">First name is required <span className="au-page-alerts__sronly">- Error 3 of 3</span></a>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</>
);

export default withLayout(PageAlerts);
