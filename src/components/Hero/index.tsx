import bannerImage from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { BannerHero, Infos } from './styles'

const Hero = () => (
  <BannerHero style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 290,00</span>
          Por R$ 190,00
        </p>
        <Button
          type="button"
          title="Clique para adicionar este jogo ao carrinho"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </BannerHero>
)
export default Hero
