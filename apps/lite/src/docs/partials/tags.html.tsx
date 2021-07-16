import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Tags = () => (
	<>
		<h1>Test: tags</h1>

		<div className="split-wrapper">
			<div className="split">

				<h2>Single Tag</h2>

				<h3>Tags:</h3>
				<a className="au-tag" href="#">Tags</a>
				<a href="#" className="au-tag">That</a>
				<a href="#" className="au-tag">Are</a>
				<a href="#" className="au-tag">Anchors</a><br/><br/>
				<span className="au-tag">Span</span><br/><br/>
				<button className="au-tag">Button</button>
				<button className="au-tag">Tag</button>

				<div className="au-body">

					<h2>Tags list using <code>ul</code> and a heading with body</h2>

					<h3>Tags:</h3>
					<ul className="au-tag-list">
						<li>
							<a className="au-tag" href="#">foo</a>
						</li>
						<li>
							<a className="au-tag" href="#">bar</a>
						</li>
						<li>
							<a className="au-tag" href="#">baz</a>
						</li>
						<li>
							<a className="au-tag" href="#">bloop</a>
						</li>
						<li>
							<a className="au-tag" href="#">blip</a>
						</li>
						<li>
							<a className="au-tag" href="#">blip</a>
						</li>
						<li>
							<a className="au-tag" href="#">wallop</a>
						</li>
						<li>
							<a className="au-tag" href="#">doodle</a>
						</li>
						<li>
							<a className="au-tag" href="#">pear ice cream</a>
						</li>
					</ul>

					<h3>Tags without links:</h3>
					<ul className="au-tag-list">
						<li>
							<span className="au-tag">foo</span>
						</li>
						<li>
							<span className="au-tag">bar</span>
						</li>
						<li>
							<span className="au-tag">baz</span>
						</li>
						<li>
							<span className="au-tag">bloop</span>
						</li>
						<li>
							<span className="au-tag">blip</span>
						</li>
						<li>
							<span className="au-tag">blip</span>
						</li>
						<li>
							<span className="au-tag">wallop</span>
						</li>
						<li>
							<a className="au-tag" href="#">doodle</a>
						</li>
						<li>
							<span className="au-tag">pear ice cream</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="split split--dark">

				<h2>Single tags</h2>

				<h3>Tags:</h3>

				<a className="au-tag au-tag--dark" href="#">Tags</a>
				<a href="#" className="au-tag au-tag--dark">That</a>
				<a href="#" className="au-tag au-tag--dark">Are</a>
				<a href="#" className="au-tag au-tag--dark">Anchors</a><br/><br/>
				<span className="au-tag au-tag--dark">Span</span><br/><br/>


				<ul className="au-tag-list">
					<li>
						<a className="au-tag au-tag--dark" href="#">foo</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">bar</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">baz</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">bloop</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">blip</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">wallop</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">doodle</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">pear ice cream</a>
					</li>
				</ul>

				<h3>Tags without links:</h3>
				<ul className="au-tag-list">
					<li>
						<span className="au-tag au-tag--dark">foo</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">bar</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">baz</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">bloop</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">blip</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">wallop</span>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">doodle</a>
					</li>
					<li>
						<span className="au-tag au-tag--dark">pear ice cream</span>
					</li>
				</ul>

				<div className="au-body au-body--dark">

					<h2>Single tag</h2>

					<h3>Tags:</h3>
					<ul className="au-tag-list">
						<li>
							<a className="au-tag au-tag--dark" href="#">foo</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">bar</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">baz</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">bloop</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">blip</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">blip</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">wallop</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">doodle</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">pear ice cream</a>
						</li>
					</ul>

					<h3>Tags without links:</h3>
					<ul className="au-tag-list">
						<li>
							<span className="au-tag au-tag--dark">foo</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">bar</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">baz</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">bloop</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">blip</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">blip</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">wallop</span>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">doodle</a>
						</li>
						<li>
							<span className="au-tag au-tag--dark">pear ice cream</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">

				<h2>Tags list using <code>ul</code> and a heading</h2>

				<h3>Tags:</h3>
				<ul className="au-tag-list">
					<li>
						<a className="au-tag" href="#">foo</a>
					</li>
					<li>
						<a className="au-tag" href="#">bar</a>
					</li>
					<li>
						<a className="au-tag" href="#">baz</a>
					</li>
					<li>
						<a className="au-tag" href="#">bloop</a>
					</li>
					<li>
						<a className="au-tag" href="#">blip</a>
					</li>
					<li>
						<a className="au-tag" href="#">wallop</a>
					</li>
					<li>
						<a className="au-tag" href="#">doodle</a>
					</li>
					<li>
						<a className="au-tag" href="#">pear ice cream</a>
					</li>
				</ul>

				<h3>Tags without links:</h3>
				<ul className="au-tag-list">
					<li>
						<span className="au-tag">foo</span>
					</li>
					<li>
						<span className="au-tag">bar</span>
					</li>
					<li>
						<span className="au-tag">baz</span>
					</li>
					<li>
						<span className="au-tag">bloop</span>
					</li>
					<li>
						<span className="au-tag">blip</span>
					</li>
					<li>
						<span className="au-tag">wallop</span>
					</li>
					<li>
						<a className="au-tag" href="#">doodle</a>
					</li>
					<li>
						<span className="au-tag">pear ice cream</span>
					</li>
				</ul>

				<div className="au-body au-body--alt">

					<h2>Tags list using <code>ul</code> and a heading with body</h2>

					<h3>Tags:</h3>
					<ul className="au-tag-list">
						<li>
							<a className="au-tag" href="#">foo</a>
						</li>
						<li>
							<a className="au-tag" href="#">bar</a>
						</li>
						<li>
							<a className="au-tag" href="#">baz</a>
						</li>
						<li>
							<a className="au-tag" href="#">bloop</a>
						</li>
						<li>
							<a className="au-tag" href="#">blip</a>
						</li>
						<li>
							<a className="au-tag" href="#">blip</a>
						</li>
						<li>
							<a className="au-tag" href="#">wallop</a>
						</li>
						<li>
							<a className="au-tag" href="#">doodle</a>
						</li>
						<li>
							<a className="au-tag" href="#">pear ice cream</a>
						</li>
					</ul>

					<h3>Tags without links:</h3>
					<ul className="au-tag-list">
						<li>
							<span className="au-tag">foo</span>
						</li>
						<li>
							<span className="au-tag">bar</span>
						</li>
						<li>
							<span className="au-tag">baz</span>
						</li>
						<li>
							<span className="au-tag">bloop</span>
						</li>
						<li>
							<span className="au-tag">blip</span>
						</li>
						<li>
							<span className="au-tag">blip</span>
						</li>
						<li>
							<span className="au-tag">wallop</span>
						</li>
						<li>
							<a className="au-tag" href="#">doodle</a>
						</li>
						<li className="au-tag">
							pear ice cream
						</li>
					</ul>
				</div>
			</div>

			<div className="split split--alt split--dark">

				<h2>Tags list using <code>ul</code> and a heading</h2>

				<h3>Tags:</h3>
				<ul className="au-tag-list">
					<li>
						<a className="au-tag au-tag--dark" href="#">foo</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">bar</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">baz</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">bloop</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">blip</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">wallop</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">doodle</a>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">pear ice cream</a>
					</li>
				</ul>

				<h3>Tags without links:</h3>
				<ul className="au-tag-list">
					<li>
						<span className="au-tag au-tag--dark">foo</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">bar</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">baz</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">bloop</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">blip</span>
					</li>
					<li>
						<span className="au-tag au-tag--dark">wallop</span>
					</li>
					<li>
						<a className="au-tag au-tag--dark" href="#">doodle</a>
					</li>
					<li>
						<span className="au-tag au-tag--dark">pear ice cream</span>
					</li>
				</ul>

				<div className="au-body au-body--alt au-body--dark">

					<h2>Tags list using <code>ul</code> and a heading with body</h2>

					<h3>Tags:</h3>
					<ul className="au-tag-list">
						<li>
							<a className="au-tag au-tag--dark" href="#">foo</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">bar</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">baz</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">bloop</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">blip</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">blip</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">wallop</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">doodle</a>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">pear ice cream</a>
						</li>
					</ul>

					<h3>Tags without links:</h3>
					<ul className="au-tag-list">
						<li>
							<span className="au-tag au-tag--dark">foo</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">bar</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">baz</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">bloop</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">blip</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">blip</span>
						</li>
						<li>
							<span className="au-tag au-tag--dark">wallop</span>
						</li>
						<li>
							<a className="au-tag au-tag--dark" href="#">doodle</a>
						</li>
						<li>
							<span className="au-tag au-tag--dark">pear ice cream</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</>
);

export default withLayout(Tags);
