import { useState } from 'react'

import { GalleryItem } from '../../pages/Home'

import Section from '../Section'
import { Action, Item, ListItems, Modal, ModalContent } from './styles'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'

import residentEvil from '../../assets/images/Residente6.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import close from '../../assets/images/close.png'

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
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })
  // const [modalEstaAberto, seModalEstaAberto] = useState(false)
  // const [modalUrl, setModalUrl] = useState('')

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaItem = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Item>
          {items.map((media, index) => (
            <ListItems
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
                // seModalEstaAberto(true)
                // setModalUrl(media.url)
              }}
            >
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

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Ícone close x"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
