import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import exam from './ExamReducer'
import category from './CategoryReducer'
import question from './QuestionReducer'

export default combineReducers({
    auth,
    token,
    exam,
    category,
    question
})