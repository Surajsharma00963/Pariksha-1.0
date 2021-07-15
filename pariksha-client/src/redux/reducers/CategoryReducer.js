import ACTIONS from '../action/'

const category =[]

const CategoryReducer = (state = category, action) => {
    switch(action.type){
        case ACTIONS.GET_CATEGORY:
            return action.payload
        default:
            return state
    }
}

export default CategoryReducer