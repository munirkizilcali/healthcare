import React, { Component } from "react";

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
      <div className="App">
        <ContentTypeDropdown
          handleDropdown={this.handleDropdown}
          selected={this.state.selectedContentType}
        />
        <ContentDetails selectedContent={this.state.selectedContentUrl} />
        <ContentList
          type={this.state.selectedContentType}
          handleListSelection={this.handleListSelection}
        />
      </div>
    );
  }
}

export default App;
