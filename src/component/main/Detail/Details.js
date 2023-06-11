import "./details.css"
import {useParams, useNavigate} from 'react-router-dom';



const Details = ({data}) => {
  const {id} = useParams();
  const newData = data?.find(item => item.id == id);
  const navigator = useNavigate();
  const back = () => {
    navigator(-1)
  }
  const whatsappText = `hello, am messaging about the ${newData.name} on your website`;
  return (
    <section className="detail-link">
      <a className="back" onClick={back}>back</a>
      <div className="img--container">
        <img src={newData && newData.image} alt="" />
      </div>
      <p>price: N{newData && newData.price}</p>
      <a className="btn" href={`https://api.whatsapp.com/send?phone=9125246051&text=${whatsappText}`} target="_blank" rel="noopener noreferrer">chat</a>
    </section>
  )
}

export default Details
