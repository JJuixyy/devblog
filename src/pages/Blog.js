import React, { useState } from 'react';


const Blog = () => {

    const handleSubmit = () => {
        setSubmit(true);
        setPost({title,content,tags});

    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [submit, setSubmit] = useState("false");

    return (
        <div>
            
        </div>
    )
}

export default Blog

