import React, { Component } from 'react';
import {HexGrid, Hex, Layout, Hexagon, Text, Pattern, Path } from 'react-hexgrid';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          {/* Grid with manually inserted hexagons */}
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0}><Text>0, 0, 0</Text></Hexagon>
            <Hexagon q={0} r={-1} s={1}><Text>0, -1, 1</Text></Hexagon>
            <Hexagon q={0} r={1} s={-1}><Text>0, 1, -1</Text></Hexagon>
            <Hexagon q={1} r={-1} s={0}><Text>1, -1, 0</Text></Hexagon>
            <Hexagon q={1} r={0} s={-1}><Text>1, 0, -1</Text></Hexagon>
            <Hexagon q={-1} r={1} s={0} ><Text>-1, 1, 0</Text></Hexagon>
            <Hexagon q={-1} r={0} s={1} ><Text>-1, 0, 1</Text></Hexagon>
            <Hexagon q={0} r={2} s={-2} ><Text>0, 2, -2</Text></Hexagon>
            <Hexagon q={-1} r={2} s={-1} ><Text>-1, 2, -1</Text></Hexagon>
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
