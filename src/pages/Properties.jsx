import React ,{useState} from 'react'
import FlightProperty from '../components/properties/FlightProperty'
import HotelProperty from '../components/properties/HotelProperty'
import { handleToggleBlock } from '../utils/propertyUtils'

const Properties = () => {

    const [openBlocks, setOpenBlocks] = useState([])



  return (
    <section>
        <ul>
            <li onClick={()=>handleToggleBlock("flight",setOpenBlocks)}>Flight
                {openBlocks.includes('flight') && <FlightProperty/>}
                </li>
            <li onClick={()=>handleToggleBlock("hotel",setOpenBlocks)}>Hotel
                {openBlocks.includes('hotel') &&  <HotelProperty/>}</li>
        </ul>
    </section>
  )
}

export default Properties