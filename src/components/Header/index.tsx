import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div>
          <Link to={'/'}>
            <img src={logo} alt="Logo Eplay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to={'/categorias'}>Categorias</Link>
              </LinkItem>
              <LinkItem>
                <Link to={'#'}>Novidades</Link>
              </LinkItem>
              <LinkItem>
                <Link to={'#'}>Promoções</Link>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <LinkCart href="#">
          0 - produto(s) <img src={carrinho} alt="Carrinho de compras" />
        </LinkCart>
      </HeaderBar>
    </>
  )
}

export default Header
