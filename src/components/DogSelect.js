import React from 'react';
import { breeds } from '../util/breeds';
import { inject, observer } from 'mobx-react';
import { DogStore } from '../stores/DogStore'
import "../styles/DogSelect.css"

@inject('dogStore')
@observer
class DogSelect extends React.Component{
  constructor(props){
    super(props)
    this.state = { currentText: "" }
  }

  handleChange = event => {
    this.setState({ currentText: event.target.value })
  }

  render(){
    const { dogStore } = this.props

    return <div className="select__wrap">
      <input 
      className="input__breed"
      type="text"
      placeholder="SEARCH"
      onChange={e => this.handleChange(e)}
      />

      <ul>
        {breeds.map((breed, index) => {
          // breed.includes() : 인자 안에있는 문자가 포함되는지 아닌지 여부를 나타내주는 메소드
          return breed.includes(this.state.currentText) &&
          <li 
          className="breeds__breed" 
          onClick={() => dogStore.setDog(breed)} 
          key={index}>
            {breed}
          </li>
        })}
      </ul>
    </div>
  }

}

export default DogSelect;
