const Posts = ({message}) => {
    return(
        <>
            {message.map((posts)=> {
                const {id, title, content, tags} = posts;

                return(
                    <section className="section_post" key={id}>
                        <div>
                            <h2>{title}</h2>
                            <p>{content}</p>
                            <p>{tags}</p>
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default Posts