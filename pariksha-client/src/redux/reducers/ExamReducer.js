import ACTIONS from '../action/'

const Exam =[]

const ExamReducer = (state = Exam, action) => {
    switch(action.type){
        case ACTIONS.GET_EXAMS:
            return action.payload
        default:
            return state
    }
}

export default ExamReducer