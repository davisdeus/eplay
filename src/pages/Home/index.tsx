import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import streetFighter6 from '../../assets/images/streetFighter6.png'
import fifa23 from '../../assets/images/fifa23.png'

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
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((resp) => resp.json())
      .then((resp) => setPromocoes(resp))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((resp) => resp.json())
      .then((resp) => setEmBreve(resp))
  }, [])

  return (
    <>
      <Banner />
      <ProductList games={promocoes} title="Promoçôes" background="gray" />
      <ProductList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
