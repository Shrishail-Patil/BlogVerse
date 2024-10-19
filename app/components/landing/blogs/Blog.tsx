import React from 'react'
import BlogCard from '../blog-card/BlogCard'
import styles from './Blog.module.css'
export interface Posts {
    id: number,
    title: string,
    body: string
}


const blogPosts: Posts[] = [
    { id: 1, title: "The Future of AI", body: "Exploring the potential impact of artificial intelligence on our daily lives." },
    { id: 2, title: "Sustainable Living", body: "Simple steps to reduce your carbon footprint and live a more eco-friendly life." },
    { id: 3, title: "The Art of Productivity", body: "Mastering time management and boosting your efficiency in work and life." },
    { id: 4, title: "Unlocking Creative Potential", body: "Discover strategies to nurture your creativity and turn ideas into reality." }
  ]

const Blog = () => {
    // const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const posts : Posts[] = await data.json()
  return (
        <div>
            <h3 className='text-center text-3xl font-bold mb-10'>Latest Posts</h3>
        <div className={styles.blogs}>
            {blogPosts.slice(0,4).map(post =><BlogCard key={post.id} post={post}/>)}
        </div>
        </div>
  )
}

export default Blog
