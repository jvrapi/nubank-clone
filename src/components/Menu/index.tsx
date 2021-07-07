import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { navItens } from './nav-itens'

import { theme } from '../../global/styles/theme'
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles'
import { useAnimation } from '../../hooks/useAnimation'

export const Menu: React.FC = () => {
  const { translateY } = useAnimation()

  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1]
        })
      }}
    >
      <Code>
        <QRCode
          value="https://github.com/jvrapi"
          size={80}
          backgroundColor="#fff"
          color={theme.colors.primary}
        />
      </Code>
      <Nav>
        {navItens.map((item, i) => (
          <NavItem key={i}>
            <Icon name={item.icon} size={20} color="#FFF" />
            <NavText>{item.title}</NavText>
          </NavItem>
        ))}
      </Nav>

      <SignOutButton
        onPress={() => {
          return null
        }}
      >
        <SignOutButtonText>Sair do APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}
