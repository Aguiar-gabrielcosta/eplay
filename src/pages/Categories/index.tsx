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
      <ProductsList
        title="Ação"
        background="black"
        games={actionGames}
        id="action"
      />
      <ProductsList
        title="Esportes"
        background="gray"
        games={sportGames}
        id="sports"
      />
      <ProductsList
        title="Simulação"
        background="black"
        games={simulationGames}
        id="simulation"
      />
      <ProductsList
        title="Luta"
        background="gray"
        games={fightGames}
        id="fight"
      />
      <ProductsList title="RPG" background="black" games={rpgGames} id="rpg" />
    </>
  )
}

export default Categories
