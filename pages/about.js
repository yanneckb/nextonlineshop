import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/Language.Context';
import { contentText } from '../contents/about.content';
import * as Styled from '../styles/about.styles';

export default function About() {
  const { language } = useContext(LanguageContext);
  const { headTitle, text } = contentText[language];

  return (
    <Styled.Wrapper>
      <Styled.HeadTitle>{headTitle}</Styled.HeadTitle>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Wrapper>
  );
}
