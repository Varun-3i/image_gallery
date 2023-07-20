import React from 'react'

const Gallery = ({data}) => {
    return (
        <div className="container">
  {data.map((image, index) => {
    if (index % 3 === 0) {
      return (
        <div className="row" key={index}>
          <div className="col-md-4">
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              height="200"
              width="250"
              alt={image.title}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-md-4" key={index}>
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            height="200"
            width="250"
            alt={image.title}
          />
        </div>
      );
    }
  })}
</div>


    )
}

export default Gallery