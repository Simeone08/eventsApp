import React from 'react';
import { Text, Image } from 'react-native';
import {
    Container,
    DashButton,
} from './styles';

interface DashProps{
    title: string;
    image: string;
}

export const Resume = ({ title, image } : DashProps) => {
    return (
        <>
            <Container>
                <Image source={{uri: image}} style={{ width: 150, height:250}}/>
                <DashButton activeOpacity={0.5} >
                    <Text>{title}</Text>
                </DashButton>
            </Container>
        </>
    )
}