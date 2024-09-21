import { BtnContainer, BtnLink } from './styles'

export type Props = {
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
  if (type === 'button') {
    return (
      <BtnContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </BtnContainer>
    )
  }
  return (
    <BtnLink to={to as string} title={title}>
      {children}
    </BtnLink>
  )
}
export default Button
