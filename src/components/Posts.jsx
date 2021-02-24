const Posts = ({message}) => {
    return(
        <>
            {message.map((posts)=> {
                const {id, titlePost, contentPost, tagsPost} = posts;

                return(
                    <section className="section_post" key={id}>
                        <div>
                            <h2>{titlePost}</h2>
                            <p>{contentPost}</p>
                            <p>{tagsPost}</p>
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default Posts