import React from "react";
import { createContext } from "react";

export const languageContext = createContext();

export function LanguageProvider({value,children}){
  return(
    <languageContext.Provider value={value}>
      {children}
    </languageContext.Provider>
  )
}