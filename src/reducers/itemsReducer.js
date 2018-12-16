import { LOAD } from '../actions/actionType';

export default ( state = [], action = {}) => {
    switch(action.type){
        case LOAD:
            return action.payload.results || [];
        default:
            state;
    }
};