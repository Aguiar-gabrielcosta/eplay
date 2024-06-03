import * as S from './styled'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'link' && to != undefined) {
    return <S.ButtonLink to={to}>{children}</S.ButtonLink>
  }

  return (
    <S.ButtonContainer
      $variant={variant}
      type="button"
      title={title}
      onClick={onClick}
    >
      {children}
    </S.ButtonContainer>
  )
}

export default Button
