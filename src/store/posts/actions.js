import axios from "axios";
const API_URL = `https://ourAPI.com/posts`;


/*

 /\                 /\
/ \'._   (\_/)   _.'/ \
|.''._'--(o.o)--'_.''.|
 \_ / `;=/ " \=;` \ _/
   `\__| \___/ |__/`
jgs     \(_|_)/
         " ` "

*/

/*

      ,i \
    ,' 8b \
  ,;o  `8b \
 ;  Y8. d8  \
-+._ 8: d8. i:
    `:8 `8i `8
      `._Y8  8:  ___
         `'---Yjdp  "8m._
              ,"' _,o9   `m._
              | o8P"   _.8d8P`-._
              :8'   _oodP"   ,dP'`-._
               `: dd8P'   ,odP'  do8'`.
                 `-'   ,o8P'  ,o8P' ,8P`.
                   `._dP'   ddP'  ,8P' ,..
                      "`._ PP'  ,8P' _d8'L..__
                          `"-._88'  .PP,'7 ,8.`-.._
                               ``'"--"'  | d8' :8i `i.
                                         l d8  d8  dP/
                                          \`' J8' `P'
                                           \ ,8F  87
                                           `.88  ,'
                                            `.,-' mh



*/


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
/*

 /\                 /\
/ \'._   (\_/)   _.'/ \
|.''._'--(o.o)--'_.''.|
 \_ / `;=/ " \=;` \ _/
   `\__| \___/ |__/`
jgs     \(_|_)/
         " ` "

*/
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

/*

 /\                 /\
/ \'._   (\_/)   _.'/ \
|.''._'--(o.o)--'_.''.|
 \_ / `;=/ " \=;` \ _/
   `\__| \___/ |__/`
jgs     \(_|_)/
         " ` "

*/
