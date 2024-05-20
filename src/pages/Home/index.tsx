import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['-4%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV, é um RPG de ação em desenvolvimento pea Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV, é um RPG de ação em desenvolvimento pea Blizzard Entertainment.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV, é um RPG de ação em desenvolvimento pea Blizzard Entertainment.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV, é um RPG de ação em desenvolvimento pea Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList title="Produtos" backgorund="gray" games={promocoes} />
      <ProductsList title="Em breve" backgorund="black" games={emBreve} />
    </>
  )
}

export default Home
