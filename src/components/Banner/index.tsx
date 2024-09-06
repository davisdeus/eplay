import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'
import Tag from '../Tag'
import { Image, Precos, Titulo } from './style'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>

      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,99
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

export default Banner
