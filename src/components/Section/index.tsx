import * as S from './styles'

type Props = {
  title: string
  bgColor: 'gray' | 'black'
  children: JSX.Element
}

const Section = ({ title, bgColor, children }: Props) => {
  return (
    <S.Container $background={bgColor}>
      <div className="container">
        <S.Title>{title}</S.Title>
        {children}
      </div>
    </S.Container>
  )
}

export default Section
