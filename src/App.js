import React, { Component } from 'react';
import {HexGrid, Hex, Layout, Hexagon, Text, Pattern, Path } from 'react-hexgrid';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          {/* Grid with manually inserted hexagons */}
          <Layout size={{ x: 5, y: 5 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0}><Text>0, 0, 0</Text></Hexagon>
            <Hexagon q={0} r={-1} s={1}><Text>0, -1, 1</Text></Hexagon>
            <Hexagon q={0} r={1} s={-1}><Text>0, 1, -1</Text></Hexagon>
            <Hexagon q={1} r={-1} s={0}><Text>1, -1, 0</Text></Hexagon>
            <Hexagon q={1} r={0} s={-1}><Text>1, 0, -1</Text></Hexagon>
            <Hexagon q={-1} r={1} s={0} ><Text>-1, 1, 0</Text></Hexagon>
            <Hexagon q={-1} r={0} s={1} ><Text>-1, 0, 1</Text></Hexagon>
            <Hexagon q={0} r={2} s={-2} ><Text>0, 2, -2</Text></Hexagon>
            <Hexagon q={-1} r={2} s={-1} ><Text>-1, 2, -1</Text></Hexagon>
            <Hexagon q={-2} r={2} s={0} ><Text>-2, 2, 0</Text></Hexagon>
            <Hexagon q={-2} r={1} s={1} ><Text>-2, 1, 1</Text></Hexagon>
            <Hexagon q={-2} r={0} s={2} ><Text>-2, 0, 2</Text></Hexagon>
            <Hexagon q={-1} r={-1} s={2} ><Text>-1, -1, 2</Text></Hexagon>
            <Hexagon q={0} r={-2} s={2} ><Text>0, -2, 2</Text></Hexagon>
            <Hexagon q={1} r={-2} s={1} ><Text>1, -2, 1</Text></Hexagon>
            <Hexagon q={2} r={-2} s={0} ><Text>2, -2, 0</Text></Hexagon>
            <Hexagon q={2} r={-1} s={-1} ><Text>2, -1, -1</Text></Hexagon>
            <Hexagon q={2} r={0} s={-2}><Text>2, 0, -2</Text></Hexagon>
            <Hexagon q={1} r={1} s={-2}><Text>1, 1, -2</Text></Hexagon>
            <Hexagon q={0} r={3} s={-3}><Text>0, 3, -3</Text></Hexagon>
            <Hexagon q={-1} r={3} s={-2}><Text>-1, 3, -2</Text></Hexagon>
            <Hexagon q={-2} r={3} s={-1}><Text>-2, 3, -1</Text></Hexagon>
            <Hexagon q={-3} r={3} s={0}><Text>-3, 3, 0</Text></Hexagon>
            <Hexagon q={-3} r={2} s={1}><Text>-3, 2, 1</Text></Hexagon>
            <Hexagon q={-3} r={1} s={2}><Text>-3, 1, 2</Text></Hexagon>
            <Hexagon q={-3} r={0} s={3}><Text>-3, 0, 3</Text></Hexagon>
            <Hexagon q={-2} r={-1} s={3}><Text>-2, -1, 3</Text></Hexagon>
            <Hexagon q={-1} r={-2} s={3}><Text>-1, -2, 3</Text></Hexagon>
            <Hexagon q={0} r={-3} s={3}><Text>0, -3, 3</Text></Hexagon>
            <Hexagon q={1} r={-3} s={2}><Text>1, -3, 2</Text></Hexagon>
            <Hexagon q={2} r={-3} s={1}><Text>2, -3, 1</Text></Hexagon>
            <Hexagon q={3} r={-3} s={0}><Text>3, -3, 0</Text></Hexagon>
            <Hexagon q={3} r={-2} s={-1}><Text>3, -2, -1</Text></Hexagon>
            <Hexagon q={3} r={-1} s={-2}><Text>3, -1, -2</Text></Hexagon>
            <Hexagon q={3} r={0} s={-3}><Text>3, 0, -3</Text></Hexagon>
            <Hexagon q={2} r={1} s={-3}><Text>2, 1, -3</Text></Hexagon>
            <Hexagon q={1} r={2} s={-3}><Text>1, 2, -3</Text></Hexagon>
            <Hexagon q={0} r={4} s={-4}><Text>0, 4, -4</Text></Hexagon>
            <Hexagon q={-1} r={4} s={-3}><Text>-1, 4, -3</Text></Hexagon>
            <Hexagon q={-2} r={4} s={-2}><Text>-2, 4, -2</Text></Hexagon>
            <Hexagon q={-3} r={4} s={-1}><Text>-3, 4, -1</Text></Hexagon>
            <Hexagon q={-4} r={4} s={0}><Text>-4, 4, 0</Text></Hexagon>
            <Hexagon q={-4} r={3} s={1}><Text>-4, 3, 1</Text></Hexagon>
            <Hexagon q={-4} r={2} s={2}><Text>-4, 2, 2</Text></Hexagon>
            <Hexagon q={-4} r={1} s={3}><Text>-4, 1, 3</Text></Hexagon>
            <Hexagon q={-4} r={0} s={4}><Text>-4, 0, 4</Text></Hexagon>
            <Hexagon q={-3} r={-1} s={4}><Text>-3, -1, 4</Text></Hexagon>
            <Hexagon q={-2} r={-2} s={4}><Text>-2, -2, 4</Text></Hexagon>
            <Hexagon q={-1} r={-3} s={4}><Text>-1, -3, 4</Text></Hexagon>
            <Hexagon q={0} r={-4} s={4}><Text>0, -4, 4</Text></Hexagon>
            <Hexagon q={1} r={-4} s={3}><Text>1, -4, 3</Text></Hexagon>
            <Hexagon q={2} r={-4} s={2}><Text>2, -4, 2</Text></Hexagon>
            <Hexagon q={3} r={-4} s={1}><Text>3,-4, 1</Text></Hexagon>
            <Hexagon q={4} r={-4} s={0}><Text>4, -4, 0</Text></Hexagon>
            <Hexagon q={4} r={-3} s={-1}><Text>4, -3, -1</Text></Hexagon>
            <Hexagon q={4} r={-2} s={-2}><Text>4, -2, -2</Text></Hexagon>
            <Hexagon q={4} r={-1} s={-3}><Text>4, -1, -3</Text></Hexagon>
            <Hexagon q={4} r={0} s={-4}><Text>4, 0, -4</Text></Hexagon>
            <Hexagon q={3} r={1} s={-4}><Text>3, 1, -4</Text></Hexagon>
            <Hexagon q={2} r={2} s={-4}><Text>2, 2, -4</Text></Hexagon>
            <Hexagon q={1} r={3} s={-4}><Text>1, 3, -4</Text></Hexagon>
            <Hexagon q={-4} r={-1} s={5}><Text>-4, -1, 5</Text></Hexagon>
            <Hexagon q={-3} r={-2} s={5}><Text>-3, -2, 5</Text></Hexagon>
            <Hexagon q={-2} r={-3} s={5}><Text>-2, -3, 5</Text></Hexagon>
            <Hexagon q={-1} r={-4} s={5}><Text>-1, -4, 5</Text></Hexagon>
            <Hexagon q={0} r={-5} s={5}><Text>0, -5, 5</Text></Hexagon>
            <Hexagon q={1} r={-5} s={4}><Text>1, -5, 4</Text></Hexagon>
            <Hexagon q={2} r={-5} s={3}><Text>2, -5, 3</Text></Hexagon>
            <Hexagon q={3} r={-5} s={2}><Text>3, -5, 2</Text></Hexagon>
            <Hexagon q={4} r={-5} s={1}><Text>4, -5, 1</Text></Hexagon>
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
