import React from 'react';
import {withLayout} from '../helpers/withLayout';

const Headings = () => (
	<>
		<h1>Test: headings</h1>

		<div className="split-wrapper">
			<div className="split">
				<div className="row">
					<div className="col-sm-6">

						<h2>headings on h1-h6</h2>

						<div>
							<h4 className="au-display-xxxl">Display xxxl</h4>
							<h6 className="au-display-xxl">Display xxl</h6>
							<h4 className="au-display-xl">Display xl</h4>
							<h5 className="au-display-lg">Display lg</h5>
							<h2 className="au-display-md">Display md</h2>
							<h3 className="au-display-sm">Display sm</h3>
							<h1 className="au-display-xs">Display xs</h1>
						</div>
					</div>

					<div className="col-sm-6">
						<h2>headings on span</h2>

						<div>
							<span className="au-display-xxxl">Display xxxl</span>
							<span className="au-display-xxl">Display xxl</span>
							<span className="au-display-xl">Display xl</span>
							<span className="au-display-lg">Display lg</span>
							<span className="au-display-md">Display md</span>
							<span className="au-display-sm">Display sm</span>
							<span className="au-display-xs">Display xs</span>
						</div>
					</div>
				</div>

				<hr/>
				<h2>headings with text</h2>

				<p>The following heading receive the <code>.au-display-[xs&hellip;xxxl]</code> classNamees.</p>

				<span className="au-display-xxxl">Promo text (xxxl)</span>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quam odit explicabo hic autem unde
					exercitationem
					ipsam illum deserunt, magni ea, aperiam itaque quo nesciunt. Quod fugit quibusdam, alias nemo.</p>

				<h1 className="au-display-xxl">Heading tier one (xxl)</h1>

				<p>The quick brown fox jumped over the lazy dog</p>

				<h2 className="au-display-lg">Heading tier two (lg)</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam viverra, lobortis lacus ac, dictum
					ligula.</p>
				<p>Curabitur eu porta nisl.</p>

				<h3 className="au-display-md">Straight into a heading tier three (md)</h3>

				<p>Curabitur aliquam id metus nec porttitor. Nunc lacus sapien, rutrum nec convallis pharetra, condimentum vitae
					turpis.</p>

				<h4 className="au-display-sm">Heading tier four (sm)</h4>

				<p>Sed eros tortor, ornare eu tortor vel, pulvinar commodo dolor. Phasellus bibendum lacus quis quam feugiat
					lacinia. Sed tellus eros, pellentesque vel posuere tempor, pretium non metus.</p>

				<h5 className="au-display-xs">Heading tier five (xs)</h5>

				<p>Ut erat nisl, convallis sit amet turpis vel, tincidunt dictum dolor. Praesent lacinia nulla nisi, eu suscipit
					ante ornare sit amet. Sed posuere urna non nibh accumsan dignissim.</p>
				<p>Pellentesque facilisis magna lectus, in tincidunt dolor sollicitudin finibus.</p>

				<h6 className="au-display-xs">Heading tier six (xs)</h6>

				<p>The goby fish and pistol shrimp are closest of friends.</p>

				<hr/>

				<h2>headings on paragraph, span</h2>

				<p>Similarly, we can apply the classNamees to other elements as visually necessary:</p>

				<p className="au-display-md">This is a paragraph using <code>.au-display-md</code>.</p>

				<span className="au-display-lg">This is a span tag using <code>.au-display-lg</code>.</span>

				<span className="au-display-md">This is a span tag using <code>.au-display-md</code>.</span>

				<p>And back to a regular paragraph.</p>
			</div>


			<div className="split split--dark">
				<div className="row">
					<div className="col-sm-6">

						<h2>headings on h1-h6</h2>

						<div>
							<h4 className="au-display-xxxl">Display xxxl</h4>
							<h6 className="au-display-xxl">Display xxl</h6>
							<h4 className="au-display-xl">Display xl</h4>
							<h5 className="au-display-lg">Display lg</h5>
							<h2 className="au-display-md">Display md</h2>
							<h3 className="au-display-sm">Display sm</h3>
							<h1 className="au-display-xs">Display xs</h1>
						</div>
					</div>

					<div className="col-sm-6">
						<h2>headings on span</h2>

						<div>
							<span className="au-display-xxxl">Display xxxl</span>
							<span className="au-display-xxl">Display xxl</span>
							<span className="au-display-xl">Display xl</span>
							<span className="au-display-lg">Display lg</span>
							<span className="au-display-md">Display md</span>
							<span className="au-display-sm">Display sm</span>
							<span className="au-display-xs">Display xs</span>
						</div>
					</div>
				</div>

				<hr/>

				<h2>headings with text</h2>

				<p>The following heading receive the <code>.au-display-[xs&hellip;xxxl]</code> classNamees.</p>

				<span className="au-display-xxxl">Promo text (xxxl)</span>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quam odit explicabo hic autem unde
					exercitationem
					ipsam illum deserunt, magni ea, aperiam itaque quo nesciunt. Quod fugit quibusdam, alias nemo.</p>

				<h1 className="au-display-xxl">Heading tier one (xxl)</h1>

				<p>The quick brown fox jumped over the lazy dog</p>

				<h2 className="au-display-lg">Heading tier two (lg)</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam viverra, lobortis lacus ac, dictum
					ligula.</p>
				<p>Curabitur eu porta nisl.</p>

				<h3 className="au-display-md">Straight into a heading tier three (md)</h3>

				<p>Curabitur aliquam id metus nec porttitor. Nunc lacus sapien, rutrum nec convallis pharetra, condimentum vitae
					turpis.</p>

				<h4 className="au-display-sm">Heading tier four (sm)</h4>

				<p>Sed eros tortor, ornare eu tortor vel, pulvinar commodo dolor. Phasellus bibendum lacus quis quam feugiat
					lacinia. Sed tellus eros, pellentesque vel posuere tempor, pretium non metus.</p>

				<h5 className="au-display-xs">Heading tier five (xs)</h5>

				<p>Ut erat nisl, convallis sit amet turpis vel, tincidunt dictum dolor. Praesent lacinia nulla nisi, eu suscipit
					ante ornare sit amet. Sed posuere urna non nibh accumsan dignissim.</p>
				<p>Pellentesque facilisis magna lectus, in tincidunt dolor sollicitudin finibus.</p>

				<h6 className="au-display-xs">Heading tier six (xs)</h6>

				<p>The goby fish and pistol shrimp are closest of friends.</p>

				<hr/>

				<h2>headings on paragraph, span</h2>

				<p>Similarly, we can apply the classNamees to other elements as visually necessary:</p>

				<p className="au-display-md">This is a paragraph using <code>.au-display-md</code>.</p>

				<span className="au-display-lg">This is a span tag using <code>.au-display-lg</code>.</span>

				<span className="au-display-md">This is a span tag using <code>.au-display-md</code>.</span>

				<p>And back to a regular paragraph.</p>
			</div>
		</div>
		<div className="split-wrapper">
			<div className="split split--alt">
				<div className="row">
					<div className="col-sm-6">

						<h2>headings on h1-h6</h2>

						<div>
							<h4 className="au-display-xxxl">Display xxxl</h4>
							<h6 className="au-display-xxl">Display xxl</h6>
							<h4 className="au-display-xl">Display xl</h4>
							<h5 className="au-display-lg">Display lg</h5>
							<h2 className="au-display-md">Display md</h2>
							<h3 className="au-display-sm">Display sm</h3>
							<h1 className="au-display-xs">Display xs</h1>
						</div>
					</div>

					<div className="col-sm-6">
						<h2>headings on span</h2>

						<div>
							<span className="au-display-xxxl">Display xxxl</span>
							<span className="au-display-xxl">Display xxl</span>
							<span className="au-display-xl">Display xl</span>
							<span className="au-display-lg">Display lg</span>
							<span className="au-display-md">Display md</span>
							<span className="au-display-sm">Display sm</span>
							<span className="au-display-xs">Display xs</span>
						</div>
					</div>
				</div>

				<hr/>
				<h2>headings with text</h2>

				<p>The following heading receive the <code>.au-display-[xs&hellip;xxxl]</code> classNamees.</p>

				<span className="au-display-xxxl">Promo text (xxxl)</span>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quam odit explicabo hic autem unde
					exercitationem
					ipsam illum deserunt, magni ea, aperiam itaque quo nesciunt. Quod fugit quibusdam, alias nemo.</p>

				<h1 className="au-display-xxl">Heading tier one (xxl)</h1>

				<p>The quick brown fox jumped over the lazy dog</p>

				<h2 className="au-display-lg">Heading tier two (lg)</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam viverra, lobortis lacus ac, dictum
					ligula.</p>
				<p>Curabitur eu porta nisl.</p>

				<h3 className="au-display-md">Straight into a heading tier three (md)</h3>

				<p>Curabitur aliquam id metus nec porttitor. Nunc lacus sapien, rutrum nec convallis pharetra, condimentum vitae
					turpis.</p>

				<h4 className="au-display-sm">Heading tier four (sm)</h4>

				<p>Sed eros tortor, ornare eu tortor vel, pulvinar commodo dolor. Phasellus bibendum lacus quis quam feugiat
					lacinia. Sed tellus eros, pellentesque vel posuere tempor, pretium non metus.</p>

				<h5 className="au-display-xs">Heading tier five (xs)</h5>

				<p>Ut erat nisl, convallis sit amet turpis vel, tincidunt dictum dolor. Praesent lacinia nulla nisi, eu suscipit
					ante ornare sit amet. Sed posuere urna non nibh accumsan dignissim.</p>
				<p>Pellentesque facilisis magna lectus, in tincidunt dolor sollicitudin finibus.</p>

				<h6 className="au-display-xs">Heading tier six (xs)</h6>

				<p>The goby fish and pistol shrimp are closest of friends.</p>

				<hr/>

				<h2>headings on paragraph, span</h2>

				<p>Similarly, we can apply the classNamees to other elements as visually necessary:</p>

				<p className="au-display-md">This is a paragraph using <code>.au-display-md</code>.</p>

				<span className="au-display-lg">This is a span tag using <code>.au-display-lg</code>.</span>

				<span className="au-display-md">This is a span tag using <code>.au-display-md</code>.</span>

				<p>And back to a regular paragraph.</p>
			</div>

			<div className="split split--alt split--dark">
				<div className="row">
					<div className="col-sm-6">

						<h2>headings on h1-h6</h2>

						<div>
							<h4 className="au-display-xxxl">Display xxxl</h4>
							<h6 className="au-display-xxl">Display xxl</h6>
							<h4 className="au-display-xl">Display xl</h4>
							<h5 className="au-display-lg">Display lg</h5>
							<h2 className="au-display-md">Display md</h2>
							<h3 className="au-display-sm">Display sm</h3>
							<h1 className="au-display-xs">Display xs</h1>
						</div>
					</div>

					<div className="col-sm-6">
						<h2>headings on span</h2>

						<div>
							<span className="au-display-xxxl">Display xxxl</span>
							<span className="au-display-xxl">Display xxl</span>
							<span className="au-display-xl">Display xl</span>
							<span className="au-display-lg">Display lg</span>
							<span className="au-display-md">Display md</span>
							<span className="au-display-sm">Display sm</span>
							<span className="au-display-xs">Display xs</span>
						</div>
					</div>
				</div>

				<hr/>

				<h2>headings with text</h2>

				<p>The following heading receive the <code>.au-display-[xs&hellip;xxxl]</code> classNamees.</p>

				<span className="au-display-xxxl">Promo text (xxxl)</span>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quam odit explicabo hic autem unde
					exercitationem
					ipsam illum deserunt, magni ea, aperiam itaque quo nesciunt. Quod fugit quibusdam, alias nemo.</p>

				<h1 className="au-display-xxl">Heading tier one (xxl)</h1>

				<p>The quick brown fox jumped over the lazy dog</p>

				<h2 className="au-display-lg">Heading tier two (lg)</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam viverra, lobortis lacus ac, dictum
					ligula.</p>
				<p>Curabitur eu porta nisl.</p>

				<h3 className="au-display-md">Straight into a heading tier three (md)</h3>

				<p>Curabitur aliquam id metus nec porttitor. Nunc lacus sapien, rutrum nec convallis pharetra, condimentum vitae
					turpis.</p>

				<h4 className="au-display-sm">Heading tier four (sm)</h4>

				<p>Sed eros tortor, ornare eu tortor vel, pulvinar commodo dolor. Phasellus bibendum lacus quis quam feugiat
					lacinia. Sed tellus eros, pellentesque vel posuere tempor, pretium non metus.</p>

				<h5 className="au-display-xs">Heading tier five (xs)</h5>

				<p>Ut erat nisl, convallis sit amet turpis vel, tincidunt dictum dolor. Praesent lacinia nulla nisi, eu suscipit
					ante ornare sit amet. Sed posuere urna non nibh accumsan dignissim.</p>
				<p>Pellentesque facilisis magna lectus, in tincidunt dolor sollicitudin finibus.</p>

				<h6 className="au-display-xs">Heading tier six (xs)</h6>

				<p>The goby fish and pistol shrimp are closest of friends.</p>

				<hr/>

				<h2>headings on paragraph, span</h2>

				<p>Similarly, we can apply the classNamees to other elements as visually necessary:</p>

				<p className="au-display-md">This is a paragraph using <code>.au-display-md</code>.</p>

				<span className="au-display-lg">This is a span tag using <code>.au-display-lg</code>.</span>

				<span className="au-display-md">This is a span tag using <code>.au-display-md</code>.</span>

				<p>And back to a regular paragraph.</p>
			</div>
		</div>
	</>
);

export default withLayout(Headings);
