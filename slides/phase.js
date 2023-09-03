import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions} from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view'



const Mypager = () => {
  return(
    <PagerView style={Styles.PagerView} initialPage={0}>

    <View key={"Sign In"}>
      <Text></Text>
    </View>

      <View key={"Sign up"}>
        <Text>Sign up</Text>
      </View>
    </PagerView>
  )
};

const Phase = () => {
    const navigation = useNavigation();  

  return (

    <View style = {{flex: 1, justifyContent: 'flex-start' }} >
        <Mypager/>
      <ImageBackground source={require('../assets/tabBG.png')} style = {{flex: 1}}>
          <Text style = {{marginTop: 100, fontSize: 20, fontWeight: '700', color: 'white', alignSelf: 'center'}}>Welcome</Text>
          <Text style = {{color: 'white', alignSelf: 'center',}}>New here? Sign Up</Text> 

          <View style = {{flex: 0.85, backgroundColor: 'white', borderRadius: 5, marginTop: 40, margin: 5}}>
              <View style = {{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
              <Text style = {{fontSize: 20, fontWeight: '600', color: 'gray'}}>Sign In</Text>
              <Text style = {{fontSize: 20, fontWeight: '600', color: 'gray'}}>Sign Up</Text>
              </View>
              <View style = {{borderWidth: 1, height: 1, width:350, borderColor: 'gray'}}></View>
          </View>



      </ImageBackground>
    </View>

  )
}

export default Phase

const Styles = StyleSheet.create({
  PagerView: {
    flex: 1,
  },
});


