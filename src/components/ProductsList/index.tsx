import Game from '../../models/Game'
import Product from '../Product'
import { List, ListContainer, Title } from './styles'

export type Props = {
  title: string
  games: Game[]
  background: 'gray' | 'black'
}

const ProductList = ({ title, background, games }: Props) => (
  <ListContainer background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </ListContainer>
)

export default ProductList
