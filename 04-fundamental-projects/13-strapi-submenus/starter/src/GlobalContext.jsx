import { createContext, useContext, useEffect, useState } from "react";
import sublinks from "./data";
export const GlobalContext = createContext();

export const DataLinksConsumer = () => useContext(GlobalContext);

const DataLinks = ({ children }) => {
  const [datalinks, setDatalinks] = useState(sublinks);

  useEffect(() => {
    let datalinksClone = [...datalinks];

    datalinksClone.forEach((obj) => {
      obj.hoverFlag = false;
    });
    setDatalinks(datalinksClone);
  }, []);

  const setHoverFlagOff = (id)=>{
    let idObj = '';
    let datalinksClone = [...datalinks];
    datalinksClone.forEach((obj) => {
      idObj = obj.pageId
      if (obj.pageId == id){
        obj.hoverFlag = false
      }
      });
      setDatalinks(datalinksClone);
  }

  const setHoverFlagOn = (id) => {
    let idObj = '';
    let datalinksClone = [...datalinks];
    datalinksClone.forEach((obj) => {
      idObj = obj.pageId
      if (idObj == id) {
        obj.hoverFlag = true;
      }
    });
    setDatalinks(datalinksClone);
  };
  return (
    <GlobalContext.Provider value={{ datalinks, setHoverFlagOn, setHoverFlagOff }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default DataLinks;
