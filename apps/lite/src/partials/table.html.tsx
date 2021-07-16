import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Table = () => (
	<>
		<h1>Test: table</h1>

		<h2>Simple Table</h2>
		<table className="au-table">
			<caption className="au-table__caption">Population of Australian states and territories, December 2015</caption>
			<thead className="au-table__head">
			<tr className="au-table__row">
				<th scope="col" className="au-table__header">Location</th>
				<th scope="col" className="au-table__header">Population</th>
			</tr>
			</thead>
			<tbody className="au-table__body">
			<tr className="au-table__row">
				<td className="au-table__cell">New South Wales</td>
				<td className="au-table__cell">7,670,700</td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Victoria</td>
				<td className="au-table__cell">5,996,400</td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Tasmania</td>
				<td className="au-table__cell">517,400</td>
			</tr>
			</tbody>
		</table>
		<br/>
		<br/>
		<br/>


		<h2>Simple Table with right aligned cells and headers</h2>
		<table className="au-table">
			<caption className="au-table__caption">Population of Australian states and territories, December 2015</caption>
			<thead className="au-table__head">
			<tr className="au-table__row">
				<th scope="col" className="au-table__header">Location</th>
				<th scope="col" className="au-table__header au-table__header--numeric">Population</th>
			</tr>
			</thead>
			<tbody className="au-table__body">
			<tr className="au-table__row">
				<td className="au-table__cell">New South Wales</td>
				<td className="au-table__cell au-table__cell--numeric">7,670,700</td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Victoria</td>
				<td className="au-table__cell au-table__cell--numeric">5,996,400</td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Tasmania</td>
				<td className="au-table__cell au-table__cell--numeric">517,400</td>
			</tr>
			</tbody>
		</table>
		<br/>
		<br/>
		<br/>

		<h2>Striped <code>complex data-table</code></h2>
		<div className="au-table__wrapper">
			<table className="au-table au-table--striped">
				<caption className="au-table__caption">Population of Australian states and territories, December 2015</caption>
				<thead className="au-table__head">
				<tr className="au-table__row">
					<th scope="col" className="au-table__header">Location</th>
					<th scope="col" className="au-table__header">Population</th>
					<th scope="col" className="au-table__header">Change over previous year %</th>
					<th scope="col" className="au-table__header">Change over previous decade %</th>
				</tr>
				</thead>
				<tbody className="au-table__body">
				<tr className="au-table__row">
					<td className="au-table__cell">New South Wales</td>
					<td className="au-table__cell">7,670,700</td>
					<td className="au-table__cell">3.1%</td>
					<td className="au-table__cell">12.9%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Victoria</td>
					<td className="au-table__cell">5,996,400</td>
					<td className="au-table__cell">2.5%</td>
					<td className="au-table__cell">9.3%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Queensland</td>
					<td className="au-table__cell">4,808,800</td>
					<td className="au-table__cell">1.7%</td>
					<td className="au-table__cell">13.3%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Western Australia</td>
					<td className="au-table__cell">2,603,900</td>
					<td className="au-table__cell">2.3%</td>
					<td className="au-table__cell">11.6%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">South Australia</td>
					<td className="au-table__cell">1,702,800</td>
					<td className="au-table__cell">2.0%</td>
					<td className="au-table__cell">6.8%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Tasmania</td>
					<td className="au-table__cell">517,400</td>
					<td className="au-table__cell">4%</td>
					<td className="au-table__cell">5.3%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Northern Territory</td>
					<td className="au-table__cell">244,000</td>
					<td className="au-table__cell">1.2%</td>
					<td className="au-table__cell">4.5%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Australian Capital Territory</td>
					<td className="au-table__cell">393,000</td>
					<td className="au-table__cell">2.4%</td>
					<td className="au-table__cell">9.6%</td>
				</tr>
				</tbody>
			</table>
		</div>
		<br/>
		<br/>
		<br/>

		<div className="row">
			<div className="col-md-6 au-table__wrapper">
				<h2>Table in md-6 Grid <code></code></h2>
				<table className="au-table" style={{width: '100%'}}>
					<caption className="au-table__caption">Population of Australian states and territories, December 2015
					</caption>
					<thead className="au-table__head">
					<tr className="au-table__row">
						<th scope="col" className="au-table__header">Location</th>
						<th scope="col" className="au-table__header">Population</th>
					</tr>
					</thead>
					<tbody className="au-table__body">
					<tr className="au-table__row">
						<td className="au-table__cell">New South Wales</td>
						<td className="au-table__cell">7,670,700</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Victoria</td>
						<td className="au-table__cell">5,996,400</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Queensland</td>
						<td className="au-table__cell">4,808,800</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Western Australia</td>
						<td className="au-table__cell">2,603,900</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">South Australia</td>
						<td className="au-table__cell">1,702,800</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Tasmania</td>
						<td className="au-table__cell">517,400</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Northern Territory</td>
						<td className="au-table__cell">244,000</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Australian Capital Territory</td>
						<td className="au-table__cell">393,000</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
		<br/>
		<br/>
		<br/>

		<div className="row">
			<div className="col-md-8 au-table__wrapper">
				<h2>Striped <code>complex data-table in an md-8 grid</code></h2>
				<table className="au-table au-table--striped" style={{width: '100%'}}>
					<caption className="au-table__caption">Population of Australian states and territories, December 2015
					</caption>
					<thead className="au-table__head">
					<tr className="au-table__row">
						<th scope="col" className="au-table__header">Location</th>
						<th scope="col" className="au-table__header">Population</th>
						<th scope="col" className="au-table__header">Change over previous year %</th>
						<th scope="col" className="au-table__header">Change over previous decade %</th>
					</tr>
					</thead>
					<tbody className="au-table__body">
					<tr className="au-table__row">
						<td className="au-table__cell">New South Wales</td>
						<td className="au-table__cell">7,670,700</td>
						<td className="au-table__cell">3.1%</td>
						<td className="au-table__cell">12.9%</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Victoria</td>
						<td className="au-table__cell">5,996,400</td>
						<td className="au-table__cell">2.5%</td>
						<td className="au-table__cell">9.3%</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Queensland</td>
						<td className="au-table__cell">4,808,800</td>
						<td className="au-table__cell">1.7%</td>
						<td className="au-table__cell">13.3%</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Western Australia</td>
						<td className="au-table__cell">2,603,900</td>
						<td className="au-table__cell">2.3%</td>
						<td className="au-table__cell">11.6%</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">South Australia</td>
						<td className="au-table__cell">1,702,800</td>
						<td className="au-table__cell">2.0%</td>
						<td className="au-table__cell">6.8%</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Tasmania</td>
						<td className="au-table__cell">517,400</td>
						<td className="au-table__cell">4%</td>
						<td className="au-table__cell">5.3%</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Northern Territory</td>
						<td className="au-table__cell">244,000</td>
						<td className="au-table__cell">1.2%</td>
						<td className="au-table__cell">4.5%</td>
					</tr>
					<tr className="au-table__row">
						<td className="au-table__cell">Australian Capital Territory</td>
						<td className="au-table__cell">393,000</td>
						<td className="au-table__cell">2.4%</td>
						<td className="au-table__cell">9.6%</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>

		<br/>
		<br/>
		<br/>
		<h2>Default data-table with links</h2>
		<table className="au-table au-body">
			<caption className="au-table__caption">Population of Australian states and territories, December 2015</caption>
			<thead className="au-table__head">
			<tr className="au-table__row">
				<th scope="col" className="au-table__header au-table__header--width-50">Location</th>
				<th scope="col" className="au-table__header au-table__header--width-25">Population</th>
			</tr>
			</thead>
			<tbody className="au-table__body">
			<tr className="au-table__row">
				<td className="au-table__cell">New South Wales</td>
				<td className="au-table__cell">7,670,700</td>
				<td className="au-table__cell"><a href="#">View more</a></td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Victoria</td>
				<td className="au-table__cell">5,996,400</td>
				<td className="au-table__cell"><a href="#">View more</a></td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Queensland</td>
				<td className="au-table__cell">4,808,800</td>
				<td className="au-table__cell"><a href="#">View more</a></td>

			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Western Australia</td>
				<td className="au-table__cell">2,603,900</td>
				<td className="au-table__cell"><a href="#">View more</a></td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">South Australia</td>
				<td className="au-table__cell">1,702,800</td>
				<td className="au-table__cell"><a href="#">View more</a></td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Tasmania</td>
				<td className="au-table__cell">517,400</td>
				<td className="au-table__cell"><a href="#">View more</a></td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Northern Territory</td>
				<td className="au-table__cell">244,000</td>
				<td className="au-table__cell"><a href="#">View more</a></td>
			</tr>
			<tr className="au-table__row">
				<td className="au-table__cell">Australian Capital Territory</td>
				<td className="au-table__cell">393,000</td>
				<td className="au-table__cell"><a href="#">View more</a></td>
			</tr>
			</tbody>
		</table>
		<br/>
		<br/>
		<br/>

		<h2>Responsive table in a wrapping div</h2>
		<div className="au-table__wrapper">
			<table className="au-table">
				<caption className="au-table__caption">Population of Australian states and territories, December 2015</caption>
				<thead className="au-table__head">
				<tr className="au-table__row">
					<th scope="col" className="au-table__header">Location</th>
					<th scope="col" className="au-table__header">Population</th>
					<th scope="col" className="au-table__header">Change over previous year %</th>
					<th scope="col" className="au-table__header">Change over previous decade %</th>
				</tr>
				</thead>
				<tbody className="au-table__body">
				<tr className="au-table__row">
					<td className="au-table__cell">New South Wales</td>
					<td className="au-table__cell">7,670,700</td>
					<td className="au-table__cell">3.1%</td>
					<td className="au-table__cell">12.9%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Victoria</td>
					<td className="au-table__cell">5,996,400</td>
					<td className="au-table__cell">2.5%</td>
					<td className="au-table__cell">9.3%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Queensland</td>
					<td className="au-table__cell">4,808,800</td>
					<td className="au-table__cell">1.7%</td>
					<td className="au-table__cell">13.3%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Western Australia</td>
					<td className="au-table__cell">2,603,900</td>
					<td className="au-table__cell">2.3%</td>
					<td className="au-table__cell">11.6%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">South Australia</td>
					<td className="au-table__cell">1,702,800</td>
					<td className="au-table__cell">2.0%</td>
					<td className="au-table__cell">6.8%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Tasmania</td>
					<td className="au-table__cell">517,400</td>
					<td className="au-table__cell">4%</td>
					<td className="au-table__cell">5.3%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Northern Territory</td>
					<td className="au-table__cell">244,000</td>
					<td className="au-table__cell">1.2%</td>
					<td className="au-table__cell">4.5%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Australian Capital Territory</td>
					<td className="au-table__cell">393,000</td>
					<td className="au-table__cell">2.4%</td>
					<td className="au-table__cell">9.6%</td>
				</tr>
				</tbody>
			</table>
		</div>

		<br/>
		<br/>
		<br/>

		<h2>Responsive table, using widths and aligning right</h2>
		<div className="au-table__wrapper">
			<table className="au-table au-table--striped">
				<caption className="au-table__caption">Population of Australian states and territories, December 2015</caption>
				<thead className="au-table__head">
				<tr className="au-table__row">
					<th scope="col" className="au-table__header au-table__header--width-25">Location</th>
					<th scope="col" className="au-table__header au-table__header--numeric au-table__header--width-25">Population
					</th>
					<th scope="col" className="au-table__header au-table__header--numeric au-table__header--width-25">Change over
						previous
						year %
					</th>
					<th scope="col" className="au-table__header au-table__header--numeric au-table__header--width-25">Change over
						previous
						decade %
					</th>
				</tr>
				</thead>
				<tbody className="au-table__body">
				<tr className="au-table__row">
					<td className="au-table__cell">New South Wales</td>
					<td className="au-table__cell au-table__cell--numeric">7,670,700</td>
					<td className="au-table__cell au-table__cell--numeric">3.1%</td>
					<td className="au-table__cell au-table__cell--numeric">12.9%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Victoria</td>
					<td className="au-table__cell au-table__cell--numeric">5,996,400</td>
					<td className="au-table__cell au-table__cell--numeric">2.5%</td>
					<td className="au-table__cell au-table__cell--numeric">9.3%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Queensland</td>
					<td className="au-table__cell au-table__cell--numeric">4,808,800</td>
					<td className="au-table__cell au-table__cell--numeric">1.7%</td>
					<td className="au-table__cell au-table__cell--numeric">13.3%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Western Australia</td>
					<td className="au-table__cell au-table__cell--numeric">2,603,900</td>
					<td className="au-table__cell au-table__cell--numeric">2.3%</td>
					<td className="au-table__cell au-table__cell--numeric">11.6%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">South Australia</td>
					<td className="au-table__cell au-table__cell--numeric">1,702,800</td>
					<td className="au-table__cell au-table__cell--numeric">2.0%</td>
					<td className="au-table__cell au-table__cell--numeric">6.8%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Tasmania</td>
					<td className="au-table__cell au-table__cell--numeric">517,400</td>
					<td className="au-table__cell au-table__cell--numeric">4%</td>
					<td className="au-table__cell au-table__cell--numeric">5.3%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Northern Territory</td>
					<td className="au-table__cell au-table__cell--numeric">244,000</td>
					<td className="au-table__cell au-table__cell--numeric">1.2%</td>
					<td className="au-table__cell au-table__cell--numeric">4.5%</td>
				</tr>
				<tr className="au-table__row">
					<td className="au-table__cell">Australian Capital Territory</td>
					<td className="au-table__cell au-table__cell--numeric">393,000</td>
					<td className="au-table__cell au-table__cell--numeric">2.4%</td>
					<td className="au-table__cell au-table__cell--numeric">9.6%</td>
				</tr>
				</tbody>
			</table>


			<br/><br/><br/>

			<h2> Table with first row header</h2>

			<table className="au-table au-table--striped">
				<caption className="au-table__caption">Population of Australian states and territories, December 2015</caption>
				<thead className="au-table__head">
				<tr className="au-table__row">
					<th scope="col" className="au-table__header">Location</th>
					<th scope="col" className="au-table__header au-table__header--numeric">Population</th>
				</tr>
				</thead>
				<tbody className="au-table__body">
				<tr className="au-table__row">
					<th className="au-table__header" scope="row">New South Wales</th>
					<td className="au-table__cell au-table__cell--numeric">7,670,700</td>
				</tr>
				<tr className="au-table__row">
					<th className="au-table__header" scope="row">Victoria</th>
					<td className="au-table__cell au-table__cell--numeric">5,996,400</td>
				</tr>
				<tr className="au-table__row">
					<th className="au-table__header" scope="row">Tasmania</th>
					<td className="au-table__cell au-table__cell--numeric">517,400</td>
				</tr>
				</tbody>
			</table>
		</div>
	</>
);

export default withLayout(Table);
