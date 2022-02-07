import * as Styled from './styles';
import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/Language.Context';
import { header } from '../../contents/header.conent';

export default function Header() {
  const { language } = useContext(LanguageContext);
  const { headerTitle } = header[language];

  return (
    <Styled.Wrapper>
      <Styled.HeadText>
        <Styled.Title>SHOOOP DEV-OOP</Styled.Title>
        <Styled.Description>{headerTitle}</Styled.Description>
      </Styled.HeadText>
    </Styled.Wrapper>
  );
}
