import React, { useEffect, useState } from "react";
import  Api  from "../../services/api";
import { FlatList } from "react-native";
import { 
    Container,
    ContainerImagem,
    ParceiroImage,
    ContainerDados,
    ParceiroSite,
    ParceiroDescricao,
 } from './styles';

export default function Partners(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      async function fetchPartners(){
        try {
          const response = await Api.get(`https://api.doity.com.br/public/aplicativos/v2/eventos/24043/parceiros?sort=ordem&direction=ASC&limit=200&d_rdhid=59c654f003e03cb1f34fb921af330a24cb619c99`);
          //console.log(">>>>>>",response.data);
          //console.log("-------",response.data.parceiros[0].categoria);
    
          setData(response.data);
        } catch (error) {
          console.log(error)
        } finally{
          setLoading(false);
        }
      }
    
      fetchPartners();
    }, []);
    
    type ItemProps = {parceiros: string};
    
    const Item = ({parceiros}: ItemProps) => {
      let site = parceiros.url;
      let imagem = parceiros.imagem;
      let descricao = parceiros.categoria.descricao
    
      return(
        <Container>
            <ContainerImagem>
                <ParceiroImage source={{imagem}} />
            </ContainerImagem>

            <ContainerDados>
                <ParceiroSite>{site}</ParceiroSite>
                <ParceiroDescricao>{descricao}</ParceiroDescricao>
            </ContainerDados>
        </Container>
    )};

    return(
        <>
            <FlatList
                data={data.parceiros}
                renderItem={({item}) => <Item parceiros={item} />}
                keyExtractor={item => item.id}
            />        
      </>
    );
}