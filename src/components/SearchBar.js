import React, { Component } from 'react'

const searchStyle = {
    backgroundColor: 'black',
    color: '#fff',
    paddingBottom: '2rem',
    paddingTop: '0.5rem'
    }


export default class SearchBar extends Component {

    state = {
        topic: '',
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addSearch(this.state.topic);
        console.log(this.state);
        

    }

    

    render() {
        return (
            <form className="newForm" onSubmit={this.onSubmit} style={searchStyle}>
                
                <input
                    type='text'
                    name='topic'
                    placeholder="Topic"
                    style={{ marginLeft:'28%', color:'black', flex: '10', padding: '5px', width:'40%', textAlign:'center' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <input
                    type="submit"
                    className="btn"
                    value="Search"
                />
            </form>
        )
    }
}
