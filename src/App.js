import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ContentTypeDropdown from "./ContentTypeDropdown";
import ContentList from "./ContentList";
import ContentDetails from "./ContentDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContentType: "",
      selectedContentUrl: ""
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleListSelection = this.handleListSelection.bind(this);
  }

  handleDropdown(e, component) {
    this.setState({ selectedContentType: component.value });
  }

  handleListSelection(item) {
    this.setState({ selectedContentUrl: item.url });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            render={() => (
              <ContentTypeDropdown
                handleDropdown={this.handleDropdown}
                selected={this.state.selectedContentType}
              />
            )}
          />

          <ContentDetails selectedContent={this.state.selectedContentUrl} />
          <Route
            path="/"
            render={() => (
              <ContentList
                type={this.state.selectedContentType}
                handleListSelection={this.handleListSelection}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
