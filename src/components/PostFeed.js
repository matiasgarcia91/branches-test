// src/components/PostsFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetch5Posts } from "../store/posts/actions";
import { getAllPosts } from "../store/posts/selectors";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);

  useEffect(() => {
    dispatch(fetch5Posts());
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
      <button onClick={() => dispatch(fetch5Posts())}>5 more posts</button>
    </div>
  );
}
