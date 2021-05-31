/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon May 31 2021 12:55:58 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			eventId: '',
			errorMessage: '',
			errorInfo: ''
		};
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, errorMessage: error.message };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		console.log({ error, errorInfo });
		this.setState({ errorInfo });
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<details>
					{this.state.errorInfo && <summary>{this.state.errorMessage}</summary>}
					{this.state.errorInfo && (
						<pre>{this.state.errorInfo.componentStack}</pre>
					)}
				</details>
			);
		}

		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default ErrorBoundary;
