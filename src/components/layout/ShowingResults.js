import React, { Component } from 'react'

const resultStyle = {
    background: '#E01A0A',
    color: "#ffffff",
    font: "utopia-std, serif",
    textAlign: 'center',
    marginBottom: '15rem',
    margin: 'auto',
    display: 'block',
    borderBottom: '2px white dotted'
}

export class ShowingResults extends Component {
    render() {
        return (
            <div>
                <h2 style={resultStyle}>Showing Results for {this.props.topic}</h2>
            </div>
        )
    }
}

export default ShowingResults
