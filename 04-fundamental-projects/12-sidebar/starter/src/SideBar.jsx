const SideBar = ({links}) => {
  return <div className="sidebar">
    <ul className="list-link">
        {
            links && links.map((item)=>{
                return (
                    <li className="link" key={item.id}>
                        <span>{item.icon}</span>
                        <a href={item.url}>{item.text}</a>
                    </li>
                )
            })
        }
        
    </ul>
  </div>;
};

export default SideBar;
