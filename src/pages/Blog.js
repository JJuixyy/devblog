import React, { useState } from 'react';


const Blog = () => {

    function handleChange(e){

    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [submit, setSubmit] = useState("false");

    return (
        <div>
            Blog
        <form className="post-form">
            
            <label htmlFor="post-title">Titre du post :</label>
            <input type="text" name="post-title" id="post-title" value={title} onChange={(e) =>setTitle(e.target.value)/>

            <label htmlFor="post-content">Contenu : </label>
            <textarea name="post-content" id="post-content" cols="30" rows="10" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

            <label htmlFor="post-title">Titre du post :</label>

            <input type="text" name="post_tags" id="post_tags" value={tags} onChange={(e) => {
                let newTags = e.target.value.split(",");
                setTags(newTags);
            }}/>

            <input type="submit" value="Créer mon post"/>
        </form>
        </div>
    )
}

export default Blog

