import { View, FlatList } from 'react-native'
import React from 'react'
import Card from '../components/card';

const infoStudents =[
  {
  image: require('../assets/thats.jpg'),
  name: 'Fernando Andree González Meléndez',
  code: '20200612',
  id: 1
  },
  {
    image: require('../assets/hazel.jpg'),
    name: 'Hazel Nicole García Hernández',
    code: '20220546',
    id: 2
    },
]


export default function Screen1() {
  return (
    <View style={{alignItems: "center", justifyContent: "center", marginTop:30}}>
      <FlatList
        data={infoStudents}
        renderItem={({ item }) => {
          return <Card data={item} />;
        }}
        keyExtractor={(infoStudents) => infoStudents.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )   
}