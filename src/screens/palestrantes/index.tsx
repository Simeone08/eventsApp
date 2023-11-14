import React, { useEffect, useState } from 'react';
import Api from '../../services/api';
import { FlatList } from 'react-native';
import {
     Container,
     ContainerImagem,
     PalestranteImagem,
     ContainerDescriptions,
     Title,
     Empresa,
    } from './styles';

export const Palestrantes = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      async function fetchPalestrantes(){
        try {
          const response = await Api.get('https://api.doity.com.br/public/aplicativos/v2/eventos/24043/palestrantes?limit=200&d_rdhid=59c654f003e03cb1f34fb921af330a24cb619c99');
    
          setData(response.data);
        } catch (error) {
          console.log(error)
        } finally{
          setLoading(false);
        }
      }
    
      fetchPalestrantes();
    }, []);
    
    type ItemProps = {palestrantes: string};
    
    const Item = ({palestrantes}: ItemProps) => {
      let titulo = palestrantes.nome
      let imagem = palestrantes.imagem
      let descricao = palestrantes.empresa
    
      return(
        <Container>
            <ContainerImagem>
                <PalestranteImagem source={{imagem}} />
            </ContainerImagem>

            <ContainerDescriptions>
                <Title>{titulo}</Title>
                <Empresa>{descricao}</Empresa>
            </ContainerDescriptions>
        </Container>
      );
    }

    return(
        <>
            <FlatList
                data={data.palestrantes}
                renderItem={({item}) => <Item palestrantes={item} />}
                keyExtractor={item => item.id}
            />        
      </>
    );
} 