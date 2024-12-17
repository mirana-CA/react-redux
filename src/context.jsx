import React, { createContext, useState } from 'react'

export const CounterContext = createContext()
const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0)
function increase() {
    setCount(count+1)
}
function decrease() {
    setCount(count-1)
}
  return <CounterContext.Provider value={{count,setCount,increase,decrease}}>{children}</CounterContext.Provider>
}

export default CounterProvider
