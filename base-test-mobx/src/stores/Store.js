/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */
import {observable,action } from 'mobx';

class Store {

  @observable objectToDisplay  = {}

  @observable openseverity = "error";

  @observable openCloseState = false;

  @action setObjectToDisplay = (object) => { 
    this.objectToDisplay = object;
  }

  @action setOpenCloseState = (object) => { 
    this.openCloseState = object;
  } 
}

export default Store;
