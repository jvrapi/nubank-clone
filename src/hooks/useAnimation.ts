import { useContext } from 'react'
import {
  AnimationContext,
  AnimationContextProps
} from '../contexts/animationContext'

export function useAnimation(): AnimationContextProps {
  const value = useContext(AnimationContext)
  return value
}
