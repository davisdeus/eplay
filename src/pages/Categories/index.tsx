import ProductList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import streetFighter6 from '../../assets/images/streetFighter6.png'
import fifa23 from '../../assets/images/fifa23.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((resp) => resp.json())
      .then((resp) => setGamesAcao(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((resp) => resp.json())
      .then((resp) => setGamesEsportes(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((resp) => resp.json())
      .then((resp) => setGamesSimulacao(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((resp) => resp.json())
      .then((resp) => setGamesLuta(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((resp) => resp.json())
      .then((resp) => setGamesRpg(resp))
  }, [])

  return (
    <>
      <ProductList games={gamesAcao} title="Ação" background="gray" />
      <ProductList games={gamesEsportes} title="Esportes" background="black" />
      <ProductList games={gamesLuta} title="Luta" background="gray" />
      <ProductList games={gamesRpg} title="RPG" background="black" />
      <ProductList games={gamesSimulacao} title="Simulacao" background="gray" />
    </>
  )
}

export default Categories
