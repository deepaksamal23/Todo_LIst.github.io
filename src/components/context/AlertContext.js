import React, { createContext } from 'react'
import { useState } from 'react'


export const deleteContext=createContext()
const AlertContext = ({children}) => {
      const [Delete,setDelete]=useState()
  return (
  <deleteContext.Provider value={{Delete,setDelete}}>
      {children}
  </deleteContext.Provider>
  )
}

export default AlertContext