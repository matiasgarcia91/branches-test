// src/pages/PostPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPostById } from "../store/posts/actions";
// import { selectPostAndComments } from "../store/postPage/selectors";

export default function PostPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log("id", id);

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch]);

  // const postData = useSelector(selectPostAndComments);

  return <div>PostPage</div>;
}
