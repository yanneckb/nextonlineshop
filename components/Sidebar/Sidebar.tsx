import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/Language.Context';
import { sidebarText } from '../../contents/sidebar.content';
import * as Styled from './styles';
import Link from 'next/link';

export default function Sidebar() {
  const { language } = useContext(LanguageContext);
  const {
    allProducts,
    electronicsTitle,
    womensTitle,
    mensTitle,
    jeweleryTitle,
  } = sidebarText[language];
  return (
    <Styled.Wrapper>
      <Styled.FilterList>
        <Link href={`/store`} passHref>
          <Styled.Category>{allProducts}</Styled.Category>
        </Link>
        <Link href={`/store/category/electronics`} passHref>
          <Styled.Category>{electronicsTitle}</Styled.Category>
        </Link>
        <Link href={`/store/category/womens-clothing`} passHref>
          <Styled.Category>{womensTitle}</Styled.Category>
        </Link>
        <Link href={`/store/category/mens-clothing`} passHref>
          <Styled.Category>{mensTitle}</Styled.Category>
        </Link>
        <Link href={`/store/category/jewelery`} passHref>
          <Styled.Category>{jeweleryTitle}</Styled.Category>
        </Link>
      </Styled.FilterList>
    </Styled.Wrapper>
  );
}
