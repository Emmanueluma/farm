import TrendTemplate from './TrendTemplate';
import './trend.css'
import {BiSearch} from "react-icons/bi"
import { useState } from 'react';
import Trend3 from '../../../asset/trend3.png'
import Trend4 from '../../../asset/trend4.png'
import Trend5 from '../../../asset/trend5.jpg'
import Pig from '../../../asset/pig.png'


const Trend = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    
    const data =[
        {
            id:1,
            image: Trend3,
            name: "cow",
            price: "200",
            rate: 4.5,
            year: "127B Loving Acres Road Khanas City, MO 64110"
        },
        {
            id:2,
            image: Trend4,
            name: "goat",
            price: "200",
            rate: 4.5,
            year: "127B Loving Acres Road Khanas City, MO 64110"
        },
        {
            id:3,
            image: Trend5,
            name: "camel",
            price: "200",
            rate: 4.5,
            year: "127B Loving Acres Road Khanas City, MO 64110"
        },
        {
            id:4,
            image: Pig,
            name: "pig",
            price: "200",
            rate: 4.5,
            year: "127B Loving Acres Road Khanas City, MO 64110"
        },
        {
            id:5,
            image: Trend5,
            name: "camel",
            price: "200",
            rate: 4.5,
            year: "127B Loving Acres Road Khanas City, MO 64110"
        },
        {
            id:6,
            image: Pig,
            name: "pig",
            price: "200",
            rate: 4.5,
            year: "127B Loving Acres Road Khanas City, MO 64110"
        }
    ]

    const newData = data?.filter(val => {
        if(searchTerm == ""){
            return val
        }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val
        }
    }).map(item =>{
        return(
            <TrendTemplate 
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                rent={item.rent}
                location={item.year}
                alt={item.alt}
            />
        )
    })
    return (
        <>
            <header>
                <section className="input">
                    <span>
                    <BiSearch />
                    </span>
                    <input type="search" placeholder='search' onChange={e => setSearchTerm(e.target.value)}/>
                </section>
            </header>
            <section className="trends">
            <div className="header">
                <div>
                    <h1>trending services</h1>
                </div>
                <div>
                    <p>see all ({newData?.length})</p>
                </div>
            </div>
            <section className="trend--item">
                {newData}
            </section>
        </section>
        </>
        
    );
}
 
export default Trend;