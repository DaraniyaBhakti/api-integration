import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

const postUser = () => {
  axios({
    method:'post',
    url:'https://gorest.co.in/public/v1/users',
    data:{
      email:'bd@gmail.com',
      name:'BD',
      gender:'female',
      status:'Active'
    },
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log("error", error)
  })
}

const getUser=() => {
  axios({
    method: 'get',
    url: 'https://gorest.co.in/public/v1/users',
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log("error", error)
  })
}

const deleteUser=() => {
  axios({
    method: 'Delete',
    url: 'https://gorest.co.in/public/v1/users/4176',
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log("error", error)
  })
}

const updateUser=() => {
  axios({
    method: 'PUT',
    url: 'https://gorest.co.in/public/v1/users/4070',
    data:{
      email:'maulikpatel7201@gmail.com',
      name:'MVD',
      gender:'male',
      status:'inactive'
    },
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log("error", error)
  })
}

const GoRestApiScreen = () =>  {
  return (
    <View style={styles.container} >
                <Text style= {styles.heading}>Axios Networking API</Text>
                <View style={styles.button} >
                    <Button 
                        title='POST: Create User' 
                          onPress={() => postUser()}
                    />
                </View>

                <View style={styles.button} >
                     <Button 
                        title='Get: Get UserList' 
                          onPress={() => getUser() }
                    />  
                </View>

                <View style={styles.button} >
                     <Button 
                        title='PUT / PATCH: Update user' 
                        onPress={() => updateUser()}
                    />  
                </View>

                <View style={styles.button} >
                     <Button 
                        title='Delete: Delete user' 
                         onPress={() => deleteUser()}
                    />    
                </View>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  heading:{
      fontWeight:'bold',
       fontSize:20,
        padding:10, 
    margin:10},
  button:{
    margin: 10,
     marginTop:20, 
     padding:20,
      marginHorizontal: 16

  }
});

export default GoRestApiScreen;