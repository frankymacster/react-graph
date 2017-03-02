"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const node_1 = require("./node");
const edge_1 = require("./edge");
class App extends React.Component {
    render() {
        var nodes = this.props.graph.nodes;
        var edges = this.props.graph.edges;
        window.console.log(edges);
        const nodeItems = nodes.map((node) => React.createElement(node_1.default, { contents: node.contents }));
        const edgeItems = edges.map((edge) => React.createElement(edge_1.default, { origin: edge.origin, destination: edge.destination, contents: '' }));
        return (React.createElement("svg", null,
            edgeItems,
            nodeItems));
    }
}
exports.App = App;
