import styled from "styled-components/native";


export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 6px 6px rgba(0, 0, 0, 0.3);

    height: 250px;
    width: 150px;

    border-radius: 8px;
`;

export const DashButton = styled.TouchableOpacity`
    height: 21%;
    width: 101%;
    position: absolute;

    align-items: center;
    justify-content: center;

    margin-top: 140%;

    border-radius: 0 0 8px 8px;
    
    background-color: #949496;
`;