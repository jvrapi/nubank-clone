import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  margin-top: ${Platform.OS === 'ios' ? `${getStatusBarHeight()}px` : 0};
  justify-content: center;
`

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`
