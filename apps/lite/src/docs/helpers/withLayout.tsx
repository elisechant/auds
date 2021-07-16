import React from 'react';
import { Link } from 'wouter';

export const withLayout = (Component: any) => (props: any) => (
	<div className={'au-body au-grid'}>
		<Link className="test-link" href={'/'}>&larr; Back</Link>

		<Component {...props} />
	</div>
)
