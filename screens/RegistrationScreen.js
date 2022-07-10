import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
const RegistrationScreen = () => {
  const {navigate} = useNavigation();

  const [formData, setData] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const [error, SetError] = useState(null);

  const {userName, password, confirmPassword, name} = formData;

  const HandleSubmit = () => {
    if (!error) return navigate('home', {name});
  };

  useEffect(() => {
    if (
      name === '' ||
      userName === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      return SetError('All fields are mandatory !');
    } else if (password !== confirmPassword) {
      return SetError('Passwords do not match');
    } else if (password.length <= 6) {
      return SetError('Password length is to short');
    } else {
      return SetError();
    }
  }, [formData]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={val => {
          setData({...formData, userName: val});
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={val => {
          setData({...formData, name: val});
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={val => {
          setData({...formData, password: val});
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={val => {
          setData({...formData, confirmPassword: val});
        }}
      />
      <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
        <Button
          title="Submit"
          onPress={HandleSubmit}
          disabled={error ? true : false}
        />
      </View>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 0.5,
    paddingVertical: 5,
    marginVertical: 5,
    width: '90%',
    alignSelf: 'center',
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginVertical: 10,
  },
});

export default RegistrationScreen;
