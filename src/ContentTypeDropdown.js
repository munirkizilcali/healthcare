import React from "react";
import { Dropdown } from "semantic-ui-react";

class ContentTypeDropdown extends React.Component {
	render() {
		const options = [
			{
				text: "Index",
				value: "index"
			},
			{
				text: "Articles",
				value: "articles"
			},
			{
				text: "Blog",
				value: "blog"
			},
			{
				text: "Questions",
				value: "questions"
			},
			{
				text: "Glossary",
				value: "glossary"
			},
			{
				text: "States",
				value: "states"
			},
			{
				text: "Topics",
				value: "topics"
			}
		];
		return (
			<Dropdown
				placeholder="Please select a content type"
				onChange={this.props.handleDropdown}
				selection
				options={options}
				value={this.props.selected}
			/>
		);
	}
}

export default ContentTypeDropdown;
