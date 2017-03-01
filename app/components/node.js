"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Node extends React.Component {
    render() {
        var x = this.props.contents.x;
        var y = this.props.contents.y;
        return (React.createElement("circle", { cx: x, cy: y, r: 10, fill: "red" }));
    }
}
exports.default = Node;
