import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Tabs = React.createClass({
displayName: 'Tabs',
  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  _renderContent() {
    return (
      <div>
        {this.props.children[this.state.selected]}
      </div>
    );
  },
  render() {
    return (
      <div>
        {this._renderContent()}
      </div>
    );
  }
});