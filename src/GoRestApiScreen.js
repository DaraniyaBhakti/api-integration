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
    url: 'https://gorest.co.in/public/v1/users/4435',
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



 //onload is the function called when an XMLHttpRequest transaction completes successfully.
 //The onreadystatechange function is called every time the readyState changes.
 const postUserXmlHttp= () => {
  var request = new XMLHttpRequest();

  request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
          return;
      }
      request.onload = function(e) {
          console.log("request failed", this.status );
          // status 201(create)  is user successfully created in POST methos
          if (this.status == 201) { 
              var responeData = JSON.parse(this.response);
              console.log("response data", responeData)
          }else{
              console.log("request failed", request.responseText);
          }
      }
  }

  const bodyData = {
      email:"bdbd@gmail.com",
      name: "BD",
      gender: 'Male',
      status: 'Active'
  };  

  request.open("POST", "https://gorest.co.in/public/v1/users", true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
  request.send(JSON.stringify(bodyData));
}

//onload is the function called when an XMLHttpRequest transaction completes successfully.
//The onreadystatechange function is called every time the readyState changes.
const updateUserXmlHttp = () => {
  var request = new XMLHttpRequest();

  request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
          return;
      }
      request.onload = function(e) {
          console.log("request ", this.status );
          // status 201(create)  is user successfully created in POST methos
          if (this.status == 200) { 
              var responeData = JSON.parse(this.response);
              console.log("response data", responeData)
          }else{
              console.log("request failed", request.responseText);
          }
      }

  }

  const bodyData = {
      email:"bdbd@gmail.com",
      name: "BDBD",
      gender: 'female',
      status: 'inactive'
  };  

  request.open("PUT", "https://gorest.co.in/public/v1/users/4435", true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
  request.send(JSON.stringify(bodyData));
}

//onload is the function called when an XMLHttpRequest transaction completes successfully.
//The onreadystatechange function is called every time the readyState changes.
const getUserXmlHttp = () => {
  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
          return;
      }

      request.onload = function(e) {
          console.log("request ", this.status );
          // status 201(create)  is user successfully created in POST methos
          if (this.status == 200) { 
              var responeData = JSON.parse(this.response);
              console.log("response data", responeData)
          }else{
              console.log("request failed", request.responseText);
          }
      }
  }

  request.open("GET", "https://gorest.co.in/public/v1/users", true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
  request.send();
}

const deleteUserXmlHttp = () => {
  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
          return;
      }

      request.onload = function(e) {
          console.log("request ", this.status );
          // status 201(create)  is user successfully created in POST methos
          if (this.status == 200) { 
              var responeData = JSON.parse(this.response);
              console.log("response data", responeData)
          }else{
              console.log("request failed", request.responseText);
          }
      }
  }

  request.open("DELETE", "https://gorest.co.in/public/v1/users/4435", true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
  request.send();
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

                <Text style= {styles.heading}>XMLHttpRequest Networking API</Text>
                <View style={styles.button} >
                    <Button 
                        title='POST: Create User' 
                          onPress={() => postUserXmlHttp()}
                    />
                </View>

                <View style={styles.button} >
                     <Button 
                        title='Get: Get UserList' 
                          onPress={() => getUserXmlHttp() }
                    />  
                </View>

                <View style={styles.button} >
                     <Button 
                        title='PUT / PATCH: Update user' 
                        onPress={() => updateUserXmlHttp()}
                    />  
                </View>

                <View style={styles.button} >
                     <Button 
                        title='Delete: Delete user' 
                         onPress={() => deleteUserXmlHttp()}
                    />    
                </View>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  heading:{
      fontWeight:'bold',
       fontSize:20,
        padding:10, 
    margin:10},
  button:{
    // margin: 10,
    //  marginTop:20, 
     padding:10,
      marginHorizontal: 16

  }
});

export default GoRestApiScreen;