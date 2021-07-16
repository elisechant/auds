import React from 'react';
import {withLayout} from '../helpers/withLayout';

const DirectionLinks = () => (
	<>
		<h1>Test: direction-links</h1>

		<div className="split-wrapper">
			<div className="split">

				<h2>bare</h2>
				<a className="au-direction-link" href="#">Continue<span className="au-direction-link__arrow"
				                                                        aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--right</code> variant</h2>

				<a className="au-direction-link" href="#">Next<span className="au-direction-link__arrow"
				                                                    aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--left</code> variant</h2>

				<a className="au-direction-link" href="#"><span
					className="au-direction-link__arrow au-direction-link__arrow--left"
					aria-hidden="true"></span>Back</a>

				<hr/>
				<h2><code>--up</code> variant</h2>

				<a className="au-direction-link" href="#">Top<span
					className="au-direction-link__arrow au-direction-link__arrow--up"
					aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--down</code> variant</h2>

				<a className="au-direction-link" href="#">Skip to footer<span
					className="au-direction-link__arrow au-direction-link__arrow--down" aria-hidden="true"></span></a>

				<hr/>
				<h2>direction-links as button</h2>

				<button className="au-direction-link">Next<span className="au-direction-link__arrow" aria-hidden="true"></span>
				</button>
				<button className="au-direction-link">Back<span
					className=" au-direction-link__arrow au-direction-link__arrow--left"
					aria-hidden="true"></span></button>
				<button className="au-direction-link">Top<span className="au-direction-link__arrow au-direction-link__arrow--up"
				                                               aria-hidden="true"></span></button>
				<button className="au-direction-link">Skip to footer<span
					className="au-direction-link__arrow au-direction-link__arrow--down" aria-hidden="true"></span></button>
			</div>

			<div className="split split--dark">

				<h2>bare <code>--dark</code></h2>
				<a className="au-direction-link au-direction-link--dark" href="#">Continue<span
					className="au-direction-link__arrow"
					aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--right</code> <code>--dark</code> variant</h2>

				<a className="au-direction-link au-direction-link--dark" href="#">Next<span className="au-direction-link__arrow"
				                                                                            aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--left</code> <code>--dark</code> variant</h2>

				<a className="au-direction-link au-direction-link--dark" href="#"><span
					className="au-direction-link__arrow au-direction-link__arrow--left" aria-hidden="true"></span>Back</a>

				<hr/>
				<h2><code>--up</code> <code>--dark</code> variant</h2>

				<a className=" au-direction-link au-direction-link--dark" href="#">Top<span
					className="au-direction-link__arrow au-direction-link__arrow--up" aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--down</code> <code>--dark</code> variant</h2>

				<a className="au-direction-link au-direction-link--dark" href="#">Skip to footer<span
					className="au-direction-link__arrow au-direction-link__arrow--down" aria-hidden="true"></span></a>

				<hr/>
				<h2>direction-links as button <code>--dark</code></h2>

				<button className="au-direction-link au-direction-link--dark">Next<span className="au-direction-link__arrow"
				                                                                        aria-hidden="true"></span></button>
				<button className="au-direction-link au-direction-link--dark"><span
					className="au-direction-link__arrow au-direction-link__arrow--left" aria-hidden="true"></span>Back
				</button>
				<button className="au-direction-link au-direction-link--dark">Top<span
					className="au-direction-link__arrow au-direction-link__arrow--up" aria-hidden="true"></span></button>
				<button className="au-direction-link au-direction-link--dark">Skip to footer<span
					className="au-direction-link__arrow au-direction-link__arrow--down" aria-hidden="true"></span></button>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">

				<h2>bare</h2>
				<a className="au-direction-link" href="#">Continue<span className="au-direction-link__arrow"
				                                                        aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--right</code> variant</h2>

				<a className="au-direction-link" href="#">Next<span className="au-direction-link__arrow"
				                                                    aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--left</code> variant</h2>

				<a className="au-direction-link" href="#"><span
					className="au-direction-link__arrow au-direction-link__arrow--left"
					aria-hidden="true"></span>Back</a>

				<hr/>
				<h2><code>--up</code> variant</h2>

				<a className="au-direction-link" href="#">Top<span className="au-direction-link__arrow au-direction-link--up"
				                                                   aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--down</code> variant</h2>

				<a className="au-direction-link" href="#">Skip to footer<span
					className="au-direction-link__arrow au-direction-link--down"
					aria-hidden="true"></span></a>

				<hr/>
				<h2>direction-links as button</h2>

				<button className="au-direction-link">Next<span className="au-direction-link__arrow au-direction-link__arrow"
				                                                aria-hidden="true"></span></button>
				<button className="au-direction-link"><span className="au-direction-link__arrow au-direction-link__arrow--left"
				                                            aria-hidden="true"></span>Back
				</button>
				<button className="au-direction-link">Top<span className="au-direction-link__arrow au-direction-link__arrow--up"
				                                               aria-hidden="true"></span></button>
				<button className="au-direction-link">Skip to footer<span
					className="au-direction-link__arrow au-direction-link__arrow--down" aria-hidden="true"></span></button>
			</div>

			<div className="split au-body split--alt split--dark">

				<h2>bare <code>--dark</code></h2>
				<a className="au-direction-link au-direction-link--dark" href="#">Continue<span
					className="au-direction-link__arrow"
					aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--right</code> <code>--dark</code> variant</h2>

				<a className="au-direction-link au-direction-link--dark" href="#">Next<span className="au-direction-link__arrow"
				                                                                            aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--left</code> <code>--dark</code> variant</h2>

				<a className="au-direction-link au-direction-link--dark" href="#"><span
					className="au-direction-link__arrow au-direction-link__arrow--left" aria-hidden="true"></span>Back</a>

				<hr/>
				<h2><code>--up</code> <code>--dark</code> variant</h2>

				<a className="au-direction-link au-direction-link--dark" href="#">Top<span
					className="au-direction-link__arrow au-direction-link__arrow--up" aria-hidden="true"></span></a>

				<hr/>
				<h2><code>--down</code> <code>--dark</code> variant</h2>

				<a className="au-direction-link au-direction-link--dark" href="#">Skip to footer<span
					className="au-direction-link__arrow au-direction-link__arrow--down" aria-hidden="true"></span></a>

				<hr/>
				<h2>direction-links as button <code>--dark</code></h2>

				<button className="au-direction-link au-direction-link--dark">Next<span className="au-direction-link__arrow"
				                                                                        aria-hidden="true"></span></button>
				<button className="au-direction-link au-direction-link--dark"><span
					className="au-direction-link__arrow au-direction-link__arrow--left" aria-hidden="true"></span>Back
				</button>
				<button className="au-direction-link au-direction-link--dark">Top<span
					className="au-direction-link__arrow au-direction-link__arrow--up" aria-hidden="true"></span></button>
				<button className="au-direction-link au-direction-link--dark">Skip to footer<span
					className="au-direction-link__arrow au-direction-link__arrow--down" aria-hidden="true"></span></button>
			</div>
		</div>
	</>
);

export default withLayout(DirectionLinks);
