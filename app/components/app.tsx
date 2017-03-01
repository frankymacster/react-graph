import * as React from 'react';

import Node from './node';
import Edge from './edge';
import { QGraph } from './classes/graph';

interface IGraphProps {
  graph: QGraph;
}

export class App extends React.Component<IGraphProps, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <svg>
        <Edge
          origin={this.props.graph.nodes[0]}
          destination={this.props.graph.nodes[1]}
          contents={''}/>
        <Node contents={this.props.graph.nodes[0].contents}/>
        <Node contents={this.props.graph.nodes[1].contents}/>
      </svg>
    )
  }
}
