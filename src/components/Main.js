import React from 'react'
import { StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';
import SideMenuL from './SideMenuL';
import { inject, observer } from 'mobx-react';

@inject('GlobalStore')
@observer
export default class Main extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.GlobalStore = this.props.GlobalStore;    
  }

  componentDidMount(){    
    
  }

  componentDidUpdate(){    
    if(this.menudrawer) {
      if(this.GlobalStore.showRibbonMenu){     
        this.menudrawer.openDrawer();
      }
      else{
        this.menudrawer.closeDrawer();
      }
    }
  }


  render(){
    var navigationView = (
      <View style={styles.navView}>
        <SideMenuL />
      </View>
    );

    return(
      <DrawerLayoutAndroid ref={(_menudrawer) => this.menudrawer = _menudrawer}
        drawerWidth={230}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View>          
          <Text>Contenido</Text>
          <Text> {this.GlobalStore.showRibbonMenu ? '' : ''}</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  navView: {
    flex: 1, 
    backgroundColor: '#fff'
  }
});