import React, {useEffect, useState} from 'react';
import axios from 'axios'


const Box = ({result}) => {
    const [productValues, setProductValues] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/list/" + result)
        .then((response) => {
            setProductValues(response.data);
        });
    }, [result])

    const finalResult = productValues.length == 1 ? productValues.map(prod => (
                    <div className="box" key={prod.id}>  
                        <h4>Model</h4>
                        <p>{prod.model_name ?? '-'}</p>
                        <h4>Memory</h4>
                        <p>{prod.ram ?? '-'} {prod.ram_type ?? ''}</p>
                        <h4>HDD</h4>
                        <p>{prod.hard_disk_amount ?? '-'} x {prod.hard_disk_storage ?? ''} {prod.hard_disk_type ?? ''}</p>
                        <h4>Location</h4>
                        <p>{prod.location ?? '-'}</p>
                        <h4>Price</h4>
                        <p>{prod.price ?? '-'}</p>
                    </div>)) : ''

    return finalResult;
        
}

export default Box;