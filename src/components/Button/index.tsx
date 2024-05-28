import { ButtonContainer, ButtonLink } from './styled'

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
    return <ButtonLink to={to}>{children}</ButtonLink>
  }

  return (
    <ButtonContainer
      $variant={variant}
      type="button"
      title={title}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
