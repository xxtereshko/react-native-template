import { styled } from '@shared/theme'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'

export const App = () => {
  return (
    <Wrapper>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
