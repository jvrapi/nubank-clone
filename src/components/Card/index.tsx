import React from 'react'
import { Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State
} from 'react-native-gesture-handler'

import {
  Container,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from './styles'
import { useAnimation } from '../../hooks/useAnimation'

type EventType = HandlerStateChangeEvent<PanGestureHandlerEventPayload>

export const Card: React.FC = () => {
  const { translateY } = useAnimation()

  let offSet = 0

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )

  function onHandlerStateChanged(event: EventType) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offSet += translationY

      // Finaliza a animação caso o usuario arrasta mais de 100px
      if (translationY >= 100) {
        opened = true
      } else {
        translateY.setValue(offSet)
        translateY.setOffset(0)
        offSet = 0
      }
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offSet = opened ? 380 : 0
        translateY.setOffset(offSet)
        translateY.setValue(offSet)
      })
    }
  }
  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}
    >
      <Container
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              })
            }
          ]
        }}
      >
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </CardHeader>

        <CardContent>
          <Title>Saldo disponível:</Title>
          <Description>R$: 198.569,70</Description>
        </CardContent>

        <CardFooter>
          <Annotation>
            Transferência de R$ 20,00 recebida de João Vitor Santos hoje às
            6:00H
          </Annotation>
        </CardFooter>
      </Container>
    </PanGestureHandler>
  )
}
