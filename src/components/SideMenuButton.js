import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

function SideMenuButton(props) {  

  function onBtnPress(){ 
    props.onBtnPress(props.id);
  }

  return (
          <TouchableHighlight onPress={onBtnPress}>
            <View style={[styles.container, { backgroundColor: props.selected ? 'rgb(169, 224, 187)': 'white' } ]} >
              <Text style={styles.label} >{ props.label }</Text>
            </View>
          </TouchableHighlight>
        );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,    
    width:210,
    height:50,
    marginLeft:10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: 'rgb(122, 199, 148)',
    justifyContent:'center',
    alignItems:'center',    
  },
  bgColorNormal: {
    backgroundColor:'white',
  },
  bgColorSelected: {
    backgroundColor:'rgb(169, 224, 187)',
  },
  label:{
    fontSize:16,	
  }
});

export default SideMenuButton;