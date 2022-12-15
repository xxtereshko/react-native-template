import { styled } from '@shared/theme'
import { Typography } from '@shared/ui/atoms/typography/typography'
import { StatusBar } from 'expo-status-bar'

type THomeProps = {}

export const Home = ({}: THomeProps) => {
  return (
    <Wrapper>
      <Title>Hello from @pages/home</Title>
      <Description>Start editing ./src/pages/home/home.tsx</Description>
      <StatusBar style="auto" />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Title = styled(Typography).attrs(() => ({
  variant: 'title',
}))`
  margin-bottom: 10px;
`

const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`
