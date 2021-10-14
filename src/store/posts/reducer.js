// src/store/post/reducer.js
const initialState = {
  list: [],
  loading: true,
  details: null,
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
    case "posts/DETAILS": {
      // action.payload => { 1post }
      return {
        ...state,
        details: { ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
}

// action
