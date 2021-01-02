import React, { Component } from 'react'

export class Head extends Component {
    render() {
        return (
            <div>
                <h1 style={headStyle}>Good News!</h1>
                <p style={descript}>A news site devoted to positive news. Who doesn't want some good news?</p>
            </div>
        )
    }
}


const descript = {
    textAlign: 'center',
    background: 'black',
    color: 'white',
    padding: '5px',
    marginBottom: '0'
};



const headStyle={
    textAlign: 'center',
    background: 'black',
    color: 'white',
    padding: '10px',
    marginTop: '0',
    marginBottom: '0',
    fontSize: '50px'
};



export default Head
