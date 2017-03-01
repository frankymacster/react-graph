"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Edge extends React.Component {
    render() {
        var ox = this.props.origin.contents.x;
        var oy = this.props.origin.contents.y;
        var dx = this.props.destination.contents.x;
        var dy = this.props.destination.contents.y;
        return (React.createElement("line", { x1: ox, y1: oy, x2: dx, y2: dy, strokeWidth: "5", stroke: "blue" }));
    }
}
exports.default = Edge;
