export const savePosts = posts => ({
  type: "posts/SAVE_POSTS",
  payload: posts, // [{}, {}, {}, {}]
});
