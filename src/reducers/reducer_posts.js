import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

const PostsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
        //convert array to object
            return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}
export default PostsReducer;