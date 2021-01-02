import React, { Component } from 'react'


const articleStyle = {
    width:'100%',
    background: '#E01A0A',
    backgroundClip: 'padding-box',
    borderBottom: '1px #ccc dotted',
    color: "#ffffff",
    font: "utopia-std, serif"
};

const titleStyle = {
    textAlign:'center'

}

const linkStyle = {
    textAlign: 'center',
    display: 'block',
    margin: '0 auto',
    marginBottom: '20px',
    fontSize: 'large',
    color: '#FFDC00',
    overflowWrap: 'break-word'
    
}

const imageStyle = {
    //padding: '0 1rem',
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
    maxWidth:'80%',
  requiresGrid:'true'
}
export default class Article extends Component {
    render() {
        return (
            <div className='article'>
                <div style={articleStyle} className='container'>
                <h1 style={titleStyle}>{this.props.article.title}</h1>
                <h4 style={titleStyle}>{this.props.article.description}</h4>
                <a style={linkStyle} href={this.props.article.url}>{this.props.article.url}</a>
                </div>
            </div>
        )
    }
}

