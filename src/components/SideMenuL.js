import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideMenuButton from "./SideMenuButton";

import { inject, observer } from 'mobx-react';

@inject('GlobalStore')
@observer
export default class SideMenuL extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.GlobalStore = this.props.GlobalStore;
    this.onBtnPress = this.onBtnPress.bind(this);
  }

  onBtnPress(id){    
    this.GlobalStore.changeSelectedLeftMenu(id);
  }

  getMenuItems(){
    //console.log(this);
    let items = this.GlobalStore.sideMenuItemsL;
    return items.map((item)=> <SideMenuButton key={item.id}
                                              id={item.id}
                                              label={item.text}
                                              selected={item.selected}
                                              onBtnPress={this.onBtnPress} /> );
  }

  render(){
    return(
      <View style={styles.container}>
        { this.getMenuItems ()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    paddingTop:10
  }, 
});