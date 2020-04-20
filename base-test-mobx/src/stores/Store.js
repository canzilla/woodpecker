/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */
import {observable,action } from 'mobx';

class Store {

  @observable objectFromServer  = {}

  @observable openseverity = "error";

  @observable openCloseState = false;

  @observable objectToDisplay = [];

  @action setObjectFromServer = (object) => { 
    this.objectFromServer = object;
  }

  @action setOpenCloseState = (object) => { 
    this.openCloseState = object;
  } 
}

const store = new Store();
export default store;
