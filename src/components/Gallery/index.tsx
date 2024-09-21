import imgGaleria from '../../assets/images/image6.png'
import Section from '../Section'
import { Item, ListItems } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Item>
      <ListItems>
        <img src={imgGaleria} alt="imagem do link" />
      </ListItems>
      <ListItems>
        <img src={imgGaleria} alt="imagem do link" />
      </ListItems>
      <ListItems>
        <img src={imgGaleria} alt="imagem do link" />
      </ListItems>
      <ListItems>
        <img src={imgGaleria} alt="imagem do link" />
      </ListItems>
    </Item>
  </Section>
)

export default Gallery
