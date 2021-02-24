import React, { useState } from 'react'
import "../styles/components/_Blog.scss";
import data from '../data';
import Posts from '../components/Posts';

const Blog = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setPost(title,content,tags);
        console.log(post);
    }

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [tags,setTags] = useState([]);
    const [submit,setSubmit] = useState(false);
    const [post,setPost] = useState({});
    const [message, setMessage] = useState(data)

    return (
        <div className="blog">
            <h2>DevBlog Publication</h2>
            <form className="post-form" onSubmit={handleSubmit}>
                <label htmlFor="post-title">Titre du post : </label>
                <input type="text" name="post-title" id="post-title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <label htmlFor="post-content">Contenu : </label>
                <textarea name="post-content" id="post-content" cols="70" rows="10" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

                <label htmlFor="post-tags">Tags/Catégories </label>
                <input type="text" name="post-tags" id="post-tags" value={tags} onChange={(e)=>{
                    let newTags = e.target.value.split(',');
                    setTags(newTags);
                }}/>
                <input type="submit" value="Créer mon post" id="submit"/>
            </form>

            <Posts message={message}/>
        </div>
    )
}

export default Blog
