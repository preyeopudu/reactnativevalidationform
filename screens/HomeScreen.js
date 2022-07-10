import {View, Text, TextInput} from 'react-native';
import React from 'react';

const HomeScreen = ({route}) => {
  console.log(route);
  const {name} = route.params;
  return (
    <View>
      <Text>Thank you for registering {name}</Text>
    </View>
  );
};

export default HomeScreen;
