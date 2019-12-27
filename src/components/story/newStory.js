import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper,TextareaAutosize,Grid,Avatar,TextField,IconButton,Button,Toolbar ,AppBar,Box,Tabs,Tab,Container,Typography} from '@material-ui/core/';
import {  Search,NotificationsNone,ArrowForward,MoreHoriz} from '@material-ui/icons';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { border } from '@material-ui/system';
import ReactDOM from 'react-dom'
import Files from 'react-files'


const styles = theme => ({
    img: {
        width: '80%',
        heigth: 'auto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    flex1: {
        width: '300px', textAlign: 'left',
        float: 'right',
        paddingLeft: '20px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#222',
        fontFamily: 'Arial',

    },
    p: {
        color: '#111',
        textDecoration: 'none',

    },
    month: {
        color: '#555',
    },
    judul: {
        fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
        fontWeight: '700',
        lineHeight: '24px'
    },
    pFlex: {
        width: '300px', textAlign: 'left',
        float: 'right',
        fontSize: '13px',
        textDecoration: 'none',
        color: '#222',
        fontFamily: 'Arial'
    },
    brand: {
        textAlign: "left",
        fontFamily: 'Times New Roman,Times, serif',
        fontSize: '29px',
        fontWeight: '800',
        marginTop:'8px'
    },
    orange: {
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    paper: {
        padding: theme.spacing(3),
        boxShadow :'none',
        border : '1px solid #e5e5e5',
        marginTop:'12px',
        marginBottom :'20px'
      },
});




class Comment extends Component {

    render() {
        const { classes } = this.props;
        return (
<div >
    <div className={classes.root}>
        <AppBar position="static" style={{background:'#fff',color:'#000',boxShadow:'0px -9px 19px 1px rgba(0,0,0,0.75)'}}>
            <Toolbar>
            <div style={{ width: '100%' }}>
                <Box display="flex" p={1} >
                    <Box p={1} flexGrow={1} className={classes.brand}>
                        <span style={{border:'1px solid black', padding:'5px',background:'#222',color:'white'}}>M</span>
                    </Box>

                    <Box p={1}>
                        
                            <Button variant="contained" color="primary" style={{fontSize:'10px',paddingTop:'10px'}}>
                                Publish
                            </Button>
                 
                    </Box>

                    <Box p={1}>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <NotificationsNone/>
                        </IconButton>
                    </Box>

                    <Box p={1}>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <MoreHoriz/>
                        </IconButton>
                    </Box>               
                   
                </Box>
            </div>
            </Toolbar>
        </AppBar>
    

    </div>
    <Container maxWidth='md' style={{marginTop:'20px'}}>
        <form className={classes.root} noValidate autoComplete="off">
                <Paper className={classes.paper}>
                                
                    <div style={{marginTop:'20px',paddingBottom:'0px'}}>
                        <TextareaAutosize aria-label="empty textarea" placeholder="Title" className='textarea' />
                    </div>
                    <div style={{marginTop:'20px',paddingBottom:'0px'}}>
                        <TextareaAutosize aria-label="empty textarea" placeholder="Pict" className='textarea' style={{fontSize:'18px'}} />
                    </div>
                    <div style={{marginTop:'20px',paddingBottom:'0px'}}>
                        <TextareaAutosize aria-label="empty textarea" placeholder="Tell your story..." className='textarea' style={{fontSize:'18px'}} />
                    </div>
                                
                </Paper>
        </form>
    </Container>
</div>
        );
    }
}

export default withStyles(styles)(Comment);