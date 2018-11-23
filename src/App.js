import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { Header, Icon } from "semantic-ui-react";

import ContentTypeDropdown from "./ContentTypeDropdown";
import ContentList from "./ContentList";
import ContentDetails from "./ContentDetails";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContentType: "",
      selectedContentUrl: ""
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleListSelection = this.handleListSelection.bind(this);
  }

  componentDidMount() {
    document.title = "Healthcare Frontend Code Challenge";
  }

  handleDropdown(e, component) {
    // debugger;
    // this.setState({ selectedContentType: component.value });
    this.props.history.push(`/${component.value}`);
  }

  handleListSelection(item) {
    this.setState({ selectedContentUrl: item.url });
  }

  render() {
    return (
      <div className="App">
        <center>
          <Header as="h1" icon>
            <Icon
              name="heartbeat"
              color="red"
              className="animated pulse infinite"
            />
            HealthCare.gov frontend challenge my M.K.
          </Header>
        </center>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ContentTypeDropdown
                handleDropdown={this.handleDropdown}
                selected={this.state.selectedContentType}
              />
            )}
          />
          <Route
            path="/:type"
            exact
            render={() => (
              <React.Fragment>
                <ContentTypeDropdown
                  handleDropdown={this.handleDropdown}
                  selected={this.state.selectedContentType}
                />
                <ContentList handleListSelection={this.handleListSelection} />
              </React.Fragment>
            )}
          />
          <Route path="/:type/*">
            <ContentDetails selectedContent={this.state.selectedContentUrl} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
