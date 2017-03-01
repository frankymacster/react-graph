"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const app_1 = require("./components/app");
const graph_1 = require("./components/classes/graph");
var graph = new graph_1.QGraph();
var n1 = graph.insertNode({ x: 50, y: 50 });
var n2 = graph.insertNode({ x: 50, y: 100 });
graph.insertEdge(n1, n2, '');
class Main extends React.Component {
    render() {
        return (React.createElement(app_1.App, { graph: graph }));
    }
}
ReactDOM.render(React.createElement(Main, null), document.getElementById('app'));
