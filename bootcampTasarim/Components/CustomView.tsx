import { View, Text } from 'react-native'
import React from 'react'

interface CustomViewProps {
    color: string;
    text: string;
    text2 : string;
  }


const CustomView : React.FC<CustomViewProps> = ({color , text ,text2}) => {
  return (
    <View style = {{marginTop:20 , backgroundColor:color , borderRadius:20 , padding:20 , marginHorizontal:10 }}>
              <View style = {{gap:8}}>
              <Text style = {{fontWeight:'bold' , fontSize:18}}>{text}</Text>
              <Text style = {{fontSize:12}}>{text2}</Text>
            </View>
        </View>
  )
}

export default CustomView