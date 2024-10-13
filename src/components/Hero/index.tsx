import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { BannerHero, Infos } from './styles'

import { formatPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De R$ {formatPreco(game.prices.old)}</span>
          )}
          {game.prices.current && (
            <>Por R$ {formatPreco(game.prices.current)}</>
          )}
          {game.prices.current && (
            <Button
              type="button"
              title="Clique para adicionar este jogo ao carrinho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </p>
      </Infos>
    </div>
  </BannerHero>
)
export default Hero
