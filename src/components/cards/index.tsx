import React from 'react';
import { 
    Container,
    ContainerTitle,
    Title,
    Subtitle,
    ContainerLocal,
    Local,
    Time,
    Hour,
} from './styles';


interface CardsProps{
    title: string;
    description: string;
    local: string;
    date: string;
    hour: string;
}

export const Cards = ({ title, description, local, date, hour } : CardsProps) => {
    return (
        <Container>

            <ContainerTitle>
                <Title>{title}</Title>
                <Subtitle>{description}</Subtitle>
            </ContainerTitle>

            <ContainerLocal>
                <Local>{local}</Local>
                <Time>{date}</Time>
                <Hour>{hour}</Hour>
            </ContainerLocal>

        </Container>
    );
}