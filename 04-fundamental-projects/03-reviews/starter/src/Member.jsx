const Member = (props)=>{
    const {id, image, job, name,text} = props.member
    return (
        <div>   
            <img src={image} className="img-container" />
            <h3>{name}</h3>
            <h4>{job}</h4>
            <span>{text}</span>
        </div>
    )
}

export default Member