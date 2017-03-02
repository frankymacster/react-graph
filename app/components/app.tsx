import * as React from 'react';

import Node from './node';
import Edge from './edge';
import { QGraph } from './classes/graph';

interface IGraphProps {
  graph: QGraph;
}

export class App extends React.Component<IGraphProps, {}> {
  public render(): React.ReactElement<{}> {
    var nodes = this.props.graph.nodes;
    var edges = this.props.graph.edges;

    window.console.log(edges);
    const nodeItems = nodes.map((node) =>
      <Node
        contents={node.contents}
      />
    );
    const edgeItems = edges.map((edge) =>
      <Edge
        origin={edge.origin}
        destination={edge.destination}
        contents={''}
      />
    );

    return (
      <svg>
        {edgeItems}
        {nodeItems}
      </svg>
    )
  }
}
