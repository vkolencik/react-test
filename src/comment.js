import React from 'react';

const Comment = props => {
    return <div className="panel panel-default">
        <div className="panel-heading">{props.author}</div>
        <div className="panel-body">{props.text}</div>
    </div>
};

module.exports = Comment;