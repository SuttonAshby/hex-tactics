import React, { Component } from 'react';
import {GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from 'react-hexgrid';

class App extends Component {

  constructor(props){
    super(props)
    const hexagons = GridGenerator.hexagon(2)
    this.state = { hexagons };
  }


  render() {
    let { hexagons } = this.state;
    return (
      <Layout className="game" size={{x: 10, y: 10}} flat={true} spacing={1.08 } origin={{x: -30, y: 0}}>
      {
        hexagons.map((hex, i) => (
          <Hexagon 
            key={i}
            q={hex.q}
            r={hex.r}
            s={hex.s}
            >
              <Text>{HexUtils.getID(hex)}</Text>
            </Hexagon>
        ))
      }
      </Layout>
    );
  }
}

export default App;
