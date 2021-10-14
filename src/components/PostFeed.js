// src/components/PostsFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchNext5Posts() {
    setData({ ...data, loading: true });

    // TODO
    // fetch next set of posts (use offset+limit),
    //  and define the variable `morePosts`

    // setData({
    //   loading: false,
    //   posts: [...data.posts, ...morePosts],
    // });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className='PostsFeed'>
      <h2>Recent posts</h2>

      {/* TODO: render the list of posts */}

      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}
    </div>
  );
}
