import { AppBar, Typography, Toolbar } from "@material-ui/core";
import React from "react";



const Navbar = () =>{
    return  (
        <AppBar position="static">
            <Toolbar>
                <Typography >
                    live score
                </Typography>
            </Toolbar>


        </AppBar>
    )
}
export default Navbar