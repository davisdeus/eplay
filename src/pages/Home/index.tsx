import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import {
  useGetJogosPromocoesQuery,
  useGetJogosEmBreveQuery
} from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: JogosPromocoes } = useGetJogosPromocoesQuery()
  const { data: JogosEmBreve } = useGetJogosEmBreveQuery()

  if (JogosPromocoes && JogosEmBreve) {
    return (
      <>
        <Banner />
        <ProductList
          games={JogosPromocoes}
          title="Promoçôes"
          background="gray"
        />
        <ProductList games={JogosEmBreve} title="Em breve" background="black" />
      </>
    )
  }
  return <h4>Carregando....</h4>
}

export default Home
