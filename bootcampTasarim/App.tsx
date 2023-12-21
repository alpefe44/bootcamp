import { View, Text } from 'react-native';
import React from 'react';
import CustomView from './Components/CustomView';

const App = () => {

  const kutular = [
    {
      color: '#eb7662',
      text1: 'Head & Face',
      text2: '11 diseases'
    },
    {
      color: '#8dc4bb',
      text1: 'Back & Neck',
      text2: '9 diseases'
    },
    {
      color: '#f2982f',
      text1: 'Elbow & Shoulders',
      text2: '12 diseases'
    },
    {
      color: '#327389',
      text1: 'Hand & Arm',
      text2: '2 diseases'
    }

  ];

  return (

    <View style={{ padding: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ color: 'gray' }}>Friday, 15 Dec</Text>
        <Text style={{ color: 'gray' }}>Search</Text>
      </View>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Learn</Text>
        <Text>Choose part of the body</Text>
      </View>

      {
        sayi.map((item , index) => (
          <CustomView key={index} color={item.color} text={item.text1} text2={item.text2} ></CustomView>
        ))
      }

    </View>



  );
};

export default App;