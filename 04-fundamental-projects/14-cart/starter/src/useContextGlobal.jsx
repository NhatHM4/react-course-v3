import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"


export const useContextGlobal = () =>{
    return useContext(GlobalContext)
}