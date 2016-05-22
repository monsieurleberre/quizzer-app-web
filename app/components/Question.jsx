module.exports = (function () {
    var React = require('react');
    var ReactDOM = require('react-dom');

    var Question = React.createClass({
        render:function(){
            return (
                <div className="question">
                    <h1>{this.props.question}</h1>
                    <h2>{this.props.tip}</h2>
                </div>
                )
        }
    })
    return Question;
})();