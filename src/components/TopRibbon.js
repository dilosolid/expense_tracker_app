import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('GlobalStore')
@observer
export default class TopRibbon extends React.Component{
  
  constructor(props, context) {
    super(props, context);
    this.GlobalStore = this.props.GlobalStore;
    this.onRibbonMenuPress = this.onRibbonMenuPress.bind(this);
  }

  onRibbonMenuPress(){    
    this.GlobalStore.ribbonMenuClick(); 
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.infoBar}></View>
        <TouchableHighlight onPress={this.onRibbonMenuPress}>
          <Text style={styles.menuIcon}> {'\uf0c9'} </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {      
    height:75,
    backgroundColor:'rgb(122, 199, 148)'
  },
  infoBar:{
    paddingTop:30
  },
  menuIcon:{
    color:'white',
    fontFamily: 'awesome',
    fontSize: 36
  }
});
