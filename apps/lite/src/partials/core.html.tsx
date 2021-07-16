import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Core = () => (
	<>
		<h1>Test: core</h1>

		<h2>breakpoints</h2>

		<p className="xs-only">XS</p>
		<p className="sm-only">SM</p>
		<p className="md-only">MD</p>
		<p className="lg-only">LG</p>
		<p className="xl-only">XL</p>

		<hr/>
		<h2>font families</h2>

		<p>
			<strong>au font:</strong>
			<span className="font">The quick brown fox jumps over the lazy dog</span>
		</p>
		<p>
			<strong>monospace:</strong>
			<span className="monospace">The quick brown fox jumps over the lazy dog</span>
		</p>

		<hr/>
		<h2>max width</h2>

		<p className="max-width">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium at voluptas voluptate, minus
			accusamus doloremque repellat molestias id,
			iusto cum adipisci distinctio tempore blanditiis dolor hic vero omnis laboriosam! Lorem ipsum dolor sit amet,
			consectetur adipisicing elit. Dicta
			distinctio fuga adipisci aliquid ut rerum mollitia commodi eligendi, asperiores nostrum unde blanditiis eveniet
			impedit labore, temporibus exercitationem,
			provident ab fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur est vitae repudiandae sequi
			illum, odio officiis? Quo nesciunt
			ipsam recusandae odit, dolores fuga incidunt repudiandae reprehenderit, amet numquam necessitatibus doloremque.
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate commodi, labore sapiente natus iste facilis
			eaque harum fuga recusandae dolores
			laborum iusto perspiciatis, numquam dignissimos blanditiis alias impedit ipsa. Unde?
		</p>

		<hr/>
		<h2>border radius</h2>

		<ul className="border-radius-wrapper">
			<li className="border-radius"></li>
			<li className="border-radius"></li>
			<li className="border-radius"></li>
		</ul>

		<hr/>
		<h2>mixin: AU-media</h2>

		<div className="au-media"></div>


		<hr/>
		<h2>mixin: AU-sronly</h2>

		<p className="sr-only">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt, enim sint. Quibusdam consequatur, quo
			recusandae quidem amet. Est tempora recusandae
			cupiditate esse sunt dolore iusto officiis sed ea unde.
		</p>


		<hr/>
		<h2>mixin: AU-outline</h2>

		<p className="au-outline">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt, enim sint. Quibusdam consequatur, quo
			recusandae quidem amet. Est tempora recusandae
			cupiditate esse sunt dolore iusto officiis sed ea unde.
		</p>

		<p className="au-outline dark">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt, enim sint. Quibusdam consequatur, quo
			recusandae quidem amet. Est tempora recusandae
			cupiditate esse sunt dolore iusto officiis sed ea unde.
		</p>

		<hr/>
		<h2>mixin: AU-focus</h2>

		<p className="au-focus" tabIndex={0}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt, enim sint. Quibusdam consequatur, quo
			recusandae quidem amet. Est tempora recusandae
			cupiditate esse sunt dolore iusto officiis sed ea unde.
		</p>

		<p className="au-focus dark" tabIndex={0}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt, enim sint. Quibusdam consequatur, quo
			recusandae quidem amet. Est tempora recusandae
			cupiditate esse sunt dolore iusto officiis sed ea unde.
		</p>

		<hr/>
		<h2>mixin: AU-fontgrid</h2>

		<div>
			<div className="au-fontgrid au-fontgrid-0">AU-fontgrid( xxxl )</div>
			<div className="au-fontgrid au-fontgrid-1">AU-fontgrid( xxl )</div>
			<div className="au-fontgrid au-fontgrid-2">AU-fontgrid( xl )</div>
			<div className="au-fontgrid au-fontgrid-3">AU-fontgrid( lg )</div>
			<div className="au-fontgrid au-fontgrid-4">AU-fontgrid( md )</div>
			<div className="au-fontgrid au-fontgrid-5">AU-fontgrid( sm )</div>
			<div className="au-fontgrid au-fontgrid-6">AU-fontgrid( xs )</div>
		</div>

		<br/><br/>

		<div className="lineheight-heading">
			<div className="au-fontgrid au-fontgrid-0">AU-fontgrid( xxxl, heading )</div>
			<div className="au-fontgrid au-fontgrid-1">AU-fontgrid( xxl, heading )</div>
			<div className="au-fontgrid au-fontgrid-2">AU-fontgrid( xl, heading )</div>
			<div className="au-fontgrid au-fontgrid-3">AU-fontgrid( lg, heading )</div>
			<div className="au-fontgrid au-fontgrid-4">AU-fontgrid( md, heading )</div>
			<div className="au-fontgrid au-fontgrid-5">AU-fontgrid( sm, heading )</div>
			<div className="au-fontgrid au-fontgrid-6">AU-fontgrid( xs, heading )</div>
		</div>

		<br/><br/>

		<div className="lineheight-nospace">
			<div className="au-fontgrid au-fontgrid-0">AU-fontgrid( xxxl, nospace )</div>
			<div className="au-fontgrid au-fontgrid-1">AU-fontgrid( xxl, nospace )</div>
			<div className="au-fontgrid au-fontgrid-2">AU-fontgrid( xl, nospace )</div>
			<div className="au-fontgrid au-fontgrid-3">AU-fontgrid( lg, nospace )</div>
			<div className="au-fontgrid au-fontgrid-4">AU-fontgrid( md, nospace )</div>
			<div className="au-fontgrid au-fontgrid-5">AU-fontgrid( sm, nospace )</div>
			<div className="au-fontgrid au-fontgrid-6">AU-fontgrid( xs, nospace )</div>
		</div>


		<hr/>
		<h2>mixin: AU-space</h2>

		<div className="au-space au-space--025">AU-space( 0.25unit )</div>
		<div className="au-space au-space--05">AU-space( 0.5unit )</div>
		<div className="au-space au-space--075">AU-space( 0.75unit )</div>
		<div className="au-space au-space--1">AU-space( 1unit )</div>
		<div className="au-space au-space--15">AU-space( 1.5unit )</div>
		<div className="au-space au-space--2">AU-space( 2unit )</div>


		<hr/>
		<h2>mixin: AU-space without pixel fallback</h2>

		<div className="au-space au-space--nopixel">AU-space( 0.25unit )</div>


		<hr/>
		<h2>function: AU-replace</h2>

		<code className="au-replace">au-replace('We love spaces for indentation', 'spaces', 'tabs'): </code>

		<hr/>
		<h2>function: AU-svguri</h2>

		<div className="au-svguri"></div>

		<hr/>
		<h2>function: AU-factorial</h2>

		<code className="au-factorial1">1! = 1:</code><br/>
		<code className="au-factorial2">2! = 2:</code><br/>
		<code className="au-factorial3">3! = 6:</code><br/>
		<code className="au-factorial4">4! = 24:</code><br/>
		<code className="au-factorial5">5! = 120:</code><br/>
		<code className="au-factorial6">6! = 720:</code>

		<hr/>
		<h2>function: AU-pow</h2>

		<code className="au-pow1">5<sup>3</sup> = 125:</code><br/>
		<code className="au-pow2">4<sup>2</sup> = 16:</code><br/>
		<code className="au-pow4">4<sup>0.2</sup> = 1.31950791:</code>

		<hr/>
		<h2>function: AU-color-luminance</h2>

		<code className="au-color-luminance1">Luminance of #000000 = 0:</code><br/>
		<code className="au-color-luminance2">Luminance of #663399 = 0.07492341:</code><br/>
		<code className="au-color-luminance3">Luminance of #ff69b4 = 0.34658438:</code><br/>
		<code className="au-color-luminance4">Luminance of #ffffff = 1:</code>

		<hr/>
		<h2>function: AU-color-contrast</h2>

		<code className="au-color-contrast1">#fff on #000 = 21:</code><br/>
		<code className="au-color-contrast2">#fff on #f00 = 4.0:</code><br/>
		<code className="au-color-contrast3">#000 on #f00 = 5.3:</code><br/>
		<code className="au-color-contrast4">#000 on #ff0 = 19.6:</code><br/>
		<code className="au-color-contrast5">#fff on #ff0 = 1.1:</code>

		<hr/>
		<h2>function: AU-color-a11y</h2>

		<code className="au-color-a11y1">red on blue = #ffa3a3:</code><br/>
		<code className="au-color-a11y2">green on blue = #00da00:</code><br/>
		<code className="au-color-a11y3">pink on blue = pink:</code><br/>
		<code className="au-color-a11y4">blue on blue = #b5b5ff:</code><br/>
		<code className="au-color-a11y5">#c0c0c0 on #c0c0c0 = #4f4f4f:</code><br/>
		<code className="au-color-a11y6">#231284 on #cccccc = #231284:</code><br/>
		<code className="au-color-a11y7">#ffffff on #ffffff = #767676:</code><br/>
		<code className="au-color-a11y8">#c1c1c1 on #767676 = #fefefe:</code>

		<hr/>
		<h2>colours main palette</h2>

		<div className="palette palette--9">
			<div className="palette__color palette__color--action"></div>
			<div className="palette__color palette__color--focus"></div>
			<div className="palette__color palette__color--text"></div>
			<div className="palette__color palette__color--muted"></div>
			<div className="palette__color palette__color--border"></div>
			<div className="palette__color palette__color--background-light"></div>
			<div className="palette__color palette__color--background"></div>
			<div className="palette__color palette__color--background-dark"></div>
			<div className="palette__color palette__color--background-darkest"></div>
		</div>

		<hr/>
		<h2>colour contrast main palette</h2>

		<table className="contrast no-a11y-test">
			<caption>
				The contrast of the main colors
			</caption>
			<thead>
			<tr>
				<th scope="col">Background</th>
				<th scope="col">Action</th>
				<th scope="col">Focus</th>
				<th scope="col">Text</th>
				<th scope="col">Muted</th>
				<th scope="col">Border</th>
			</tr>
			</thead>
			<tbody>
			<tr className="contrast-background">
				<th scope="row">Background</th>
				<td>
					<div className="contrast-box contrast-box--action">Action</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--focus">Focus</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--text">Text</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--muted">Muted</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--border">Border</div>
				</td>
			</tr>
			<tr className="contrast-background-shade">
				<th scope="row">Background shade</th>
				<td>
					<div className="contrast-box contrast-box--action">Action</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--focus">Focus</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--text">Text</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--muted">Muted</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--border">Border</div>
				</td>
			</tr>
			<tr className="contrast-background-alt">
				<th scope="row">Background alt</th>
				<td>
					<div className="contrast-box contrast-box--action">Action</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--focus">Focus</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--text">Text</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--muted">Muted</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--border">Border</div>
				</td>
			</tr>
			<tr className="contrast-background-alt-shade">
				<th scope="row">Background alt shade</th>
				<td>
					<div className="contrast-box contrast-box--action">Action</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--focus">Focus</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--text">Text</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--muted">Muted</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--border">Border</div>
				</td>
			</tr>
			</tbody>
		</table>

		<hr/>
		<h2>colours dark palette</h2>

		<div className="palette palette--dark palette--9">
			<div className="palette__color palette__color--action palette__color--dark"></div>
			<div className="palette__color palette__color--focus palette__color--dark"></div>
			<div className="palette__color palette__color--text palette__color--dark"></div>
			<div className="palette__color palette__color--muted palette__color--dark"></div>
			<div className="palette__color palette__color--border palette__color--dark"></div>
			<div className="palette__color palette__color--background-light palette__color--dark"></div>
			<div className="palette__color palette__color--background palette__color--dark"></div>
			<div className="palette__color palette__color--background-dark palette__color--dark"></div>
			<div className="palette__color palette__color--background-darkest palette__color--dark"></div>
		</div>

		<hr/>
		<h2>colour contrast dark palette</h2>
		<table className="contrast contrast--dark no-a11y-test">
			<caption>
				The contrast of the dark colors
			</caption>
			<thead>
			<tr>
				<th scope="col">Background</th>
				<th scope="col">Action</th>
				<th scope="col">Focus</th>
				<th scope="col">Text</th>
				<th scope="col">Muted</th>
				<th scope="col">Border</th>
			</tr>
			</thead>
			<tbody>
			<tr className="contrast-background">
				<th scope="row">Background</th>
				<td>
					<div className="contrast-box contrast-box--action">Action</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--focus">Focus</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--text">Text</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--muted">Muted</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--border ">Border</div>
				</td>
			</tr>
			<tr className="contrast-background-shade">
				<th scope="row">Background shade</th>
				<td>
					<div className="contrast-box contrast-box--action">Action</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--focus">Focus</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--text">Text</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--muted">Muted</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--border">Border</div>
				</td>
			</tr>
			<tr className="contrast-background-alt">
				<th scope="row">Background alt</th>
				<td>
					<div className="contrast-box contrast-box--action">Action</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--focus">Focus</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--text">Text</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--muted">Muted</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--border">Border</div>
				</td>
			</tr>
			<tr className="contrast-background-alt-shade">
				<th scope="row">Background alt shade</th>
				<td>
					<div className="contrast-box contrast-box--action">Action</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--focus">Focus</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--text">Text</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--muted">Muted</div>
				</td>
				<td>
					<div className="contrast-box contrast-box--border">Border</div>
				</td>
			</tr>
			</tbody>
		</table>

		<hr/>
		<h2>colours notification palette</h2>

		<div className="palette palette--4">
			<div className="palette__color palette__color--error"></div>
			<div className="palette__color palette__color--success"></div>
			<div className="palette__color palette__color--warning"></div>
			<div className="palette__color palette__color--info"></div>
		</div>
	</>
);

export default withLayout(Core);
