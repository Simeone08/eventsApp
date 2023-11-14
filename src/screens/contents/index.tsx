import React, { useEffect, useState } from "react";
import Api from '../../services/api';
import { FlatList } from 'react-native';

import { 
    Container,
    Title,
 } from "./styles";

export default function Contents(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      async function fetchConteudos(){
        try {
          const response = await Api.get('https://api.doity.com.br/public/aplicativos/v2/eventos/24043/apps/20/conteudos?ativo=1&sort=ordem&direction=asc&limit=200&d_rdhid=59c654f003e03cb1f34fb921af330a24cb619c99');
    
          setData(response.data);
        } catch (error) {
          console.log(error)
        } finally{
          setLoading(false);
        }
      }
    
      fetchConteudos();
    }, []);
    
    type ItemProps = {conteudos: string};
    
    const Item = ({conteudos}: ItemProps) => {
      let titulo = conteudos.titulo;
      let imagem = conteudos
      let descricao = conteudos
    
      return(
        <Container>
            <Title>{titulo}</Title>
        </Container>
      );
    }

    return(
        <>
            <FlatList
                data={data.conteudos}
                renderItem={({item}) => <Item conteudos={item} />}
                keyExtractor={item => item.id}
            />        
      </>
    );
}