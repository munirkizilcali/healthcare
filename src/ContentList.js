import React from "react";
import { List } from "semantic-ui-react";

import { baseUrl } from "./config";

class ContentList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
	}

	componentDidMount() {
		if (this.props.type !== "") {
			this.fetchList();
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.type !== prevProps.type) {
			this.fetchList();
		}
	}

	fetchList() {
		fetch(`${baseUrl}/api/${this.props.type}.json`)
			.then(response => response.json())
			.then(json => {
				if (Array.isArray(json)) {
					this.setState({ list: json });
				} else {
					this.setState({ list: json[this.props.type] });
				}
			})
			.catch(err => console.log(err));
	}

	render() {
		if (this.state.list.length !== 0) {
			return (
				<List divided animated verticalAlign="middle">
					{this.state.list.map((item, index) => {
						return (
							<List.Item key={index}>
								<List.Content>
									<List.Header
										as="a"
										onClick={() =>
											this.props.handleListSelection(item)
										}
									>
										{item.title}
									</List.Header>
									<List.Description>
										{item.url}
									</List.Description>
									{item.bite}
								</List.Content>
							</List.Item>
						);
					})}
				</List>
			);
		} else {
			return <div>No Content Type Selected</div>;
		}
	}
}

export default ContentList;
