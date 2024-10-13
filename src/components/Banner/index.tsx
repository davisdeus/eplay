import Button from '../Button'
import Tag from '../Tag'
import { Image, Precos, Titulo } from './style'
import { formatPreco } from '../ProductsList'
import { useGetJogoEmDestaqueQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetJogoEmDestaqueQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>

        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formatPreco(game.prices.old)}</span> <br />
            por apenas {formatPreco(game.prices.current)}
          </Precos>
        </div>

        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
