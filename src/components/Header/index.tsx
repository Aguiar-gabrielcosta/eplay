import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  HeaderBar,
  CartButton,
  LinkItem,
  Links,
  Hamburger,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderBar>
        <HeaderRow>
          <div>
            <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
            <Link to={'/'}>
              <img src={logo} alt="Logo Eplay" />
            </Link>
            <nav>
              <Links>
                <LinkItem>
                  <Link to={'/categories'}>Categorias</Link>
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
          <CartButton onClick={openCart}>
            {items.length} <span>- produto(s)</span>{' '}
            <img src={carrinho} alt="Carrinho de compras" />
          </CartButton>
        </HeaderRow>
        <NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <Links>
            <LinkItem>
              <Link to={'/categories'}>Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to={'#'}>Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to={'#'}>Promoções</Link>
            </LinkItem>
          </Links>
        </NavMobile>
      </HeaderBar>
    </>
  )
}

export default Header
