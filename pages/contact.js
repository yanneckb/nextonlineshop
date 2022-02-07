import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/Language.Context';
import { contactText } from '../contents/contact.content';
import * as Styled from '../styles/contact.styles';

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const {
    contactTitle,
    contactDescription,
    emailTitle,
    emailPh,
    fornameTitle,
    fornamePh,
    surnameTitle,
    surnamePh,
    reuquestTitle,
    sendBtn,
    serviceTitle,
    serviceSubtitle,
    secSubtitle,
    callUs,
    phoneNumber,
    writeAMail,
    mail,
  } = contactText[language];

  return (
    <Styled.Wrapper>
      <Styled.HeadTitle>{contactTitle}</Styled.HeadTitle>
      <Styled.Text>{contactDescription}</Styled.Text>
      <Styled.ContactForm>
        <Styled.Label>{emailTitle}</Styled.Label>
        <Styled.TextInput type='text' placeholder={emailPh} />
        <Styled.Label>{fornameTitle}</Styled.Label>
        <Styled.TextInput type='text' placeholder={fornamePh} />
        <Styled.Label>{surnameTitle}</Styled.Label>
        <Styled.TextInput type='text' placeholder={surnamePh} />
        <Styled.Label>{reuquestTitle}</Styled.Label>
        <Styled.TextField />
        <Styled.Button>{sendBtn}</Styled.Button>
      </Styled.ContactForm>
      <Styled.Contacts>
        <Styled.Text>{serviceTitle}</Styled.Text>
        <Styled.Title>{serviceSubtitle}</Styled.Title>
        <Styled.Subtitle>{secSubtitle}</Styled.Subtitle>
        <Styled.Subtitle>{callUs}</Styled.Subtitle>
        <Styled.Text>{phoneNumber}</Styled.Text>
        <Styled.Subtitle>{writeAMail}</Styled.Subtitle>
        <Styled.Text>{mail}</Styled.Text>
      </Styled.Contacts>
    </Styled.Wrapper>
  );
}
