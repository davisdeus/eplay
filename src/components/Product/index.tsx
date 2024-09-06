import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illum sit
      porro architecto, fugit molestias magni ducimus aliquam beatae aut ab
      dolorum, dolores ullam molestiae numquam ipsum facere veniam hic.
    </Descricao>
  </Card>
)

export default Product
