import React from 'react';
import {withLayout} from '../helpers/withLayout';

const ResponsiveMedia = () => (
	<>
		<h1>Test: responsive-media</h1>

		<h2>responsive images</h2>

		<img className="au-responsive-media-img" src="http://placehold.it/1200x100" alt="Placeholder image"/>

		<hr/>
		<h2>responsive videos 16:9</h2>

		<div className="au-responsive-media-vid au-responsive-media-vid--16x9">
			<iframe title="A demo of a 16:9 aspect ratio video" className="au-responsive-media-vid__item"
			        src="https://www.youtube.com/embed/WUgvvPRH7Oc"/>
		</div>

		<hr/>
		<h2>responsive videos 4:3</h2>

		<div className="au-responsive-media-vid au-responsive-media-vid--4x3">
			<iframe title="A demo of a 4:3 aspect ratio video" className="au-responsive-media-vid__item"
			        src="https://www.youtube.com/embed/mM5_T-F1Yn4"/>
		</div>

		<div className="au-responsive-media-vid au-responsive-media-vid--4x3">
			<iframe title="Man playing accordion in Prague" className="au-responsive-media-vid__item"
			        src="https://www.youtube.com/embed/w3lsDQD9_98"/>
		</div>


		<h2>responsive media wrapper</h2>
		<div className="au-responsive-media">
			<img src="http://placehold.it/1200x100" alt="Placeholder image"/>
		</div>
	</>
);

export default withLayout(ResponsiveMedia);
