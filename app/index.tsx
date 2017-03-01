import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/app';
import { QNode, QEdge, QGraph } from './components/classes/graph';

var graph = new QGraph();
var n1 = graph.insertNode({ x: 50, y: 50});
var n2 = graph.insertNode({ x: 50, y: 100});
graph.insertEdge(n1, n2, '');

class Main extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (<App graph={graph}/>);
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
