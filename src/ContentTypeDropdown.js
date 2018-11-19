import React from "react";
import { Dropdown, Header } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class ContentTypeDropdown extends React.Component {
	render() {
		const options = [
			{
				text: "Index".toLowerCase(),
				value: "index"
			},
			{
				text: "Articles".toLowerCase(),
				value: "articles"
			},
			{
				text: "Blog".toLowerCase(),
				value: "blog"
			},
			{
				text: "Questions".toLowerCase(),
				value: "questions"
			},
			{
				text: "Glossary".toLowerCase(),
				value: "glossary"
			},
			{
				text: "States".toLowerCase(),
				value: "states"
			},
			{
				text: "Topics".toLowerCase(),
				value: "topics"
			}
		];
		return (
			<div>
				<center>
					<Header as="h3">
						List me objects from{" "}
						<Dropdown
							inline
							placeholder="category"
							onChange={this.props.handleDropdown}
							options={options}
							value={this.props.match.params.type}
						/>
					</Header>
				</center>
			</div>
		);
	}
}

export default withRouter(ContentTypeDropdown);
