import { View, FlatList} from 'react-native'
import React from 'react'
import Card from '../components/card';

const foodFav = [
  {
    image: require('../assets/sushi.jpg'),
    name: 'Sushi',
    code: 'marisco crudo hecho en rollos de arroz envuelto en alga',
    id: 1
  },
  {
    image: require('../assets/churrasco.jpg'),
    name: 'Churrasco',
    code: 'Carne de res con casamiento, queso y aguacate',
    id: 2
  },
  {
    image: require('../assets/hamburguesa.jpg'),
    name: 'Hamburguesas',
    code: 'Carne entre dos panes con acompañamientos',
    id: 3
  },
  {
    image: require('../assets/burrito.jpeg'),
    name: 'Burritos',
    code: 'tortilla grande que envuelve carne y acompañamientos',
    id: 4
  },
  {
    image: require('../assets/lasaña.jpg'),
    name: 'Lasaña',
    code: 'Pasta especial cocinada por capas intercalando con algun relleno',
    id: 5
  },
  {
    image: require('../assets/coctel_camaron.jpg'),
    name: 'Coctel de camaron',
    code: 'camarones marinados con algun tipo de marinado',
    id: 6
  },
  
]

export default function Screen2() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 30 }}>
      <FlatList
        data={foodFav}
        renderItem={({ item }) => {
          return <Card data={item} />;
        }}
        keyExtractor={(foodFav) => foodFav.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}