import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Portfolio = () => {
    const [portfolioList, setPortfolioList] = useState([]);
    const [id, setId] = useState(null);
    const user = useSelector(store => store.user);
    const headers = {
        authorization: user?.token
    };

    useEffect(() => {
        async function fetchPortfolios() {
            try {
                const result = await axios.get('http://localhost:3000/folio/all', { headers });
                
                if (result?.data?.folios[0]?.folios.length !== 0) {
                    const fetchedId = result?.data?.folios[0]._id;
                    setId(fetchedId);
                    
                    if (fetchedId !== id) {
                        setPortfolioList(result?.data?.folios[0].folios);
                    }
                }
            } catch (error) {
                // console.error('Error fetching portfolios:', error);
            }
        }
    
        fetchPortfolios();
    }, [user.token, id]);

    
    return (
        <div className=' p-2'>
            {portfolioList && 
            portfolioList.map((portfolio, index) => (
                <Link key={index}   to={`/portfolio/${portfolio?.data?.name}/${portfolio?._id}`} className='flex px-3 py-1 bg-red-50 my-3 rounded-lg  hover:bg-red-200'>
                    {portfolio?.data?.proficientSkill}
                </Link>
            ))}
        </div>
    );
};

export default Portfolio;
