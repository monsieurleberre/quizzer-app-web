module.exports = (function () {
    var React = require('react');
    var ReactDOM = require('react-dom');

    var Answer = React.createClass({
        render:function(){
            return (
                <div className="answer">
                    {this.props.key}{this.props.score}
                </div>
                )
        }
    })
    return Answer;
})();