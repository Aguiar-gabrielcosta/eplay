import { Container, Title } from './styles'

type Props = {
  title: string
  bgColor: 'gray' | 'black'
  children: JSX.Element
}

const Section = ({ title, bgColor, children }: Props) => {
  return (
    <Container $background={bgColor}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  )
}

export default Section
