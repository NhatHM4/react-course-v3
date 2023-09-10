import SideBar from "./SideBar";
import Modal from "./Modal";
import { FaBeer } from 'react-icons/fa';
import { GlobalContextConsumer } from "./GlobalContext";
import {links} from './data'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Home = () => {
    const {isSidebarOpen, setSidebar,isModalOpen,setModal } = GlobalContextConsumer()
    console.log(links)
  return <div className="container">
    {
        isSidebarOpen && <SideBar links={links}/>
    }
    
    <FaBeer  onClick={setSidebar}/>
    <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  </div>;
};

export default Home;
