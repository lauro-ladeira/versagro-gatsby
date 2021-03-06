import React from "react"
import * as S from "./styled"

const ContatoHome = () => {
  return (
    <S.ContatoWrapper>
      <S.ContatoContainer>
        <S.TextContainer>
          <S.Title>Vamos Conversar?</S.Title>
          <S.Text>
            Preencha seus dados e nós entramos em contato com você.
          </S.Text>
        </S.TextContainer>
        <S.FormContainer>
          <S.Input
            style={{ gridArea: "name" }}
            type="text"
            placeholder="Nome"
          />

          <S.Input
            style={{ gridArea: "email" }}
            type="email"
            placeholder="E-mail"
          />
          <S.Input
            style={{ gridArea: "tel" }}
            type="tel"
            placeholder="Telefone"
          />

          <S.InputMessage
            style={{ gridArea: "message" }}
            placeholder="Mensagem"
          />
          <S.SubmitButton to="/">Enviar</S.SubmitButton>
        </S.FormContainer>
      </S.ContatoContainer>
    </S.ContatoWrapper>
  )
}

export default ContatoHome
