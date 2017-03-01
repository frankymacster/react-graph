import * as React from 'react';

import { Node } from './interfaces/graph';

interface IEdgeProps {
  contents: any;
  origin: Node;
  destination: Node;
}

export default class Edge extends React.Component<IEdgeProps, {}> {
  public render(): React.ReactElement<{}> {
    var ox = this.props.origin.contents.x;
    var oy = this.props.origin.contents.y;
    var dx = this.props.destination.contents.x;
    var dy = this.props.destination.contents.y;

    return (
      <line x1={ox} y1={oy} x2={dx} y2={dy}
        strokeWidth="5" stroke="blue"/>
    )
  }
}