import React, { useEffect, useState } from "react";
import Api from "../../services/api";
import { FlatList } from "react-native";
import { Cards } from "../../components/cards";
import { Container } from './styles';

export default function Schedule(){
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchProg(){
    try {
      const response = await Api.get(`https://api.doity.com.br/public/aplicativos/v2/eventos/24043/atividades_horarios?sort=hora_inicio&direction=ASC&limit=200&d_rdhid=59c654f003e03cb1f34fb921af330a24cb619c99`);
      
      setData(response.data);
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false);
    }
  }

  fetchProg();
}, []);

type ItemProps = {schedule: string};

const Item = ({schedule}: ItemProps) => {
  let nome = schedule.atividade.nome;
  let descricao = schedule.atividade.descricao
  let local = schedule.atividade.local
  let data = schedule.data_atividade
  let hora = schedule.hora_inicio

  return(
    <Container>
      <Cards 
        title={nome}
        description={descricao}
        local={local}
        date={data}
        hour={hora}
      />
    </Container>
)};

    return(
        <>
         <FlatList
        data={data.schedule}
        renderItem={({item}) => <Item schedule={item} />}
        keyExtractor={item => item.id}
      />
        </>
    );
}