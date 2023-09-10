const Person =(props)=>{
    const {id, name, age, image} = props.person
    return (
        <li>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <img src={image} style={{height:"100px", width:"100px"}}/>
        </li>
    )
}

export default Person