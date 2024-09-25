import { useEffect, useState } from 'react'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'
import Tag from '../Tag'
import { Image, Precos, Titulo } from './style'
import { Game } from '../../pages/Home'
import { formatPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((resp) => resp.json())
      .then((resp) => setGame(resp))
  }, [])

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
          to="/produto"
          title="Clique para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
