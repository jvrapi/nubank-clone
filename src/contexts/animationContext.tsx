import React, { createContext, ReactNode } from 'react'
import { Animated } from 'react-native'

export type AnimationContextProps = {
  translateY: Animated.Value
}

type AnimationContextProviderProps = {
  children: ReactNode
}

export const AnimationContext = createContext({} as AnimationContextProps)

export const AnimationContextProvider: React.FC<AnimationContextProviderProps> =
  ({ children }) => {
    const translateY = new Animated.Value(0)

    return (
      <AnimationContext.Provider value={{ translateY }}>
        {children}
      </AnimationContext.Provider>
    )
  }
