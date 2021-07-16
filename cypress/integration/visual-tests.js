describe('AuDS visual tests', () => {
	it('AU Core', () => {
		cy.visit('/packages/core/tests/site/');
		cy.matchImageSnapshot('core');
	})
	it('AU Accordion', () => {
		cy.visit('/packages/accordion/tests/site/');
		cy.matchImageSnapshot('accordion');
	})
	it('AU Animate', () => {
		cy.visit('/packages/animate/tests/site/');
		cy.matchImageSnapshot('animate');
	})
	it('AU Body', () => {
		cy.visit('/packages/body/tests/site/');
		cy.matchImageSnapshot('body');
	})
	it('AU Breadcrumbs', () => {
		cy.visit('/packages/breadcrumbs/tests/site/');
		cy.matchImageSnapshot('breadcrumbs');
	})
	it('AU Buttons', () => {
		cy.visit('/packages/buttons/tests/site/');
		cy.matchImageSnapshot('buttons');
	})
	it('AU Callout', () => {
		cy.visit('/packages/callout/tests/site/');
		cy.matchImageSnapshot('callout');
	})
	it('AU Card', () => {
		cy.visit('/packages/card/tests/site/');
		cy.matchImageSnapshot('card');
	})
	it('AU Control Input', () => {
		cy.visit('/packages/control-input/tests/site/');
		cy.matchImageSnapshot('control-input');
	})
	it('AU CTA Link', () => {
		cy.visit('/packages/cta-link/tests/site/');
		cy.matchImageSnapshot('cta-link');
	})
	it('AU Direction Links', () => {
		cy.visit('/packages/direction-links/tests/site/');
		cy.matchImageSnapshot('direction-links');
	})
	it('AU Footer', () => {
		cy.visit('/packages/footer/tests/site/');
		cy.matchImageSnapshot('footer');
	})
	it('AU Form', () => {
		cy.visit('/packages/form/tests/site/');
		cy.matchImageSnapshot('form');
	})
	it('AU Grid 12', () => {
		cy.visit('/packages/grid-12/tests/site/');
		cy.matchImageSnapshot('grid-12');
	})
	it('AU Header', () => {
		cy.visit('/packages/header/tests/site/');
		cy.matchImageSnapshot('header');
	})
	it('AU Headings', () => {
		cy.visit('/packages/headings/tests/site/');
		cy.matchImageSnapshot('headings');
	})
	it('AU Inpage Nav', () => {
		cy.visit('/packages/inpage-nav/tests/site/');
		cy.matchImageSnapshot('inpage-nav');
	})
	it('AU Keyword List', () => {
		cy.visit('/packages/keyword-list/tests/site/');
		cy.matchImageSnapshot('keyword-list');
	})
	it('AU Link List', () => {
		cy.visit('/packages/link-list/tests/site/');
		cy.matchImageSnapshot('link-list');
	})
	it('AU Main Nav', () => {
		cy.visit('/packages/main-nav/tests/site/');
		cy.matchImageSnapshot('main-nav');
	})
	it('AU Page Alerts', () => {
		cy.visit('/packages/page-alerts/tests/site/');
		cy.matchImageSnapshot('page-alerts');
	})
	it('AU Progress Indicator', () => {
		cy.visit('/packages/progress-indicator/tests/site/');
		cy.matchImageSnapshot('progress-indicator');
	})
	it('AU Responsive Media', () => {
		cy.visit('/packages/responsive-media/tests/site/');
		cy.matchImageSnapshot('responsive-media');
	})
	it('AU Searchbox', () => {
		cy.visit('/packages/searchbox/tests/site/');
		cy.matchImageSnapshot('searchbox');
	})
	it('AU Select', () => {
		cy.visit('/packages/select/tests/site/');
		cy.matchImageSnapshot('select');
	})
	it('AU Side Nav', () => {
		cy.visit('/packages/side-nav/tests/site/');
		cy.matchImageSnapshot('side-nav');
	})
	it('AU Skip Link', () => {
		cy.visit('/packages/skip-link/tests/site/');
		cy.matchImageSnapshot('skip-link');
	})
	it('AU Table', () => {
		cy.visit('/packages/table/tests/site/');
		cy.matchImageSnapshot('table');
	})
	it('AU Tags', () => {
		cy.visit('/packages/tags/tests/site/');
		cy.matchImageSnapshot('tags');
	})
	it('AU Text Inputs', () => {
		cy.visit('/packages/text-inputs/tests/site/');
		cy.matchImageSnapshot('text-inputs');
	})
})
