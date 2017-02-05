import React from 'react';

const CommentsContainer = props => {
    return <div>
        <div className="panel-heading">{props.author}</div>
        <div className="panel-body">{props.text}</div>
    </div>
};

module.exports = Comment;