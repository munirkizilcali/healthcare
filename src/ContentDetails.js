import React from "react";

import { baseUrl } from "./config";

class ContentDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
		this.fetchContent = this.fetchContent.bind(this);
	}

	componentDidMount() {
		if (this.props.selectedContent !== "") {
			this.fetchContent();
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedContent !== prevProps.selectedContent) {
			this.fetchContent();
		}
	}

	fetchContent() {
		fetch(
			`${baseUrl}${this.props.selectedContent.slice(
				0,
				this.props.selectedContent.length - 1
			)}.json`
		)
			.then(response => response.json())
			.then(json => this.setState({ content: json }))
			.catch(err => console.log(err));
	}

	render() {
		if (this.state.content !== "") {
			return <div>{this.state.content.title}</div>;
		} else {
			return <div>No content Selected</div>;
		}
	}
}

export default ContentDetails;
