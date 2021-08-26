import Image from "next/image";

import Logo from '../../../public/images/homelogo.png';
import styled from './styles.module.scss';
import {FaShoppingCart} from 'react-icons/fa'

export default function Header() {
  return (
    <header className={styled.headerContainer}>
      <div className={styled.headerContent}>
        <Image src={Logo} alt="Logo" />
        <nav>
          {/* <a className={styled.active} href="#">Home</a>
          <a href="#">Posts</a>
        <a target="_blank" href="http://www.cipoecastanha.com.br" rel="noreferrer">Loja</a> */}
          <h1>NS Personal Shopper</h1>
        </nav>
        <div className={styled.cart}>
          <a href="">
            <strong>Meu carrinho</strong>
            <span>10 itens</span>
          </a>
          <FaShoppingCart color="#e2e1e6" width="40" />
        </div>
        {/* <SignInButton /> */}

      </div>
    </header>
  )
}
