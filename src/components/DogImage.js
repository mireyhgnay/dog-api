import React from 'react'
import { inject, observer } from 'mobx-react'
import "../styles/DogImage.css"

@inject('dogStore')
@observer
class DogImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      gotImage : false,
      src : ""
    }
  }

  // res : state 갱신, err : console 출력
  handleClick = () => {
    const { dogStore } = this.props
    dogStore.getImage().then(res => {
      this.setState({
        gotImage: true,
        src: res.data.message
      })
    }).catch(err => {
      console.error(err)
    })
  }

  render(){
    const { gotImage, src } = this.state
    const { dogStore } = this.props

    return <div className="album">
      {/* API */}
      <div className="album__api">
        <p>
          I'm <span className="album__api__breed">{dogStore.dog}</span>
          <button onClick={this.handleClick}>FETCH</button>
        </p>
      </div>

      {/* Image */}
      <div className="album__image">
        {gotImage && <img src={src} alt="Dog Image" />}
      </div>
    </div>
  }
}

export default DogImage;