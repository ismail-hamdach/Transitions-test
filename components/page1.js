import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

const page1 = ({navigation, route}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, [])
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.params.name}</Text>
    </View>
  )
}

export default page1;
