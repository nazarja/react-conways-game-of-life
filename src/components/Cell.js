import React, { Component } from 'react';

class Cell extends Component {

    wasManuallySelected = () => {
        const x = this.props.x;
        const y = this.props.y;
        this.props.wasManuallySelected(x, y);
    }

    render() {
        return (
            <div 
                className={this.props.cellClassName}
                onClick={this.wasManuallySelected}
            />
        )
    }
}

export default Cell;