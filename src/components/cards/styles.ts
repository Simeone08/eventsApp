import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  padding: 20px;
  margin: 10px 10px;

  border-radius: 8px;

  background-color: #DBDBDB;
`;

export const ContainerTitle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
`;

export const ContainerLocal = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Local = styled.Text`
  font-size: 10px;
`;

export const Time = styled.Text`
  font-size: 10px;
`;

export const Hour = styled.Text`
  font-size: 10px;
`;
