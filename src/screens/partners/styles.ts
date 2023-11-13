import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  margin: 10px 10px;
  flex-direction: row;

  border-radius: 8px;

  background-color: #DBDBDB;
`;

export const ContainerImagem = styled.View`
    border: 1px solid;
    width: 50%;
    height: 100px;
`;

export const ParceiroImage = styled.Image`
    height: 50px;
    width: 50px;
`;

export const ContainerDados = styled.View`
    width: 50%;
    height: 100%;
`;

export const ParceiroSite = styled.Text`
    font-size: 14px;
    margin-left: 10px;
`;

export const ParceiroDescricao = styled.Text`
    font-size: 14px;
    margin-left: 10px;
`;