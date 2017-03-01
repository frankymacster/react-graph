import * as React from 'react';

interface INodeProps {
  contents: any;
}

export default class Node extends React.Component<INodeProps, {}> {
  public render(): React.ReactElement<{}> {
    var x = this.props.contents.x;
    var y = this.props.contents.y;

    return (
      <circle cx={x} cy={y} r={10} fill="red" />
    )
  }
}