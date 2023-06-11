import './animal.css'
import trend1 from '../../../asset/t4.png'
import Template from "./Template"
import ListItem from "./ListItem"
import {BiSearch} from 'react-icons/bi'
import { useState } from "react"
import Logout from '../../logout/Logout'


const Animal = ({data}) => {

    const [toggleLogOut, setToggleLogOut] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const newData = data?.filter(val => {
      if(searchTerm == ""){
          return val
      }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
      }
  }).map(item => {
      return(
        <Template
        id= {item.id}
        image= {item.image}
        name= {item.name} 
        rate= {item.rate} 
        price= {item.price} 
        year= {item.year}
        />
      )
    })
    const newDiv = data?.map(item => {
      return(
        <ListItem 
            name={item.name}
            key={item.id}
            id={item.id}
        />
      )
    })
    const handleTcan = () => {
      setToggleLogOut(prev => !prev)
    }
  return (
    <>
      {toggleLogOut && <Logout setToggle={setToggleLogOut}/>}
      <section onClick={handleTcan} className="user--picuture">
        <div className="user-container">
          <img src={trend1} alt="profile picture" />
        </div>
        <div className="text">
          <h1>animals</h1>
          <p>Discover and Buy best animals </p>
        </div>
      </section>

      <header>
            <section className="input">
                <span>
                  <BiSearch />
                </span>
                <input type="search" placeholder='search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
            </section>
      </header>

      <section className="list">
        {newDiv}
      </section>

      <section className="grid-container-animals">
        {newData}
        {newData == {} && <h1>not found</h1>}
      </section>
    </>
  )
}

export default Animal
