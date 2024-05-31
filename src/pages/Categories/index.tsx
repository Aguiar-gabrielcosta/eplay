import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()

  if (
    !(actionGames && sportGames && simulationGames && fightGames && rpgGames)
  ) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ProductsList title="Ação" background="black" games={actionGames} />
      <ProductsList title="Esportes" background="gray" games={sportGames} />
      <ProductsList
        title="Simulação"
        background="black"
        games={simulationGames}
      />
      <ProductsList title="Luta" background="gray" games={fightGames} />
      <ProductsList title="RPG" background="black" games={rpgGames} />
    </>
  )
}

export default Categories
