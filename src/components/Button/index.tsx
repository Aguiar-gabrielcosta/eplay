import * as S from './styled'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  disabled
}: Props) => {
  if (type === 'link' && to != undefined) {
    return <S.ButtonLink to={to}>{children}</S.ButtonLink>
  }

  return (
    <S.ButtonContainer
      $variant={variant}
      type={type === 'button' ? 'button' : 'submit'}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </S.ButtonContainer>
  )
}

export default Button
