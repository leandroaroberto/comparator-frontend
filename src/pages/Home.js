import React, {useState, useEffect} from 'react';

import Header from '../components/Header'
import Search from '../components/Search'
import Comparator from '../components/Comparator'
import PageResults from '../components/PageResults'

import axios from 'axios'

function Home() {

  const [products, setProducts] = useState([])
  const [computerA, setComputerA] = useState([])
  const [computerB, setComputerB] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/list")
      .then((response) => {
        setProducts(response.data);
    });
  }, [])

  return ( 
      <>
        <Header   
          headerImage="icons8-servers-94.png"
          headerText="Let's find the best server for you"
        />
        <Search />
        <Comparator products={products} setComputerA={setComputerA} setComputerB={setComputerB}/>
        <PageResults computerA={computerA} computerB={computerB} />
      </>    
  );
}

export default Home;