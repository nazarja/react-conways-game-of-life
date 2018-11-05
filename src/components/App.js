import React, { Component } from 'react';
import Header from './Header.js';
import Controls from './Controls.js';
import Grid from './Grid.js';
import Footer from './Footer.js';

class App extends Component {

  constructor() {
    super();

    this.gridSize = 30;
    this.speed = 400;
    this.playButton = false;

    this.state = {
      generations: 0,
      boardState: Array(this.gridSize).fill().map(() => Array(this.gridSize).fill(false))
    };
  
  }

  componentWillMount() {
    this.seedBoard();
  }

  seedBoard = () => {
    let copyBoard = copyArray(this.state.boardState);

    for (let x = 0; x < this.gridSize; x++) {
      for (let y = 0; y < this.gridSize; y++) {
        let torf = Math.floor(Math.random() * 6);
        if (torf === 0) {
          copyBoard[x][y] = true;
        }
      }
    }
    this.setState({
      boardState: copyBoard
    });
  }

  clearBoard = () => {
    let copyBoard = Array(this.gridSize).fill().map(() => Array(this.gridSize).fill(false));
    this.setState({
      boardState: copyBoard,
      generations: 0
    });
    clearInterval(this.intervals);
  }

  selectSpeed = (speed) => {
    this.speed = speed;
  }
  
  selectGridSize = (gridSize) => {
    this.gridSize = gridSize;
    this.clearBoard();
  }

  wasManuallySelected = (x, y) => {
    let copyBoard = copyArray(this.state.boardState);
    copyBoard[x][y] = !copyBoard[x][y];
    this.setState({
      boardState: copyBoard
    });
  }

  playPause = () => {

    if (!this.playButton) {
      clearInterval(this.intervals);
      this.intervals = setInterval(this.generations, this.speed);
      this.playButton = !this.playButton;
    }
    else {
      clearInterval(this.intervals);
      this.playButton = !this.playButton;
    }
  }

  generations = () => {
    let copyBoard = this.state.boardState;
    let newCopyBoard = copyArray(this.state.boardState);

    for (let x = 0; x < this.gridSize; x++) {
      for (let y = 0; y < this.gridSize; y++) {
        let neighbours = 0;
        /////////////
        if (x > 0) {
          if (copyBoard[x - 1][y]) {neighbours++;}
        } 
        if (x > 0 && y > 0) {
          if (copyBoard[x - 1][y - 1]) {neighbours++;}
        }
        if (x > 0 && y < this.gridSize - 1) {
          if (copyBoard[x - 1][y + 1]) { neighbours++; }
        }
        /////////////
        if (y < this.gridSize - 1) {
          if (copyBoard[x][y + 1]) { neighbours++; }
        }
        if (y > 0) {
          if (copyBoard[x][y - 1]) { neighbours++; }
        }
        /////////////
        if (x < this.gridSize - 1) {
          if (copyBoard[x + 1][y]) { neighbours++; }
        }
        if (x < this.gridSize - 1 && y > 0) {
           if (copyBoard[x + 1][y - 1]) { neighbours++; }
        }
        if (x < this.gridSize - 1 && this.gridSize - 1) {
           if (copyBoard[x + 1][y + 1]) { neighbours++; }
        }
        /////////////
        if (copyBoard[x][y] && (neighbours < 2 || neighbours > 3)) {
          newCopyBoard[x][y] = false;
        }
        if (!copyBoard[x][y] && neighbours === 3) {
          newCopyBoard[x][y] = true;
        }
      }
    }
    this.setState({
      boardState: newCopyBoard,
      generations: this.state.generations + 1
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Controls 
            generations={this.state.generations} 
            playPause={this.playPause} 
            seedBoard={this.seedBoard} 
            clearBoard={this.clearBoard} 
            selectSpeed={this.selectSpeed} 
            selectGridSize={this.selectGridSize}
        />
        <Grid 
          gridSize={this.gridSize} 
          boardState={this.state.boardState} 
          wasManuallySelected={this.wasManuallySelected}/>
        <Footer />
      </div>
    );
  }
}

function copyArray(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default App;
