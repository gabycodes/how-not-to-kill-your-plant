import React from 'react';
import truncate from '../helpers/helpers'
class PlantCard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  log = e => {
    console.log(e.target)
  }

  render() {
    const { imgSrc, altText, name, description } = this.props.plant
    return (
      <React.Fragment>
      <div className="plantCard">
        <div className="imgHolder">
          <img src={imgSrc} alt={altText} className="boop"/>
        </div>
        <div className="content">
          <h4>{name}</h4>
          <p>{truncate(description, 25, '...')}</p>
          <a href="#">Open plant bio</a>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default PlantCard;