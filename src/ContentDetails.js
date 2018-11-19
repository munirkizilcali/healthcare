import React from "react";
import Parser from "html-react-parser";
import { withRouter } from "react-router-dom";
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
		if (this.props.selectedContent === "") {
			this.fetchContent();
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedContent !== prevProps.selectedContent) {
			this.fetchContent();
		}
	}

	componentWillUnmount() {
		this.setState({ content: "" });
	}

	fetchContent() {
		fetch(
			`${baseUrl}/${this.props.match.params[0].slice(
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
			return (
				<div>
					<h1>{this.state.content.title}</h1>
					<div>{Parser(this.state.content.content)}</div>
					<ul>
						{Object.keys(this.state.content).map(key => {
							return (
								<li key={key}>
									<b>{key}:</b>
									{this.state.content[key]}
								</li>
							);
						})}
					</ul>
				</div>
			);
		} else {
			return <div>No content Selected</div>;
		}
	}
}

export default withRouter(ContentDetails);
