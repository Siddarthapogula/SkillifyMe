import React, { useEffect, useState } from 'react'
import axios from "axios"
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
    <div>
        {folios && 
        folios.map((folio)=><div>{folio?.data?.proficientSkill}</div>)
      }
    </div>
  )
}

export default PortFolio