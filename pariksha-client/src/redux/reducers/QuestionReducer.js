import ACTIONS from '../action'

const Question =[]

const QuestionReducer = (state = Question, action) => {
    switch(action.type){
        case ACTIONS.GET_QUESTIONS:
            return action.payload.Questions
        default:
            return state
    }
}

export default QuestionReducer