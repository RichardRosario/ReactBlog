import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

const PostsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state,  };
            // newState[post.id] = post;
            // return newState;
            return {
                ...state,
                [action.payload.data.id]: action.payload.data
            };

        case FETCH_POSTS:
        //convert array to object
            return _.mapKeys(action.payload.data, 'id');

        case DELETE_POST:
            return _.omit(state, action.payload);

        default:
            return state;
    }
}
export default PostsReducer;