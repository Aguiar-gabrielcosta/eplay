import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRPGGamesQuery()

  return (
    <>
      <ProductsList
        title="Ação"
        background="black"
        games={actionGames}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        title="Esportes"
        background="gray"
        games={sportGames}
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        title="Simulação"
        background="black"
        games={simulationGames}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        title="Luta"
        background="gray"
        games={fightGames}
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        title="RPG"
        background="black"
        games={rpgGames}
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
