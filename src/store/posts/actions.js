import axios from "axios";
const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export const savePosts = (posts) => ({
  type: "posts/SAVE_POSTS",
  payload: posts, // [{}, {}, {}, {}]
});

export const saveDetails = (post) => ({
  type: "posts/DETAILS",
  payload: post, // [{}, {}, {}, {}]
});
// Normal actions
// Object => { type, payload }
// const action = { type, payload }
// dispatch(action)

// A Thunk Action
// A function
// dispatch(fetch5Posts);
export const fetch6Posts = () => async (dispatch, getState) => {
  try {
    const allState = getState();
    const amountOfPosts = allState.posts.list.length;

    const response = await axios.get(
      `${API_URL}?offset=${amountOfPosts}&limit=5`
    );

    console.log("response in thunk", response.data);

    const morePosts = response.data.rows; // [{}, {}, {}]
    dispatch(savePosts(morePosts)); // save the data
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchPostById = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log(response); // store this somewhere
    dispatch(saveDetails(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

// app.get("/test", (req, res) => {});

// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) =>
//     next =>
//     action => {
//       if (typeof action === "function") {
//         // action => fetch5Posts
//         return action(dispatch, getState, extraArgument); // function actions => RUN.
//       }

//       return next(action); // non function actions => next => to the store!
//     };
// }
