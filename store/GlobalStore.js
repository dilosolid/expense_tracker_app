import { observable, action, computed, autorun } from 'mobx';

class GlobalStore {
  @observable showRibbonMenu = false;
  @observable sideMenuItemsL = [{ id:1, text:'Day',   selected:false },
                                { id:2, text:'Week',  selected:false },
                                { id:3, text:'Month', selected:false },
                                { id:4, text:'Year',  selected:false },
                                { id:5, text:'All',   selected:false },
                              ]

  @action changeSelectedLeftMenu = (id) => {
    let items = this.sideMenuItemsL;

    items = items.map((item)=> {
                                item.selected = (item.id === id ? true:false);
                                return item
                              });
};  

  @action ribbonMenuClick = (todo) =>{    
    this.showRibbonMenu = !this.showRibbonMenu;    
  };  
}

const globalStore = new GlobalStore();
export default globalStore;



