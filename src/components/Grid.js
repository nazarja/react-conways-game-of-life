import React , { Component } from 'react';
import Cell from './Cell.js';

class Grid extends Component {

    render() {

        let cells = [];
        let gridColumns = ""
        for (let i = 0; i < this.props.gridSize; i++) {
            gridColumns = gridColumns.concat(" auto")
        }

        let cellClassName = "";
        for (let x = 0; x < this.props.gridSize; x++) {
            for (let y = 0; y < this.props.gridSize; y++) {
                let key = `${x}:${y}`;
                cellClassName = this.props.boardState[x][y] ? "cellAlive" : "cellDead";
                cells.push(<Cell wasManuallySelected={this.props.wasManuallySelected} cellClassName={cellClassName} key={key} x={x} y={y}/>);
            } 
        }
        return (
            <div className="Grid">
            <div id="Grid" style={{ gridTemplateColumns: gridColumns}}>
                {cells}
            </div>
            </div>
        )
    }
}

export default Grid;