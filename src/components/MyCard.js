import { Button, Card, CardActions, CardContent, Typography, Grid, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions } from '@material-ui/core'
import {Fragment, React, useState }from 'react'
import getMatchDetail from "../Api/matchDetail"

const MyCard = ({match}) => {

    const [detail, setdetail] = useState({});
    const [open, setopen] = useState(false);
    
    const handleClick = (id) => {
        getMatchDetail(id)
        .then((data) => {   setdetail(data) 
        handleOpen();
    })
        .catch((error) => console.log("ERROR", error))
    }

    const handleClose =() => {
        setopen(false);
    }
    const handleOpen = () =>{
        setopen(true);
    }   


    const GetMatchCard = () => {
        return (
            <Card style={{marginBottom:20}}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>

                        <Grid item>
                            <Typography variant="h5">{match["team-1"]}</Typography>
                        </Grid>
                        
                        <Grid item>
                        <img src={require('../Images/download.png')} alt="vs" />
                        </Grid>

                        <Grid item>
                            <Typography variant="h5">{match["team-2"]}</Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Button onClick={ ()=>{
                            handleClick(match.unique_id)
                        }} variant="contained" color="primary" >
                            Match Details
                    </Button>
                        <Button 
                        style= {{marginLeft:10}} 
                        variant="contained" color="primary" >
                        Start Time {new Date (match.dateTimeGMT).toLocaleString()}
                        
                        
                        </Button>
                    </Grid>

                </CardActions>
            </Card>
        )
    }

    const getDialog = () =>(
        <Dialog open ={open} onClose = {handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Title.."}</DialogTitle>
            <DialogContent>

                <DialogContentText id="alert-dialog-description">
                    
                    <Typography>{detail.stat}</Typography>
                    
                    <Typography>
                        Match 
                            <span style={{fontStyle:"italic"}}>{detail.matchStarted ? " Started": " not started yet "} {" "}</span>
                        </Typography>
                    
                    <Typography>
                            Score 
                        <span style={{fontStyle:"italic"}}>{detail.score}</span>
                    </Typography>
                    
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autofocus>CLOSE</Button>
                </DialogActions>
        </Dialog>
    );

    return (
        <Fragment>

        {GetMatchCard()}
        {getDialog()}
        </Fragment>
    )

}
export default MyCard