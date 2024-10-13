import ProductList from '../../components/ProductsList'
import {
  useGetJogosAcaoQuery,
  useGetJogosEsportesQuery,
  useGetJogosSimulacaoQuery,
  useGetJogosLutaQuery,
  useGetJogosRpgQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetJogosAcaoQuery()
  const { data: gamesEsportes } = useGetJogosEsportesQuery()
  const { data: gamesSimulacao } = useGetJogosSimulacaoQuery()
  const { data: gamesLuta } = useGetJogosLutaQuery()
  const { data: gamesRpg } = useGetJogosRpgQuery()

  if (gamesAcao && gamesEsportes && gamesSimulacao && gamesLuta && gamesRpg) {
    return (
      <>
        <ProductList games={gamesAcao} title="Ação" background="gray" />
        <ProductList
          games={gamesEsportes}
          title="Esportes"
          background="black"
        />
        <ProductList
          games={gamesSimulacao}
          title="Simulacao"
          background="gray"
        />
        <ProductList games={gamesLuta} title="Luta" background="gray" />
        <ProductList games={gamesRpg} title="RPG" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
