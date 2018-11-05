import React, { Component } from 'react';

class Controls extends Component {

    openSpeedDiv = () => {
        const speedDiv = document.getElementById("speedDiv");
        speedDiv.style.display = "block";
    }
    closeSpeedDiv = () => {
        const speedDiv = document.getElementById("speedDiv");
        speedDiv.style.display = "none";
    }
    openGridSizeDiv = () => {
        const gridDiv = document.getElementById("gridSizeDiv");
        gridDiv.style.display = "block";
    }
    closeGridSizeDiv = () => {
        const gridSizeDiv = document.getElementById("gridSizeDiv");
        gridSizeDiv.style.display = "none";
    }
    chooseSpeed = (event) => {
        let speed = event.target.dataset.speed;
        speed = parseInt(speed, 10);
        this.props.selectSpeed(speed);
    }
    chooseGridSize = (event) => {
        let gridSize = event.target.dataset.gridsize;
        gridSize = parseInt(gridSize, 10);
        this.props.selectGridSize(gridSize);
    }

    render() {
        return (
            <div id="Controls">
                <div id="generationsDisplay">Generations: {this.props.generations}</div>
                <div id="playPauseSelect" className="controlsSelectable" onClick={() => this.props.playPause()}>Play/Pause <i className="fa fa-play-circle"></i></div>
                <div id="randomSelect" className="controlsSelectable" onClick={() => this.props.seedBoard()}>Seed <i className="fab fa-pagelines"></i></div>
                <div id="clearSelect" className="controlsSelectable" onClick={() => this.props.clearBoard()}>Clear <i className="fa fa-trash-alt"></i></div>
                <div id="speedSelect" className="controlsSelectable" onMouseEnter={this.openSpeedDiv}  onMouseLeave={this.closeSpeedDiv}>Speed <i className="fa fa-bolt"></i>
                    <div className="dropDown" id="speedDiv">
                        <p onClick={this.chooseSpeed} data-speed="400">Slow</p>
                        <p onClick={this.chooseSpeed} data-speed="200">Medium</p>
                        <p onClick={this.chooseSpeed} data-speed="100">Fast</p>
                    </div>
                </div>
                <div id="gridSizeSelect" className="controlsSelectable" onMouseEnter={this.openGridSizeDiv} onMouseLeave={this.closeGridSizeDiv}>Grid Size <i className="fa fa-th"></i>
                    <div className="dropDown" id="gridSizeDiv">
                        <p onClick={this.chooseGridSize} data-gridsize="30">30 x 30</p>
                        <p onClick={this.chooseGridSize} data-gridsize="40">40 x 40</p>
                        <p onClick={this.chooseGridSize}  data-gridsize ="50">50 x 50</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Controls;
