"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QNode {
    constructor(o) {
        this.contents = o;
    }
}
exports.QNode = QNode;
class QEdge {
    constructor(origin, destination, contents) {
        this.origin = origin;
        this.destination = destination;
        this.contents = contents;
        this.isDirected = false;
    }
}
exports.QEdge = QEdge;
class QGraph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }
    getNodes() {
        return this.nodes;
    }
    getEdges() {
        return this.nodes;
    }
    getSize() {
        return this.size;
    }
    endNodes(e) {
        return [e.origin, e.destination];
    }
    incidentEdges(n) {
        var endpoints;
        return this.edges.filter(function (edge) {
            endpoints = this.endNodes(edge);
            return endpoints.indexOf(n) >= 0;
        }, this);
    }
    insertEdge(n, m, o) {
        var newEdge = new QEdge(n, m, o);
        n.outgoingIncidentEdgeCount++;
        m.incomingIncidentEdgeCount++;
        this.edges.push(newEdge);
        this.size++;
        return newEdge;
    }
    removeEdge(e) {
        var targetIndex;
        targetIndex = this.edges.indexOf(e);
        if (targetIndex < 0) {
            throw new Error('Edge does not exist in this EdgeListGraph.');
        }
        e.origin.outgoingIncidentEdgeCount--;
        e.destination.incomingIncidentEdgeCount--;
        this.edges.splice(targetIndex, 1);
        this.size--;
    }
    insertNode(o) {
        var newNode = new QNode(o);
        this.nodes.push(newNode);
        this.size++;
        return newNode;
    }
    removeNode(n) {
        var targetIndex;
        targetIndex = this.nodes.indexOf(n);
        if (targetIndex < 0) {
            throw new Error('Node does not exist in this EdgeListGraph.');
        }
        this.incidentEdges(n).forEach(function (edge) {
            this.removeEdge(edge);
        }, this);
        this.nodes.splice(targetIndex, 1);
        this.size--;
    }
}
exports.QGraph = QGraph;
