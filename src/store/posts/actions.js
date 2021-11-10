import axios from "axios";
const API_URL = `https://ourAPI.com/posts`;

export const savePosts = (posts) => ({
  type: "posts/SAVE_POSTS",
  payload: posts, // [{}, {}, {}, {}]
});

export const saveDetails = (post) => ({
  type: "posts/DETAILS",
  payload: post, // [{}, {}, {}, {}]
});

export const newTestAction = () => ({
  type: "TEST",
});
// Normal actions
// Object => { type, payload }
// const action = { type, payload }
// dispatch(action)

// A Thunk Action
// A function
// dispatch(fetch5Posts);
export const fetch5Posts = () => async (dispatch, getState) => {
  try {
    const allState = getState();
    const amountOfPosts = allState.posts.list.length;

    const response = await axios.get(
      `${API_URL}?offset=${amountOfPosts}&limit=5`
    );

    console.log("this is matias console log", response.data);

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
