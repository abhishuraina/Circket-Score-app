import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState, Fragment} from 'react'
import {Button, Grid, Typography} from "@material-ui/core"
import Navbar from "./components/Navbar"
import getMatches from "./Api/Api"
import MyCard from "./components/MyCard"

function App() {

  const [matches, setMatches] = useState([]);

  useEffect(()=>{
    getMatches()
    .then((data) => setMatches(data.matches))
    .catch((error) => console.log("Error :", error));
    
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Typography variant="h3" style={{marginTop:20, marginBottom:20}}>welcome</Typography>
      
      <Grid container>
        <Grid sm="3"></Grid>  
        <Grid sm = "6">
          {matches.map((match) => (
            <Fragment key= {match.unique_id}>
              {
                match.type == "Twenty20" ?(
                <MyCard key= {match.unique_id} match = {match} />):
                ("")
              }
            </Fragment>
        ))} 
      </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
