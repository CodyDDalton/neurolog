import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search(){
    const [fetchData, setFetchData] = useState([]);

    useEffect(() => {
        axios.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-cities-demographics&q=&rows=10000&facet=city&facet=state')
        .then((res) => {
            setFetchData(res.data.records)
        })
        
    }, []);

    return(
        <section>
            <h2 id="displayFetch">{fetchData[0].fields.city}</h2>
        </section>
    )
}
export default Search();