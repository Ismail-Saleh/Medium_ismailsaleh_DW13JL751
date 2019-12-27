import React, { Component } from 'react';
import Navbar from '../navbar/mediumNav'
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Box, Button, Tabs,Tab } from '@material-ui/core'
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const styles = theme => ({
 tab:{
    
 }
});


class Story extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Navbar />
                <Container maxWidth='lg' style={{ marginTop: '60px' }}>
                    <Grid direction='column'>
                        <Box display='flex'>
                            <Box item flexGrow={1}><Typography variant='h4' style={{ fontWeight: 'bolder', color: '#222' }}>Your Story</Typography></Box>
                            <Box pr={2}>
                                <Button variant="outlined">Import Story</Button>
                            </Box>
                            <Box>
                                <Button variant="outlined" color="primary">
                                    Write Story
                                    </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid style={{ marginTop: '40px'}}>
                        <Tabs
                            value={0}
                            indicatorColor="primary"
                            textColor="primary"
                            className={classes.tab}
                        >
                            <Tab style={{fontSize:'10px'}} label="Draft 6" />
                            <Tab style={{fontSize:'10px'}} label="Published 1" />
                        </Tabs>
                    </Grid>

                    <Grid style={{paddingTop:'40px'}}>
                        <Grid>
                            <Typography variant='h5' style={{fontWeight:'bolder'}}>Unititled Story</Typography>
                        </Grid>
                        <Grid>
                            <Box display='flex'>
                                <Box><Typography variant='overline' color='textSecondary'>Created about 18 hour ago</Typography></Box>
                                <Box>
                                        <KeyboardArrowDownIcon/>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Story);