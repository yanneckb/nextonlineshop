import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/Language.Context.js';
import { navbarText } from '../../contents/navbar.content';
import * as Styled from './styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  const { storeTitle, aboutTitle, contactTitle } = navbarText[language];
  const cart = useSelector((state: any) => state.cart);

  const getItemsCount = () => {
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity,
      0
    );
  };
  return (
    <Styled.Wrapper>
      <div>
        <Styled.Links>
          <Styled.ListItem>
            <Link href='/' passHref>
              <HomeRoundedIcon />
            </Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Link href='/store'>{storeTitle}</Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Link href='/about'>{aboutTitle}</Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Link href='/contact'>{contactTitle}</Link>
          </Styled.ListItem>
        </Styled.Links>
      </div>
      <Styled.RightBar>
        <Styled.Searchbar type='search' placeholder='Suchen...' />
        <Styled.Icons>
          <Styled.Icon>
            <Link href='/favorites' passHref>
              <FavoriteBorderIcon />
            </Link>
          </Styled.Icon>
          <Styled.Icon>
            <Link href='/cart' passHref>
              <Styled.Cart>
                <ShoppingBasketOutlinedIcon />
                <Styled.CartCount>({getItemsCount()})</Styled.CartCount>
              </Styled.Cart>
            </Link>
          </Styled.Icon>
          <Styled.Icon>
            <Link href='/account' passHref>
              <AccountCircleOutlinedIcon />
            </Link>
          </Styled.Icon>
        </Styled.Icons>
        <Styled.SwitchSection></Styled.SwitchSection>
      </Styled.RightBar>
    </Styled.Wrapper>
  );
}
