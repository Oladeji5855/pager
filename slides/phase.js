import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import React, { forwardRef, useRef, useState } from 'react'
import PagerView from 'react-native-pager-view'



const Mypager = forwardRef((props, ref) => {
  const handlePageChange= (e) => {
  const currentPageIndex = e.nativeEvent.position;
  props.onPageChange(currentPageIndex);
  };
  return(
    <PagerView style = {Styles.PagerView} initialPage = {0} scrollEnabled = {false} ref = {ref} onPageSelected = {handlePageChange}>

    <View key = {"1"}>

      <View style = {{justifyContent: 'center', padding: 10, alignContent: 'center', flexDirection: 'column'}}>
        <View style = {{paddingTop: 20}}>
        <View style = {{height:45, width: 320, backgroundColor: 'gray', borderRadius: 5, alignSelf: 'center'}}>
        <TextInput style = {{height: 40, width: 300, backgroundColor: 'gray', alignSelf: 'center', borderRadius: 5}} 
        placeholder = 'Email'  placeholderTextColor = {'white'} ></TextInput>
        </View>
        </View>

       <View style = {{paddingTop: 20}}>
       <View style = {{height:45, width: 320, backgroundColor: 'gray', borderRadius: 5, alignSelf: 'center'}}>
        <TextInput style = {{height: 40, width: 300, backgroundColor: 'gray', alignSelf: 'center', borderRadius: 5}} 
        placeholder = 'Password'  placeholderTextColor = {'white'} ></TextInput>
        </View>
       </View>

        <Text style = {{textAlign: 'right', padding: 5}}>Forgot Password?</Text>

        <View style = {{paddingTop: 180}}>
        <TouchableOpacity style = {{height: 50, width: 300, backgroundColor: 'purple', borderRadius: 5, alignSelf: 'center', justifyContent: 'center'}}>
        <Text style = {{textAlign: 'center', color: 'white', fontWeight: '400', fontSize: 20}}>Sign In</Text>
        </TouchableOpacity>
        </View>
      
      </View>
    </View>

      <View key = {"2"}>

        <View style = {{padding:10, justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
        <View style = {{paddingTop:15}}>
        <View style = {{height:45, width: 320, backgroundColor: 'gray', borderRadius: 5, alignSelf: 'center'}}>
        <TextInput style = {{height: 40, width: 300, backgroundColor: 'gray', alignSelf: 'center', borderRadius: 5}} 
        placeholder = 'Name'  placeholderTextColor = {'white'} ></TextInput>
        </View>
        </View>

        <View style = {{paddingTop:15}}>
        <View style = {{height:45, width: 320, backgroundColor: 'gray', borderRadius: 5, alignSelf: 'center'}}>
        <TextInput style = {{height: 40, width: 300, backgroundColor: 'gray', alignSelf: 'center', borderRadius: 5}} 
        placeholder = 'Email'  placeholderTextColor = {'white'} ></TextInput>
        </View>
        </View>

        <View style = {{paddingTop:15}}>
        <View style = {{height:45, width: 320, backgroundColor: 'gray', borderRadius: 5, alignSelf: 'center'}}>
        <TextInput style = {{height: 40, width: 300, backgroundColor: 'gray', alignSelf: 'center', borderRadius: 5}} 
        placeholder = 'Password'  placeholderTextColor = {'white'} ></TextInput>
        </View>
        </View>

        <View style = {{paddingTop:15, paddingBottom: 110}}>
        <View style = {{height:45, width: 320, backgroundColor: 'gray', borderRadius: 5, alignSelf: 'center'}}>
        <TextInput style = {{height: 40, width: 300, backgroundColor: 'gray', alignSelf: 'center', borderRadius: 5}} 
        placeholder = 'Confirm Password'  placeholderTextColor = {'white'} ></TextInput>
        </View>
        </View>

        <TouchableOpacity style = {{height: 50, width: 300, backgroundColor: 'purple', borderRadius: 5, alignSelf: 'center', justifyContent: 'center'}}>
        <Text style = {{textAlign: 'center', color: 'white', fontWeight: '400', fontSize: 20}}>Sign Up</Text>
        </TouchableOpacity>

        </View>
      </View>
    </PagerView>
  )
});

const Phase = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pager = useRef();
    const navigation = useNavigation();  
    const handlePageChange= (pageIndex) => {
    setCurrentPage(pageIndex);
    };
  return (
      <SafeAreaView style = {{flex: 1}}>
 <View style = {{flex: 1, justifyContent: 'flex-start'}} >
      <ImageBackground source={require('../assets/tabBG.png')} style = {{flex: 1}}>
          <Text style = {{marginTop: 70, fontSize: 20, fontWeight: '700', color: 'white', alignSelf: 'center'}}>Welcome</Text>
          <Text style = {{color: 'white', alignSelf: 'center',}}>New here? Sign Up</Text> 

          <View style = {{flex: 0.85, backgroundColor: 'white', borderRadius: 5, marginTop: 40, margin: 5}}>
              <View style = {{flexDirection: 'row', justifyContent: 'space-around', margin: 15}}>

                <TouchableOpacity onPress={() => {pager.current.setPage(0)}}>
                <Text style = {{fontSize: 20, fontWeight: '600', color: 'gray'}}>Sign In</Text>
                </TouchableOpacity>
              
              <TouchableOpacity onPress={() =>{pager.current.setPage(1)}}>
              <Text style = {{fontSize: 20, fontWeight: '600', color: 'gray'}}>Sign Up</Text>
              </TouchableOpacity>
              </View>
              <View style = {{borderWidth: 1, height: 1, width:350, borderColor: 'gray'}}></View>
              <Mypager ref={pager} onpPageChange = {handlePageChange}/>
          </View>



      </ImageBackground>
    </View>
      </SafeAreaView>
   

  )
}

export default Phase

const Styles = StyleSheet.create({
  PagerView: {
    flex: 1,
  },
});


