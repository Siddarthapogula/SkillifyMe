import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const PortFolio = () => {

    const [folios, setFolios] = useState([]);
    const user = useSelector(store => store.user);

    const headers = {
        authorization : user?.token
    }

    useEffect(() => {
        async function getFolios() {
            try {
                const result = await axios.get('http://localhost:3000/folio/all', { headers });
                
                if (result?.data?.folios[0]?.folios.length !== 0) {
                    setFolios(result?.data?.folios[0].folios);
                }
            } catch (error) {
                console.error('Error fetching folios:', error);
            }
        }
    
        getFolios();
    }, [user.token]);
    
  return (
    <div className=' '>
        {folios && 
        folios.map((folio)=><Link to={'/Your'} className=' flex' >{folio?.data?.proficientSkill} </Link>)
        }
    </div>
  )
}

export default PortFolio