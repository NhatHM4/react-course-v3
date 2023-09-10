import { useContext, createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextConsumer = ()=> useContext(GlobalContext)

const GlobalContextProvider = ({children})=>{
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const setSidebar = ()=> setSidebarOpen(!isSidebarOpen)
    const [isModalOpen, setModalOpen] = useState(false)
    const setModal = ()=> setModalOpen(!isModalOpen)
    return (
        <GlobalContext.Provider value={{isSidebarOpen,setSidebar,isModalOpen,setModal}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider

