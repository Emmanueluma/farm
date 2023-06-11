import {MdOutlineLocationOn} from 'react-icons/md'
const TrendTemplate = ({image, name, price, location, alt, rent, key}) => {
  return (
    <article key={key}>
      <p className='rent-sell'>for {rent ? `rent` : `sell`}</p>
        <img src={image} alt={alt}/>
            <div className='n-p'>
                <h3>{name}</h3>
                <h3 className='price'>${price}</h3>
            </div>
        <p>{<MdOutlineLocationOn />}{location}</p>
    </article>
  )
}

export default TrendTemplate
