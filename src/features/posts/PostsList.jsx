import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostsAuthor from './PostsAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {

    const posts = useSelector(selectAllPosts)
    // const users = useSelector(selectAllUsers)
    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
 
    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
              <PostsAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
              <ReactionButtons post={post} />
            </p>
        </article>
    ))

  return (
    <div>
        <h2>Posts</h2>
        {renderedPosts}
    </div>
  )
}

export default PostsList