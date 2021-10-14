// src/store/post/reducer.js
const initialState = {
  list: [],
  loading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "posts/SAVE_POSTS": {
      // state
      // action => payload => [{}, {}, {}] => array of posts
      //
      return {
        ...state, // ??
        list: [...state.list, ...action.payload],
        loading: false,
      };
    }
    case "posts/SELECT_POST": {
      // action.payload => { 1post }
      return {
        ...state,
        selected: { ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
}

// action
