import { useState } from 'react'
import Section from '../Section'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'
import * as S from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  show: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    show: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({ show: false, type: 'image', url: '' })
  }

  return (
    <>
      <Section title="Galeria" bgColor="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({ show: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Imagem ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximixar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.show ? 'show' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
