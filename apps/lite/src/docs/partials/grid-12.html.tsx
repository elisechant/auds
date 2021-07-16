import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Grid12 = () => (
	<>
		<h1>Test: grid-12</h1>

		<main className="au-grid no-a11y-test">
			<div className="container">
				<div className="row">
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
					<div className="grids col-sm-1"><span>1</span></div>
				</div>

				<div className="row">
					<div className="grids col-sm-2"><span>2</span></div>
					<div className="grids col-sm-2"><span>2</span></div>
					<div className="grids col-sm-2"><span>2</span></div>
					<div className="grids col-sm-2"><span>2</span></div>
					<div className="grids col-sm-2"><span>2</span></div>
					<div className="grids col-sm-2"><span>2</span></div>
				</div>

				<div className="row">
					<div className="grids col-sm-3"><span>3</span></div>
					<div className="grids col-sm-3"><span>3</span></div>
					<div className="grids col-sm-3"><span>3</span></div>
					<div className="grids col-sm-3"><span>3</span></div>
				</div>

				<div className="row">
					<div className="grids col-sm-4"><span>4</span></div>
					<div className="grids col-sm-4"><span>4</span></div>
					<div className="grids col-sm-4"><span>4</span></div>
				</div>

				<div className="row">
					<div className="grids col-sm-6"><span>6</span></div>
					<div className="grids col-sm-6"><span>6</span></div>
				</div>

				<div className="row">
					<div className="grids col-sm-12"><span>1</span></div>
				</div>

				<div className="row">
					<div className="grids col-xs-6"><span>6</span> xs</div>
					<div className="grids col-xs-offset-3 col-xs-3"><span>3</span> xs offset (3)</div>
				</div>

				<div className="row">
					<div className="grids col-sm-6"><span>6</span> sm</div>
				</div>

				<div className="row">
					<div className="grids col-md-6"><span>6</span> md</div>
				</div>

				<div className="row">
					<div className="grids col-lg-6"><span>6</span> lg</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="row">
					<div className="grids col-sm-4"><span>4</span></div>
					<div className="grids col-sm-4"><span>4</span></div>
					<div className="grids col-sm-4"><span>4</span></div>
				</div>
			</div>
		</main>
	</>
);

export default withLayout(Grid12);
