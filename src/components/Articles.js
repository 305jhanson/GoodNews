import React, { Component } from 'react'
import Article from './Article';
import PropTypes from 'prop-types';



class Articles extends Component {

    render() {
        console.log(this.props.articles);
        return (
            this.props.articles.map((article) => (
            <Article article={article} />
        )));
    }
}


//prop types
Articles.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Articles;
