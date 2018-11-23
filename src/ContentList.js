import React from "react";
import { List, Segment, Loader, Dimmer, Icon } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";

import { baseUrl } from "./config";

export class ContentList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			loading: false
		};
		// this.fetchList = this.fetchList.bind(this);
	}

	componentDidMount() {
		if (this.props.match.params.type) {
			this.fetchList();
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.type !== prevProps.match.params.type) {
			this.fetchList();
		}
	}

	fetchList() {
		this.setState({ loading: true });
		fetch(`${baseUrl}/api/${this.props.match.params.type}.json`)
			.then(response => response.json())
			.then(json => {
				if (Array.isArray(json)) {
					this.setState({ list: json, loading: false });
				} else {
					this.setState({
						list: json[this.props.match.params.type],
						loading: false
					});
				}
			})
			.catch(err => console.log(err));
	}

	render() {
		if (Array.isArray(this.state.list) && this.state.loading === false) {
			return (
				<Segment>
					<List divided animated verticalAlign="middle">
						{this.state.list.map((item, index) => {
							return (
								<List.Item key={index}>
									<List.Content>
										<Link
											to={`/${
												this.props.match.params.type
											}${item.url}`}
										>
											<List.Header as="a">
												<Icon name="caret square right" />
												{item.title}
											</List.Header>
										</Link>
										<List.Description>
											{item.url}
										</List.Description>
										{item.bite}
									</List.Content>
								</List.Item>
							);
						})}
					</List>
				</Segment>
			);
		} else if (this.state.loading === true) {
			return (
				<Segment>
					<Dimmer active inverted>
						<Loader inverted>Loading</Loader>
					</Dimmer>
				</Segment>
			);
		} else {
			return <Segment>No Content Type Selected</Segment>;
		}
	}
}

export default withRouter(ContentList);
// export default ContentList;
