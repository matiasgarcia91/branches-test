// src/components/PostsFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { savePosts } from "../store/posts/actions";
import { getAllPosts } from "../store/posts/selectors";

const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export default function PostsFeed() {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);

  async function fetchNext5Posts() {
    // TODO
    // fetch next set of posts (use offset+limit),
    //  and define the variable `morePosts`

    const response = await axios.get(
      `${API_URL}?offset=${posts.length}&limit=5`
    );

    console.log(response);

    const morePosts = response.data.rows; // [{}, {}, {}]

    dispatch(savePosts(morePosts));
  }

  useEffect(() => {
    // fetchNext5Posts();
    // dispatch(fetchMorePosts())
  }, []);

  return (
    <div className='PostsFeed'>
      <h2>Recent posts</h2>

      {posts.map(p => (
        <div key={p.id} style={{ border: "2px black solid", marginLeft: 30 }}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}

      {/* TODO: render the list of posts */}

      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}
      <button onClick={fetchNext5Posts}>5 more posts</button>
    </div>
  );
}
