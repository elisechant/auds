import React from 'react';
import { render } from 'react-dom';
import { Route } from 'wouter';

import Index from './partials/index.html';
import Footer from './partials/footer.html';
import Header from './partials/footer.html';
import MainNav from './partials/main-nav.html';
import Body from './partials/body.html';
import Core from './partials/core.html';
import Accordion from './partials/accordion.html';
import Breadcrumbs from './partials/breadcrumbs.html';
import Buttons from './partials/buttons.html';
import Callout from './partials/callout.html';
import Card from './partials/card.html';
import ControlInput from './partials/control-input.html';
import CtaLink from './partials/cta-link.html';
import DirectionLinks from "./partials/direction-links.html";
import Form from "./partials/form.html";
import Grid12 from "./partials/grid-12.html";
import Headings from "./partials/headings.html";
import InpageNav from "./partials/inpage-nav.html";
import KeywordList from "./partials/keyword-list.html";
import LinkList from "./partials/link-list.html";
import PageAlerts from "./partials/page-alerts.html";
import ProgressIndicator from "./partials/progress-indicator.html";
import ResponsiveMedia from "./partials/responsive-media.html";
import SearchBox from "./partials/searchbox.html";
import Select from "./partials/select.html";
import SideNav from "./partials/side-nav.html";
import SkipLink from "./partials/skip-link.html";
import Table from "./partials/table.html";
import Tags from "./partials/tags.html";
import TextInputs from "./partials/text-inputs.html";

const App = () => (
	<>
		<Route path={'/'} component={Index} />

		<Route path={'/footer'} component={Footer} />
		<Route path={'/header'} component={Header} />
		<Route path={'/main-nav'} component={MainNav} />
		<Route path={'/body'} component={Body} />
		<Route path={'/core'} component={Core} />
		<Route path={'/accordion'} component={Accordion} />
		<Route path={'/breadcrumbs'} component={Breadcrumbs} />
		<Route path={'/buttons'} component={Buttons} />
		<Route path={'/callout'} component={Callout} />
		<Route path={'/card'} component={Card} />
		<Route path={'/control-input'} component={ControlInput} />
		<Route path={'/cta-link'} component={CtaLink} />
		<Route path={'/direction-links'} component={DirectionLinks} />
		<Route path={'/form'} component={Form} />
		<Route path={'/grid-12'} component={Grid12} />
		<Route path={'/headings'} component={Headings} />
		<Route path={'/inpage-nav'} component={InpageNav} />
		<Route path={'/keyword-list'} component={KeywordList} />
		<Route path={'/link-list'} component={LinkList} />
		<Route path={'/page-alerts'} component={PageAlerts} />
		<Route path={'/progress-indicator'} component={ProgressIndicator} />
		<Route path={'/responsive-media'} component={ResponsiveMedia} />
		<Route path={'/searchbox'} component={SearchBox} />
		<Route path={'/select'} component={Select} />
		<Route path={'/side-nav'} component={SideNav} />
		<Route path={'/skip-link'} component={SkipLink} />
		<Route path={'/table'} component={Table} />
		<Route path={'/tags'} component={Tags} />
		<Route path={'/text-inputs'} component={TextInputs} />
	</>
);

render(<App />, document.getElementById('root'));
