import React from 'react'
import { Container, TabsContainer, TabItem, TabText } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { tabItens } from './tab-itens'
import { useAnimation } from '../../hooks/useAnimation'

export const Tabs: React.FC = () => {
  const { translateY } = useAnimation()

  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp'
            })
          }
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp'
        })
      }}
    >
      <TabsContainer>
        {tabItens.map((tab, i) => (
          <TabItem key={i}>
            <Icon name={tab.icon} size={24} color="#FFF" />
            <TabText>{tab.title}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  )
}
