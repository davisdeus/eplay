import Section from '../Section'
import { Action, Item, ListItems, Modal, ModalContent } from './styles'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'

import residentEvil from '../../assets/images/resident.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import streetFighter from '../../assets/images/StreetFighter.jpg'
import close from '../../assets/images/close.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: residentEvil
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/rN_PBAK5YyM?si=L2cZoSPg0-wGsvru'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaItem = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Item>
          {mock.map((media, index) => (
            <ListItems key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} do ${name}`}
              />
              <Action>
                <img
                  src={getMediaItem(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </ListItems>
          ))}
        </Item>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone close x" />
          </header>
          <img src={streetFighter} />
        </ModalContent>
        <div className="overlay">ddddddd</div>
      </Modal>
    </>
  )
}

export default Gallery
