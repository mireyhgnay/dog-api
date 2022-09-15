// 견종에 대한 상태값 변경
// api 요청

import { observable, action } from 'mobx';
import axios from 'axios'

export class DogStore{
  @observable dog = "?"

  @action
  setDog = (breed) => {
    this.dog = breed;
  }

  @action
  getImage = async () => await axios.get(`https://dog.ceo/api/breed/${this.dog}/images/random`)
}