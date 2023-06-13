import '../animal/animal.css'
import trend1 from '../../../asset/trend1.png'
import Template from "../animal/Template"
import ListItem from "../animal/ListItem"
import {BiSearch} from "react-icons/bi"
import {useState} from 'react'
import Logout from '../../logout/Logout'


const Seed = ({data}) => {
    const [toggleLogOut, setToggleLogOut] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

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
        key= {item.id}
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
          <section  className="user--picuture background">
              <div className="user-container">
                <img onClick={handleTcan} src={trend1} alt="profile picture" />
              </div>
              <div className="text">
                <h1>food and seed</h1>
                <p>Find the best seeds for your crops</p>
              </div>
          </section>
            
          <header className='background'>
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
            </section>
      </>
    )
}

export default Seed
