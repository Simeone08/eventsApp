import React, { useEffect, useState } from "react";
import Api from "../../services/api";
import { FlatList } from "react-native";
import {
    Container,
    ContainerBanner,
    Banner,
    ContainerDescricao,
    Title,
    Service,
    Nome,
    ContainerMapa,
    Mapa,
} from './styles';

export default function Notifications(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      async function fetchPartners(){
        try {
          const response = await Api.get(`https://api.doity.com.br/public/aplicativos/v2/eventos/24043/apps/20/notificacoes?status=3&sort=id&direction=desc&limit=200&servico_id=1&d_rdhid=59c654f003e03cb1f34fb921af330a24cb619c99`);
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
    
    type ItemProps = {notificacoes: string};
    
    const Item = ({notificacoes}: ItemProps) => {
      let title = notificacoes.titulo;
      let service = notificacoes.servico.nome;
      let nome = notificacoes.app.nome;
      let banner = notificacoes.app.banner;
      let mapa = notificacoes.app.mapa;
    
      return(
        <Container>
            <ContainerBanner>
                <Banner source={{uri: banner}}></Banner>
            </ContainerBanner>

            <ContainerDescricao>
                <Title>{title}</Title>
                <Service>{service}</Service>
                <Nome>{nome}</Nome>
            </ContainerDescricao>

            <ContainerMapa>
                <Mapa source={{uri: mapa}}></Mapa>
            </ContainerMapa>

        </Container>
    )};

    return(
        <>
            <FlatList
                data={data.notificacoes}
                renderItem={({item}) => <Item notificacoes={item} />}
                keyExtractor={item => item.id}
            />    
        </>
    );
}