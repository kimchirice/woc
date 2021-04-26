import React from "react";
import "../../app/App.css"; 
import picture from "../../res/img/women.svg";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";
import { library } from '../../../node_modules/@fortawesome/fontawesome-svg-core'
import { fab } from '../../../node_modules/@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faChalkboardTeacher, fas, faDesktop, faBookReader,faComments } from '../../../node_modules/@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, fas, faChalkboardTeacher, faDesktop, faBookReader, faComments)

function Landing() {
        const useStyles = makeStyles((theme) => ({
            root: {
              flexGrow: 1,
            
            },
            paper: {
              padding: theme.spacing(2),
              textAlign: 'center',
              color: theme.palette.text.secondary,
              
            },
          }));

          const classes = useStyles();

        return(
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={6}>
                            <h5 className="caption">
                                Fairer and more equitable Australia for all Women of Colour
                            </h5>
                            <h5 className="description">
                                We exist to champion Australia’s Women of Colour. Join us.
                            </h5>
                            <button type="button" className="btn-join" onClick="#">
                                Click here
                            </button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <img src={picture} alt="women of colour" className="picture"></img>
                        </Grid>

                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <FontAwesomeIcon icon={["fas", "chalkboard-teacher"]}/>
                                <header>
                                    <strong>
                                        Mentoring
                                    </strong>
                                </header> 
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <FontAwesomeIcon icon={["fas", "desktop"]}/>
                                <header>
                                    <strong>
                                        Online courses
                                    </strong>
                                </header>
                                <p>
                                    Lorem ipsum dolor sit amet elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt.
                                </p>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                              <FontAwesomeIcon icon={("fas", "book-reader")}/>
                              <header>
                                  <strong>
                                      Book club
                                    </strong>
                             </header>
                             <p>
                             Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                             </p>
                            </Paper>
                        </Grid>
                        <Grid item xs={3} >
                            <Paper className={classes.paper} >
                                <FontAwesomeIcon icon={["fas", "comments"]}/>
                                <header>
                                    <strong>
                                        Chat room
                                    </strong>
                                </header>
                                <p>
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                </p>
                            </Paper>
                        </Grid>
                  </Grid>
            
                
        
        )
    
    };


export default Landing;
