import React from 'react';
import { Text, Image } from 'react-native';
import {
    Container,
    DashButton,
} from './styles';

interface DashProps{
    title: string;
    image: string;
    onPress: () => void;
}

export const Resume = ({ title, image, onPress } : DashProps) => {
    return (
        <>
            <Container>
                <Image source={{uri: image}} style={{ width: 150, height:250}}/>
                <DashButton activeOpacity={0.5} onPress={onPress} >
                    <Text>{title}</Text>
                </DashButton>
            </Container>
        </>
    )
}