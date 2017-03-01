"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const edge_1 = require("./edge");
class App extends React.Component {
    render() {
        return (React.createElement("svg", null,
            React.createElement(edge_1.default, { origin: this.props.graph.nodes[0], destination: this.props.graph.nodes[1], contents: '' }),
            React.createElement(node_1.default, { contents: this.props.graph.nodes[0].contents }),
            React.createElement(node_1.default, { contents: this.props.graph.nodes[1].contents })));
    }
}
exports.App = App;
