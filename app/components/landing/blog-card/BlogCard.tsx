import React from 'react'
import { Posts } from '../blogs/Blog';
import styles from './BlogCard.module.css'
interface BlogCardProps {
    post: Posts;
  }
  
  const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <div className={styles.blogcard}>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
          <div className="card-actions justify-start align-bottom">
            <a href="" className='font-bold'>Read more</a>
          </div>
      </div>
      </div>

    );
  };
  
  export default BlogCard;