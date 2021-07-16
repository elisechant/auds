import React from 'react';
import {withLayout} from '../helpers/withLayout';

const TextInputs = () => (
	<>
		<h1>Test: text-inputs</h1>

		<div className="split-wrapper">
			<div className="split">

				<h2>Text inputs</h2>

				<label htmlFor="textin-a">A text input field</label>
				<input className="au-text-input" name="textin-a" id="textin-a" type="text" value="ABCZ abcjg liI1 12340"/>

				<hr/>
				<h2>Text inputs with block</h2>

				<label htmlFor="textin-b">A text input field</label>
				<input className="au-text-input au-text-input--block" name="textin-b" id="textin-b" type="text"
				       value="ABCZ abcjg liI1 12340"/>

				<hr/>
				<h2>Text inputs with grid</h2>

				<div className="au-grid">
					<div className="row">
						<div className="col-sm-6">

							<h2>Text inputs</h2>
							<form>
								<p>
									<label htmlFor="textin">A text input field</label>
									<input className="au-text-input au-text-input--block" name="textin" id="textin" type="text"
									       value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="numberin">A number input field <small>(optional)</small></label>
									<input className="au-text-input au-text-input--block au-text-input--number" name="numberin"
									       id="numberin"
									       type="number" value="12340"/>
								</p>
								<p>
									<label htmlFor="serachin">A search input field <small>(optional)</small></label>
									<input className="au-text-input au-text-input--block au-text-input--number" name="serachin"
									       id="serachin"
									       type="search" value="12340"/>
								</p>
								<p>
									<label htmlFor="phonein">A phone number (tel) input field</label>
									<input className="au-text-input au-text-input--block au-text-input--number" name="phonein"
									       id="phonein"
									       type="tel" pattern="[0-9]*" value="12340"/>
								</p>
								<p>
									<label htmlFor="textinvalid">An invalid field</label>
									<input className="au-text-input au-text-input--block au-text-input--invalid" name="textinvalid"
									       id="textinvalid" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textvalid">A valid field</label>
									<input className="au-text-input au-text-input--block au-text-input--valid" name="textvalid"
									       id="textvalid"
									       type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textdisabled">A disabled field</label>
									<input className="au-text-input au-text-input--block" name="textdisabled" id="textdisabled"
									       type="text"
									       disabled value="ABCZ abcjg liI1 12340"/>
								</p>

								<button className="no-a11y-test">submit</button>
							</form>

							<hr/>
							<h2>Textarea input</h2>

							<form>
								<label htmlFor="texta">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block" name="texta" id="texta">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta2">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--invalid"  name="validtest"
								          id="texta2">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta3">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--valid" name="validtest"
								          id="texta3">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>

								<button className="no-a11y-test">submit</button>
							</form>

						</div>
						<div className="col-sm-6 au-body">

							<h2>Text inputs, using <code>body</code></h2>
							<form>
								<p>
									<label htmlFor="textin2">A text input field</label>
									<input className="au-text-input au-text-input--block" name="textin2" id="textin2" type="text"
									       value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="numberin2">A number input field <small>(optional)</small></label>
									<input className="au-text-input au-text-input--block au-text-input--number" name="numberin2"
									       id="numberin2"
									       type="number" value="12340"/>
								</p>
								<p>
									<label htmlFor="phonein2">A phone number (tel) input field</label>
									<input className="au-text-input au-text-input--block au-text-input--number" name="phonein2"
									       id="phonein2"
									       type="tel" pattern="[0-9]*" value="12340"/>
								</p>
								<p>
									<label htmlFor="textinvalid2">An invalid field</label>
									<input className="au-text-input au-text-input--block au-text-input--invalid" name="textinvalid2"
									       id="textinvalid2" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textvalid2">A valid field</label>
									<input className="au-text-input au-text-input--block au-text-input--valid" name="textvalid2"
									       id="textvalid2"
									       type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textdisabled2">A disabled field</label>
									<input className="au-text-input au-text-input--block" name="textdisabled2" id="textdisabled2"
									       type="text"
									       disabled value="ABCZ abcjg liI1 12340"/>
								</p>

								<button className="no-a11y-test">submit</button>
							</form>

							<hr/>
							<h2>Textarea input, using <code>body</code></h2>

							<form>
								<label htmlFor="texta2-2">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block" name="texta2-2" id="texta2-2">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta22">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--invalid" name="texta22"
								          id="texta22">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta23">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--valid" name="texta23"
								          id="texta23">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>

								<button className="no-a11y-test">submit</button>
							</form>

						</div>
					</div>
				</div>

				<hr/>
				<h3>Text inputs different widths</h3>

				<label className="label" htmlFor="width-xs">Width XS</label>
				<input type="text" value="WW" className="au-text-input au-text-input--width-xs" id="width-xs"/>

				<label className="label" htmlFor="width-sm">Width SM</label>
				<input type="text" value="WWWW" className="au-text-input au-text-input--width-sm" id="width-sm"/>

				<label className="label" htmlFor="width-md">Width MD</label>
				<input type="text" value="WW-WW-WW" className="au-text-input au-text-input--width-md" id="width-md"/>

				<label className="label" htmlFor="default">Default</label>
				<input type="text" value="+61 400 000 000" className="au-text-input" id="default"/>

				<label className="label" htmlFor="width-lg">Width LG</label>
				<input type="text" value="Level 3, 50 Marcus Clarke St" className="au-text-input au-text-input--width-lg"
				       id="width-lg"/>

				<label className="label" htmlFor="width-xl">Width XL</label>
				<input type="text" value="Level 3, 50 Marcus Clarke St, Canberra"
				       className="au-text-input au-text-input--width-xl"
				       id="width-xl"/>

				<label className="label" htmlFor="width-full">Full width</label>
				<input type="text" value="" className="au-text-input au-text-input--block" id="width-full"/>

				<hr/>
				<h3>Text inputs side-by-side</h3>
				<input aria-label="day" type="text" value="26" className="au-text-input au-text-input--width-xs" id="day"/>
				<input aria-label="month" type="text" value="01" className="au-text-input au-text-input--width-xs"
				       id="month"/>
				<input aria-label="year" type="text" value="2019" className="au-text-input au-text-input--width-sm"
				       id="year"/>

			</div>
			<div className="split split--dark">

				<h2>Text inputs</h2>

				<label htmlFor="textin-a-dark">A text input field</label>
				<input className="au-text-input au-text-input--dark" name="textin-a-dark" id="textin-a-dark" type="text"
				       value="ABCZ abcjg liI1 12340"/>

				<hr/>
				<h2>Text inputs with block</h2>

				<label htmlFor="textin-b-dark">A text input field</label>
				<input className="au-text-input au-text-input--dark au-text-input--block" name="textin-b-dark"
				       id="textin-b-dark"
				       type="text" value="ABCZ abcjg liI1 12340"/>

				<hr/>
				<h2>Text inputs with grid</h2>

				<div className="au-grid">
					<div className="row">
						<div className="col-sm-6">

							<h2>Text inputs</h2>
							<form>
								<p>
									<label htmlFor="textin-dark">A text input field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block" name="textin-dark"
									       id="textin-dark"
									       type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="numberin-dark">A number input field <small>(optional)</small></label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--number"
									       name="numberin-dark" id="numberin-dark" type="number" value="12340"/>
								</p>
								<p>
									<label htmlFor="phonein-dark">A phone number (tel) input field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--number"
									       name="phonein-dark" id="phonein-dark" type="tel" pattern="[0-9]*" value="12340"/>
								</p>
								<p>
									<label htmlFor="textinvalid-dark">An invalid field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--invalid"
									       name="textinvalid-dark" id="textinvalid-dark" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textvalid-dark">A valid field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--valid"
									       name="textvalid-dark" id="textvalid-dark" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textdisabled-dark">A disabled field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block" name="textdisabled-dark"
									       id="textdisabled-dark" type="text" disabled value="ABCZ abcjg liI1 12340"/>
								</p>

								<button className="no-a11y-test">submit</button>
							</form>

							<hr/>
							<h2>Textarea input</h2>

							<form>
								<label htmlFor="texta-dark">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--dark au-text-input--block" name="texta-dark"
								          id="texta-dark">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta-dark2">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--invalid" name="texta-dark2"
								          id="texta-dark2">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta-dark3">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--valid" name="texta-dark3"
								          id="texta-dark3">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>

								<button className="no-a11y-test">submit</button>
							</form>

						</div>
						<div className="col-sm-6 au-body au-body--dark">

							<h2>Text inputs, using <code>body</code></h2>
							<form>
								<p>
									<label htmlFor="textin2-dark">A text input field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block" name="textin2-dark"
									       id="textin2-dark" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="numberin2-dark">A number input field <small>(optional)</small></label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--number"
									       name="numberin2-dark" id="numberin2-dark" type="number" value="12340"/>
								</p>
								<p>
									<label htmlFor="phonein2-dark">A phone number (tel) input field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--number"
									       name="phonein2-dark" id="phonein2-dark" type="tel" pattern="[0-9]*" value="12340"/>
								</p>
								<p>
									<label htmlFor="textinvalid2-dark">An invalid field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--invalid"
									       name="textinvalid2-dark" id="textinvalid2-dark" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textvalid2-dark">A valid field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--valid"
									       name="textvalid2-dark" id="textvalid2-dark" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textdisabled2-dark">A disabled field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block"
									       name="textdisabled2-dark"
									       id="textdisabled2-dark" type="text" disabled value="ABCZ abcjg liI1 12340"/>
								</p>

								<button className="no-a11y-test">submit</button>
							</form>

							<hr/>
							<h2>Textarea input, using <code>body</code></h2>

							<form>
								<label htmlFor="texta2-dark">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--dark au-text-input--block" name="texta2-dark"
								          id="texta2-dark">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta2-dark2">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--invalid" name="texta2-dark2"
								          id="texta2-dark2">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta2-dark3">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--valid" name="texta2-dark3"
								          id="texta2-dark3">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>

								<button className="no-a11y-test">submit</button>
							</form>
						</div>
					</div>
				</div>

				<hr/>
				<hr/>
				<h3>Text inputs different widths</h3>

				<label className="label" htmlFor="width-xs-dark">Width XS</label>
				<input type="text" value="WW" className="au-text-input au-text-input--dark au-text-input--width-xs"
				       id="width-xs-dark"/>

				<label className="label" htmlFor="width-sm-dark">Width SM</label>
				<input type="text" value="WWWW" className="au-text-input au-text-input--dark au-text-input--width-sm"
				       id="width-sm-dark"/>

				<label className="label" htmlFor="width-md-dark">Width MD</label>
				<input type="text" value="WW-WW-WW" className="au-text-input au-text-input--dark au-text-input--width-md"
				       id="width-md-dark"/>

				<label className="label" htmlFor="default-dark">Default</label>
				<input type="text" value="+61 400 000 000" className="au-text-input au-text-input--dark" id="default-dark"/>

				<label className="label" htmlFor="width-lg-dark">Width LG</label>
				<input type="text" value="Level 3, 50 Marcus Clarke St"
				       className="au-text-input au-text-input--dark au-text-input--width-lg" id="width-lg-dark"/>

				<label className="label" htmlFor="width-xl-dark">Width XL</label>
				<input type="text" value="Level 3, 50 Marcus Clarke St, Canberra"
				       className="au-text-input au-text-input--dark au-text-input--width-xl" id="width-xl-dark"/>
				<label className="label" htmlFor="full-width-dark">Full width</label>
				<input type="text" value="" className="au-text-input au-text-input--dark au-text-input--block"
				       id="full-width-dark"/>

				<hr/>
				<h3>Text inputs side-by-side</h3>
				<input aria-label="day" type="text" value="26"
				       className="au-text-input au-text-input--dark au-text-input--width-xs"
				       id="day-dark"/>
				<input aria-label="month" type="text" value="01"
				       className="au-text-input au-text-input--dark au-text-input--width-xs"
				       id="month-dark"/>
				<input aria-label="year" type="text" value="2019"
				       className="au-text-input au-text-input--dark au-text-input--width-sm"
				       id="year-dark"/>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">

				<h2>Text inputs</h2>

				<label htmlFor="textin-a-alt">A text input field</label>
				<input className="au-text-input" name="textin-a-alt" id="textin-a-alt" type="text"
				       value="ABCZ abcjg liI1 12340"/>

				<hr/>
				<h2>Text inputs with block</h2>

				<label htmlFor="textin-b-alt">A text input field</label>
				<input className="au-text-input au-text-input--block" name="textin-b-alt" id="textin-b-alt" type="text"
				       value="ABCZ abcjg liI1 12340"/>

				<hr/>
				<h2>Text inputs with grid</h2>

				<div className="au-grid">
					<div className="row">
						<div className="col-sm-6">

							<h2>Text inputs</h2>
							<form>
								<p>
									<label htmlFor="textin-alt">A text input field</label>
									<input className="au-text-input au-text-input--block" name="textin-alt" id="textin-alt"
									       type="text"
									       value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="numberin-alt">A number input field <small>(optional)</small></label>
									<input className="au-text-input au-text-input--block au-text-input--number" name="numberin-alt"
									       id="numberin-alt" type="number" value="12340"/>
								</p>
								<p>
									<label htmlFor="phonein-alt">A phone number (tel) input field</label>
									<input className="au-text-input au-text-input--block au-text-input--number" name="phonein-alt"
									       id="phonein-alt" type="tel" pattern="[0-9]*" value="12340"/>
								</p>
								<p>
									<label htmlFor="textinvalid-alt">An invalid field</label>
									<input className="au-text-input au-text-input--block au-text-input--invalid"
									       name="textinvalid-alt"
									       id="textinvalid-alt" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textvalid-alt">A valid field</label>
									<input className="au-text-input au-text-input--block au-text-input--valid" name="textvalid-alt"
									       id="textvalid-alt" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textdisabled-alt">A disabled field</label>
									<input className="au-text-input au-text-input--block" name="textdisabled-alt"
									       id="textdisabled-alt"
									       type="text" disabled value="ABCZ abcjg liI1 12340"/>
								</p>

								<button className="no-a11y-test">submit</button>
							</form>

							<hr/>
							<h2>Textarea input</h2>

							<form>
								<label htmlFor="texta-alt">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block" name="texta-alt" id="texta-alt">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta-alt2">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--invalid" name="texta-alt2"
								          id="texta-alt2">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta-alt3">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--valid" name="texta-alt3"
								          id="texta-alt3">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>

								<button className="no-a11y-test">submit</button>
							</form>

						</div>
						<div className="col-sm-6 au-body au-body--alt">

							<h2>Text inputs, using <code>body</code></h2>
							<form>
								<p>
									<label htmlFor="textin2-alt">A text input field</label>
									<input className="au-text-input au-text-input--block" name="textin2-alt" id="textin2-alt"
									       type="text"
									       value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="numberin2-alt">A number input field <small>(optional)</small></label>
									<input className="au-text-input au-text-input--block au-text-input--number" name="numberin2-alt"
									       id="numberin2-alt" type="number" value="12340"/>
								</p>
								<p>
									<label htmlFor="phonein2-alt">A phone number (tel) input field</label>
									<input className="au-text-input au-text-input--block au-text-input--number" name="phonein2-alt"
									       id="phonein2-alt" type="tel" pattern="[0-9]*" value="12340"/>
								</p>
								<p>
									<label htmlFor="textinvalid2-alt">An invalid field</label>
									<input className="au-text-input au-text-input--block au-text-input--invalid"
									       name="textinvalid2-alt"
									       id="textinvalid2-alt" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textvalid2-alt">A valid field</label>
									<input className="au-text-input au-text-input--block au-text-input--valid" name="textvalid2-alt"
									       id="textvalid2-alt" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textdisabled2-alt">A disabled field</label>
									<input className="au-text-input au-text-input--block" name="textdisabled2-alt"
									       id="textdisabled2-alt"
									       type="text" disabled value="ABCZ abcjg liI1 12340"/>
								</p>

								<button className="no-a11y-test">submit</button>
							</form>

							<hr/>
							<h2>Textarea input, using <code>body</code></h2>

							<form>
								<label htmlFor="texta2-alt">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block" name="texta2-alt" id="texta2-alt">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta2-alt2">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--invalid" name="texta2-alt2"
								          id="texta2-alt2">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta2-alt3">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--valid" name="texta2-alt3"
								          id="texta2-alt3">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>

								<button className="no-a11y-test">submit</button>
							</form>

						</div>
					</div>
				</div>
				<hr/>
				<h3>Text inputs different widths</h3>

				<label className="label" htmlFor="width-xs-alt">Width XS</label>
				<input type="text" value="WW" className="au-text-input au-text-input--alt au-text-input--width-xs"
				       id="width-xs-alt"/>

				<label className="label" htmlFor="width-sm-alt">Width SM</label>
				<input type="text" value="WWWW" className="au-text-input au-text-input--alt au-text-input--width-sm"
				       id="width-sm-alt"/>

				<label className="label" htmlFor="width-md-alt">Width MD</label>
				<input type="text" value="WW-WW-WW" className="au-text-input au-text-input--alt au-text-input--width-md"
				       id="width-md-alt"/>

				<label className="label" htmlFor="default-alt">Default</label>
				<input type="text" value="+61 400 000 000" className="au-text-input au-text-input--alt" id="default-alt"/>

				<label className="label" htmlFor="width-lg-alt">Width LG</label>
				<input type="text" value="Level 3, 50 Marcus Clarke St"
				       className="au-text-input au-text-input--alt au-text-input--width-lg" id="width-lg-alt"/>

				<label className="label" htmlFor="width-xl-alt">Width XL</label>
				<input type="text" value="Level 3, 50 Marcus Clarke St, Canberra"
				       className="au-text-input au-text-input--alt au-text-input--width-xl" id="width-xl-alt"/>
				<label className="label" htmlFor="full-width-alt">Full width</label>
				<input type="text" value="" className="au-text-input au-text-input--alt au-text-input--block"
				       id="full-width-alt"/>
			</div>
			<div className="split split--alt split--dark">

				<h2>Text inputs</h2>

				<label htmlFor="textin-a-altdark">A text input field</label>
				<input className="au-text-input au-text-input--dark" name="textin-a-altdark" id="textin-a-altdark" type="text"
				       value="ABCZ abcjg liI1 12340"/>

				<hr/>
				<h2>Text inputs with block</h2>

				<label htmlFor="textin-b-altdark">A text input field</label>
				<input className="au-text-input au-text-input--dark au-text-input--block" name="textin-b-altdark"
				       id="textin-b-altdark"
				       type="text" value="ABCZ abcjg liI1 12340"/>

				<hr/>
				<h2>Text inputs with grid</h2>

				<div className="au-grid">
					<div className="row">
						<div className="col-sm-6">

							<h2>Text inputs</h2>
							<form>
								<p>
									<label htmlFor="textin-altdark">A text input field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block" name="textin-altdark"
									       id="textin-altdark" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="numberin-altdark">A number input field <small>(optional)</small></label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--number"
									       name="numberin-altdark" id="numberin-altdark" type="number" value="12340"/>
								</p>
								<p>
									<label htmlFor="phonein-altdark">A phone number (tel) input field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--number"
									       name="phonein-altdark" id="phonein-altdark" type="tel" pattern="[0-9]*" value="12340"/>
								</p>
								<p>
									<label htmlFor="textinvalid-altdark">An invalid field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--invalid"
									       name="textinvalid" id="textinvalid-altdark" type="text"
									       value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textvalid-altdark">A valid field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--valid"
									       name="textvalid-altdark" id="textvalid-altdark" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textdisabled-altdark">A disabled field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block"
									       name="textdisabled-altdark"
									       id="textdisabled-altdark" type="text" disabled value="ABCZ abcjg liI1 12340"/>
								</p>

								<button className="no-a11y-test">submit</button>
							</form>

							<hr/>
							<h2>Textarea input</h2>

							<form>
								<label htmlFor="texta-altdark">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--dark au-text-input--block" name="texta-altdark"
								          id="texta-altdark">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta-altdark2">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--invalid"
								          name="texta-altdark2"
								          id="texta-altdark2">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta-altdark3">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--valid" name="texta-altdark3"
								          id="texta-altdark3">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>

								<button className="no-a11y-test">submit</button>
							</form>

						</div>
						<div className="col-sm-6 au-body au-body--alt au-body--dark">

							<h2>Text inputs, using <code>body</code></h2>
							<form>
								<p>
									<label htmlFor="textin2-altdark">A text input field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block" name="textin2-altdark"
									       id="textin2-altdark" type="text" value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="numberin2-altdark">A number input field <small>(optional)</small></label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--number"
									       name="numberin2-altdark" id="numberin2-altdark" type="number" value="12340"/>
								</p>
								<p>
									<label htmlFor="phonein2-altdark">A phone number (tel) input field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--number"
									       name="phonein2-altdark" id="phonein2-altdark" type="tel" pattern="[0-9]*" value="12340"/>
								</p>
								<p>
									<label htmlFor="textinvalid2-altdark">An invalid field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--invalid"
									       name="textinvalid2-altdark" id="textinvalid2-altdark" type="text"
									       value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textvalid2-altdark">A valid field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block au-text-input--valid"
									       name="textvalid2-altdark" id="textvalid2-altdark" type="text"
									       value="ABCZ abcjg liI1 12340"/>
								</p>
								<p>
									<label htmlFor="textdisabled2-altdark">A disabled field</label>
									<input className="au-text-input au-text-input--dark au-text-input--block"
									       name="textdisabled2-altdark"
									       id="textdisabled2-altdark" type="text" disabled value="ABCZ abcjg liI1 12340"/>
								</p>

								<button className="no-a11y-test">submit</button>
							</form>

							<hr/>
							<h2>Textarea input, using <code>body</code></h2>

							<form>
								<label htmlFor="texta2-altdark">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--dark au-text-input--block" name="texta2-altdark"
								          id="texta2-altdark">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta2-altdark2">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--invalid"
								          name="texta2-altdark2"
								          id="texta2-altdark2">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>
								<br/>
								<label htmlFor="texta2-altdark3">An input htmlFor longer responses</label>
								<textarea className="au-text-input au-text-input--block au-text-input--valid" name="texta2-altdark3"
								          id="texta2-altdark3">
ABCZ abcjg liI1 12340
ABCZ abcjg liI1 12340
							</textarea>

								<button className="no-a11y-test">submit</button>
							</form>

						</div>
					</div>
				</div>
				<hr/>
				<h3>Text inputs different widths</h3>

				<label className="label" htmlFor="width-xs-dark-alt">Width XS</label>
				<input type="text" value="WW" className="au-text-input au-text-input--dark au-text-input--width-xs"
				       id="width-xs-dark-alt"/>

				<label className="label" htmlFor="width-sm-dark-alt">Width SM</label>
				<input type="text" value="WWWW" className="au-text-input au-text-input--dark au-text-input--width-sm"
				       id="width-sm-dark-alt"/>

				<label className="label" htmlFor="width-md-dark-alt">Width MD</label>
				<input type="text" value="WW-WW-WW" className="au-text-input au-text-input--dark au-text-input--width-md"
				       id="width-md-dark-alt"/>

				<label className="label" htmlFor="default-dark-alt">Default</label>
				<input type="text" value="+61 400 000 000" className="au-text-input au-text-input--dark"
				       id="default-dark-alt"/>

				<label className="label" htmlFor="width-lg-dark-alt">Width LG</label>
				<input type="text" value="Level 3, 50 Marcus Clarke St"
				       className="au-text-input au-text-input--dark au-text-input--width-lg" id="width-lg-dark-alt"/>

				<label className="label" htmlFor="width-xl-dark-alt">Width XL</label>
				<input type="text" value="Level 3, 50 Marcus Clarke St, Canberra"
				       className="au-text-input au-text-input--dark au-text-input--width-xl" id="width-xl-dark-alt"/>

				<label className="label" htmlFor="full-width-dark-alt">Full width</label>
				<input type="text" value="" className="au-text-input au-text-input--dark au-text-input--block"
				       id="full-width-dark-alt"/>
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

export default withLayout(TextInputs);

