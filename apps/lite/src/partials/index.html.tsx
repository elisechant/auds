import React from 'react';
import { Link } from 'wouter';

const Index = () => (
	<>
		<style dangerouslySetInnerHTML={{__html: `
			body {
				margin: 0;
				padding: 6.4em 3.2em 3.2em 3.2em;
				overflow-x: hidden;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
			}
			body::before {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				background: repeating-linear-gradient(
					-45deg,
					#222,
					#222 10px,
					#333 10px,
					#333 20px
			);
				padding: 0.8em 3.2em 0.8em 1.6em;
				content: "🏠 Index of test files";
				font-family: 'Lucida Sans Typewriter', 'Lucida Console', Monaco, 'Bitstream Vera Sans Mono', monospace;
				color: white;
			}

			.module-list > li {
				margin-bottom: 2.5rem;
			}

			.module-list {
				padding: 0 0 0 1.5em;
				margin: 0;
				column-count: 1;
				-webkit-column-count: 1;
				-moz-column-count: 1;
				column-count: 1;
				-webkit-column-gap: 2em;
				-moz-column-gap: 2em;
				column-gap: 2em;
			}

			.module-list__headline {
				display: inline-block;
				font-weight: bold;
				text-align: center;
				font-size: 1.5rem;
				margin-bottom: 0.25em;
			}

			@media (min-width: 576px) {
			.module-list {
					column-count: 2;
					-webkit-column-count: 2;
					-moz-column-count: 2;
					column-count: 2;
				}
			}

			@media (min-width: 768px) {
			.module-list {
					column-count: 2;
					-webkit-column-count: 2;
					-moz-column-count: 2;
					column-count: 2;
				}
			}

			@media (min-width: 992px) {
			.module-list {
					column-count: 3;
					-webkit-column-count: 3;
					-moz-column-count: 3;
					column-count: 3;
				}
			}

			@media (min-width: 1200px) {
			.module-list {
					column-count: 4;
					-webkit-column-count: 4;
					-moz-column-count: 4;
					column-count: 4;
				}
			}

			.badge {
				display: inline-block;
				height: 20px;
			}

			.link {
				display: inline-block;
				margin-right: 0.5em;
			}
			`}} />
		<h1>All component tests</h1>
		<main>
			<ol classNameName="module-list">
				<li><Link classNameName="module-list__headline" href="/core">core</Link></li>
				<li><Link classNameName="module-list__headline" href="/accordion">accordion</Link></li>
				<li><Link classNameName="module-list__headline" href="/body">body</Link></li>
				<li><Link classNameName="module-list__headline" href="/breadcrumbs">breadcrumbs</Link></li>
				<li><Link classNameName="module-list__headline" href="/buttons">buttons</Link></li>
				<li><Link classNameName="module-list__headline" href="/callout">callout</Link></li>
				<li><Link classNameName="module-list__headline" href="/card">card</Link></li>
				<li><Link classNameName="module-list__headline" href="/control-input">control-input</Link></li>
				<li><Link classNameName="module-list__headline" href="/cta-link">cta-link</Link></li>
				<li><Link classNameName="module-list__headline" href="/direction-links">direction-links</Link></li>
				<li><Link classNameName="module-list__headline" href="/footer">footer</Link></li>
				<li><Link classNameName="module-list__headline" href="/form">form</Link></li>
				<li><Link classNameName="module-list__headline" href="/grid-12">grid-12</Link></li>
				<li><Link classNameName="module-list__headline" href="/header">header</Link></li>
				<li><Link classNameName="module-list__headline" href="/headings">headings</Link></li>
				<li><Link classNameName="module-list__headline" href="/inpage-nav">inpage-nav</Link></li>
				<li><Link classNameName="module-list__headline" href="/keyword-list">keyword-list</Link></li>
				<li><Link classNameName="module-list__headline" href="/link-list">link-list</Link></li>
				<li><Link classNameName="module-list__headline" href="/main-nav">main-nav</Link></li>
				<li><Link classNameName="module-list__headline" href="/page-alerts">page-alerts</Link></li>
				<li><Link classNameName="module-list__headline" href="/progress-indicator">progress-indicator</Link></li>
				<li><Link classNameName="module-list__headline" href="/responsive-media">responsive-media</Link></li>
				<li><Link classNameName="module-list__headline" href="/searchbox">searchbox</Link></li>
				<li><Link classNameName="module-list__headline" href="/select">select</Link></li>
				<li><Link classNameName="module-list__headline" href="/side-nav">side-nav</Link></li>
				<li><Link classNameName="module-list__headline" href="/skip-link">skip-link</Link></li>
				<li><Link classNameName="module-list__headline" href="/table">table</Link></li>
				<li><Link classNameName="module-list__headline" href="/tags">tags</Link></li>
				<li><Link classNameName="module-list__headline" href="/text-inputs">text-inputs</Link></li>
			</ol>
		</main>
	</>
);

export default Index;
