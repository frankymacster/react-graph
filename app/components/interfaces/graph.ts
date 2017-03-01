export interface Node {
  contents: any;
}

export interface Edge {
  contents: any;
  origin: Node;
  destination: Node;
}

export interface Graph {
  nodes: Node[];
  edges: Edge[];

  insertNode(o: any);
  insertEdge(n: Node, m: Node, o: any);
}