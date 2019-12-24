import React, { createContext, useState } from 'react'

export const AssetsContext = createContext()

export const AssetsContextProvider = (props) => {
  const [assets, setAssets] = useState([])

  return(
    <AssetsContext.Provider value={[assets, setAssets]}>
      {props.children}
    </AssetsContext.Provider>
  )
}