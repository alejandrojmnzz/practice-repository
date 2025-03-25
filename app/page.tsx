import React from "react"
import { getCategorisedPosts } from "../lib/posts"
import PostItemList from "../components/PostListItem"
export default function Page() {
  const posts = getCategorisedPosts()

  console.log(posts)
    return (
      <div>
    {posts !== null && 
    Object.keys(posts).map((post) => (
     <PostItemList category={post} posts={posts[post]} key={post}/> 
    ))
    }
    </div>
    )
  }