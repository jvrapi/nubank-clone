import React from 'react'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { Menu } from '../../components/Menu'
import { Tabs } from '../../components/Tabs'
import { Container, Content } from './styles'

export const MainScreen: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />

        <Card />
      </Content>

      <Tabs />
    </Container>
  )
}
