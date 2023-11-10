import React, { useEffect, useState } from "react";
import { Sch } from "./styles";
import Api from "../../services/api";
import { FlatList, View, Text } from "react-native";
import axios from "axios";

export default function Schedule(){
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchCars(){
    try {
      const response = await Api.get(`https://api.doity.com.br/public/aplicativos/v2/eventos/24043/parceiros?sort=ordem&direction=ASC&limit=200&d_rdhid=59c654f003e03cb1f34fb921af330a24cb619c99`);
      console.log(response.data);

      setData(response.data);
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false);
    }
  }

  fetchCars();
}, []);

  const sch = ({item}) => {
    return(
        <View>
            <Text>{item.id}</Text>
        </View>
    )
  }

    return(
        <>
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={sch}
        />
        </>
    );
}