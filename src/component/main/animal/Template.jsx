import {Link} from 'react-router-dom'

const Template = ({id, image, name, rate, price, year}) => {
  return (
    <Link to={`${id}`} key={id} className={`grid--item item-${id}`}>
        <div className="img--container">
            <img src={image} alt={`animal-${id}`} />
        </div>
        <div className="info">
            <div className="flex">
              <h1>{name}</h1> <div className="dot">{rate}</div>
            </div>
            <div className="flex">
              <p>{year}</p> <div className="dot">${price}</div>
            </div>
            <button className="btn">buy</button>
          </div>
    </Link>
  )
}

export default Template
