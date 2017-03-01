import {Node, Edge, Graph} from '../interfaces/graph';

export class QNode implements Node {
  contents: any;
  incomingIncidentEdgeCount: number;
  outgoingIncidentEdgeCount: number;

  constructor (o: any) {
    this.contents = o;
  }
}

export class QEdge implements Node {
  isDirected: boolean;

  constructor (
    public origin: QNode,
    public destination: QNode,
    public contents: any) {
    this.isDirected = false;
  }
}

export class QGraph implements Graph {
  nodes: QNode[];
  edges: QEdge[];
  size: number;

  constructor () {
    this.nodes = [];
    this.edges = [];
  }

  public getNodes () {
    return this.nodes;
  }

  public getEdges () {
    return this.nodes;
  }

  public getSize () {
    return this.size;
  }

  endNodes (e: QEdge) {
    return [e.origin, e.destination];
  }

  incidentEdges (n: QNode) {
    var endpoints: QNode[];

    return this.edges.filter(function (edge: QEdge) {
      endpoints = this.endNodes(edge);

      return endpoints.indexOf(n) >= 0;
    }, this);
  }

  insertEdge (n: QNode, m: QNode, o: any) {
    var newEdge: QEdge = new QEdge(n, m, o);

    n.outgoingIncidentEdgeCount++;
    m.incomingIncidentEdgeCount++;

    this.edges.push(newEdge);
    this.size++;

    return newEdge;
  }

  removeEdge (e: QEdge) {
    var targetIndex: number;

    targetIndex = this.edges.indexOf(e);
    if (targetIndex < 0) {
      throw new Error ('Edge does not exist in this EdgeListGraph.');
    }

    e.origin.outgoingIncidentEdgeCount--;
    e.destination.incomingIncidentEdgeCount--;

    this.edges.splice(targetIndex, 1);
    this.size--;
  }

  insertNode (o: any) {
    var newNode: QNode = new QNode(o);

    this.nodes.push(newNode);
    this.size++;

    return newNode;
  }

  removeNode (n: QNode) {
    var targetIndex: number;

    targetIndex = this.nodes.indexOf(n);
    if (targetIndex < 0) {
      throw new Error('Node does not exist in this EdgeListGraph.');
    }

    this.incidentEdges(n).forEach(function (edge: QEdge) {
      this.removeEdge(edge);
    }, this);

    this.nodes.splice(targetIndex, 1);
    this.size--;
  }
}