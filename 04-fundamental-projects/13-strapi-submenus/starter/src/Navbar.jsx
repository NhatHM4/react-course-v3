import { DataLinksConsumer } from "./GlobalContext";
import Hero from "./Hero";
import Submenu from "./Submenu";
const Navbar = () => {
  const { datalinks, setHoverFlagOff, setHoverFlagOn } = DataLinksConsumer();
  return (
    <>
      <nav className="nav">
        <h5 className="logo"> Strapi</h5>
        <ul className="nav-center">
          {datalinks &&
            datalinks.map((datalinks) => {
              return (
                <li
                  key={datalinks.pageId}
                  onMouseLeave={() => {
                    setHoverFlagOff(datalinks.pageId);
                  }}

                  onMouseEnter={() => {
                    setHoverFlagOn(datalinks.pageId);
                  }}
                >
                  <div key={datalinks.pageId}>
                  <Submenu datalinks={datalinks} />
                  </div>
                  
                </li>
              );
            })}
        </ul>
      </nav>
      <div>
        {datalinks &&
          datalinks.map((datalink) => {
            return <div 
            key={datalink.pageId}
            onMouseLeave={() => {
              setHoverFlagOff(datalink.pageId);
            }}

            onMouseEnter={() => {
              setHoverFlagOn(datalink.pageId);
            }}
            > 
              <Hero datalink={datalink} key={datalink.pageId}/>
            </div>
          })}
      </div>
    </>
  );
};

export default Navbar;
