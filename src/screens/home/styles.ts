import styled from 'styled-components/native';


export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 5%;
`;

export const ResumeContainer = styled.View`
    height: 90%;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
`;

export const Notificacao = styled.TouchableOpacity`
    border: red;

    width: 152px;
    height: 40px;

    margin-left: 197px;

    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
`;