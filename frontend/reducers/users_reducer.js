import { RECEIVE_COMMENT_LIKE, RECEIVE_COMMENT_LIKES, RECEIVE_LIKE, REMOVE_COMMENT_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from '../actions/subscription_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USERS:
            let newstate = Object.assign({}, state);
            action.users.map(user => {
                newstate[user.id] = user
            })
            return newstate
        case RECEIVE_LIKE:
            // debugger
            return Object.assign({}, state, { like: action.like[0] ? action.like[0] : action.like });
        case REMOVE_LIKE:
            let ns = Object.assign({}, state);
            delete ns['like'];
            return ns;
        case RECEIVE_COMMENT_LIKE:
            // debugger
            return Object.assign({}, state, { commentLike: action.like[0] ? action.like[0] : action.like });
        case RECEIVE_COMMENT_LIKES:
            if(state['commentLikes'] || state['commentDislikes']) {
                // debugger
                let com = Object.assign({}, state);
                action.like.commentlikes.map((like, idx) => {
                    if(like.kind_of === "like") {
                        com['commentLikes'][action.like.commentlikes[idx].likeable_id] = like
                    }
                })
                action.like.commentlikes.map((dislike, i) => {
                    if(dislike.kind_of === "dislike") {
                        com['commentDislikes'][action.like.commentlikes[i].likeable_id] = dislike
                    }
                })
                return com
            } else {
                let com = Object.assign({}, state, { 'commentLikes' : {}, 'commentDislikes' : {} });
                // debugger
                action.like.commentlikes.map((like, idx) => {
                    if(like.kind_of === "like") {
                        com['commentLikes'][action.like.commentlikes[idx].likeable_id] = like
                    }
                })
                action.like.commentlikes.map((dislike, i) => {
                    if(dislike.kind_of === "dislike") {
                        com['commentDislikes'][action.like.commentlikes[i].likeable_id] = dislike
                    }
                })
                return com
            }
        case REMOVE_COMMENT_LIKE:
            // debugger
            let nsc = Object.assign({}, state);
            if(action.like.kind_of === 'like') {
                delete nsc['commentLikes'][action.like.likeable_id];
            } else {
                delete nsc['commentDislikes'][action.like.likeable_id];
            }
            return nsc;
        case RECEIVE_SUBSCRIPTION:
            // debugger
            return Object.assign({}, state, { subscription: action.subscription });
        case REMOVE_SUBSCRIPTION:
            let sub = Object.assign({}, state);
            delete sub['subscription'];
            sub['subscription'] = []
            return sub;
        default:
            return state;
    }
}

export default usersReducer;