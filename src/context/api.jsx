import { createContext, useRef } from "react";

export const maincontext=createContext(null);

export const ContextApi=(props)=>{
    let ref1=useRef()
    return<>
    <maincontext.Provider
    value={{ref1}}>{props.children}</maincontext.Provider>

    </>
}