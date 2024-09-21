import { ListContainer, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <ListContainer background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </ListContainer>
)

export default Section
