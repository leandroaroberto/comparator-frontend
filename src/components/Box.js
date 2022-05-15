import React, {useEffect, useState} from 'react';
import axios from 'axios'


const Box = ({result}) => {

    const [productValues, setProductValues] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/list/" + result)
        .then((response) => {
            setProductValues(response.data);
        });
    }, [])

    console.log('productValues', productValues)

    return (
       <div className="box" key={productValues.id}>           
            <h4>Model</h4>
            <p>{productValues.model_name ?? '-'}</p>
            <h4>Memory</h4>
            <p>{productValues.id ?? '-'}</p>
        </div>       
    )
}

export default Box;