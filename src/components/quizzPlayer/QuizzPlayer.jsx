import React from 'react';
import QuestionFrame from './QuestionFrame.jsx'
import connectToStores from 'alt-utils/lib/connectToStores';
import QuizzStore from './../../stores/QuizzStore';
import Login from './../login/Login.jsx'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Actions from './../../actions/QuizzPlayerActions';
import {Link} from 'react-router';

@connectToStores
class QuizzPlayer extends React.Component {
    constructor(props) {
        super(props);
        console.debug('creating QuizzPlayer')
    }

    componentDidMount() {
        console.debug('QuizzPlayer did mount');
    }

    static getStores() {
        //console.debug('QuizzerPlayer trying to get stores');
        return [QuizzStore];
    }

    static getPropsFromStores() {
        //console.debug('QuizzerPlayer getting props from store Quizzer')
        let quizzStoreState = QuizzStore.getState(); 
        return quizzStoreState;
    }

    render() {
        if (!this.props.currentQuestion) {
            if(!this.props.fetchQuestionsPending) setTimeout(() => Actions.fetchQuestions(), 0);
            return (<CircularProgress mode="indeterminate" on/>);
        }
        return (
            <div classname="QuizzPlayer" width="420">
                <Grid>
                    <Row middle="xs">
                        <Col xs={1}><FlatButton icon={<ChevronLeft />} onClick={Actions.navigateLeft} /></Col>
                        <Col>
                            <QuestionFrame question={this.props.currentQuestion}
                                questionIndex={this.props.currentQuestionIndex}
                                questionsCount={this.props.questions.length} />
                        </Col>
                        <Col xs={1}>
                            <FlatButton icon={<ChevronRight />} onClick={Actions.navigateRight} /></Col>
                    </Row>
                    <Row>
                        <FlatButton label="Edit"
                            linkButton={true}
                            containerElement={<Link to={'editor'} />}/>
                        
                    </Row>

                </Grid>
            </div>
        )
    }


}

export default QuizzPlayer;  