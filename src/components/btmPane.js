import React from 'react';
import {Box, Typography} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import {  Search,NotificationsNone,ArrowForward} from '@material-ui/icons/'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    img:{
      width:'80%',
      heigth:'auto'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    flex1:{
      width:'300px',textAlign:'left',
      float:'right',
      paddingLeft:'20px',
      fontWeight:'bold',
      textDecoration:'none',
      color:'#222',
      fontFamily:'Arial',
  
    },
    p:{
        color:'#111',
        textDecoration:'none',
  
      },
    month:{
        color:'black',
        opacity:'0.45'
    },
    judul:{
        fontFamily:'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
        fontWeight:'700',
        lineHeight: '24px'
    },    
    pFlex:{
      width:'300px',textAlign:'left',
      float:'right',
      fontSize:'13px',
      textDecoration:'none',
      color:'#222',
      fontFamily:'Arial'
    },
    brand :{
        textAlign:"left",
        fontFamily:'Times New Roman,Times, serif',
        fontSize:'29px',
        fontWeight:'800'
      },
      orange: {
          color: '#fff',
          backgroundColor: deepOrange[500],
        },
        purple: {
          color: '#fff',
          backgroundColor: deepPurple[500],
        },    
  }));


export default function Btm(){
    const classes = useStyles();
        return(
            <div style={{width:'100%'}}>
    <Box display='flex'>
                
        <Box>
                <Typography variant='h5' style={{textAlign:'left'}}>Popular on Medium</Typography><br/><hr/><br/>
                <Box display='flex' pb={3}>
                    <Box>
                        <Typography variant='h4' style={{color:'#dfdfdf'}}>01</Typography>
                    </Box>
                    <Box>
                        <Box display="flex" bgcolor="background.paper" flexDirection='column'>      
                            <Box order={1} bgcolor="" >
                                <a href='#'><Typography variant='h6' className={classes.flex1}style={{fontSize:'16px'}}>You Might Not Actually Be Struggling With Depression</Typography> </a>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <p className={classes.pFlex}><a href='' className={classes.p}>Caroline </a> in <a href='' className={classes.p} >One Zero</a> </p>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <div><p className={classes.pFlex}><a className={classes.month}>Nov 26</a> . <a className={classes.month}>6 min read</a> </p></div>
                            </Box>
                        </Box>

                        
                    </Box>
                </Box>
                <Box display='flex' pb={3} flexShrink={2}>
                    <Box>
                        <Typography variant='h4' style={{color:'#dfdfdf'}}>02</Typography>
                    </Box>
                    <Box>
                        <Box display="flex" bgcolor="background.paper" flexDirection='column'>      
                            <Box order={1} bgcolor="" >
                                <a href='#'><Typography variant='h6' className={classes.flex1}style={{fontSize:'16px'}}>You Might Not Actually Be Struggling With Depression</Typography> </a>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <p className={classes.pFlex}><a href='' className={classes.p}>Caroline </a> in <a href='' className={classes.p} >One Zero</a> </p>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <div><p className={classes.pFlex}><a className={classes.month}>Nov 26</a> . <a className={classes.month}>6 min read</a> </p></div>
                            </Box>
                        </Box>

                        
                    </Box>
                </Box>
        </Box>
        <Box>
            <Box display='flex' style={{width:'400px'}} pl={4}>
                <Box>
                <img src='https://cdn-images-1.medium.com/fit/c/152/156/1*YpqC39n9iIW1v7ZKjTzZLg.jpeg'></img>   
                </Box>
                <Box>
                   <Box display='flex' flexDirection='column' width='100%' style={{paddingLeft:'90px'}}>
                        <Box>
                        <Typography variant='h5' style={{textAlign:'left'}}>Popular on Medium</Typography><br/>
                            <Box display="flex" bgcolor="background.paper" flexDirection='column'>      
                            <Box order={1} bgcolor="" >
                                <a href='#'><Typography variant='h6' className={classes.flex1}style={{fontSize:'20px'}}>How to Tell if Someone Values You.</Typography> </a>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <p className={classes.pFlex}><a href='' className={classes.p}>Caroline </a> in <a href='' className={classes.p} >One Zero</a> </p>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <div><p className={classes.pFlex}><a className={classes.month}>Nov 26</a> . <a className={classes.month}>6 min read</a> </p></div>
                            </Box>
                        </Box>
                        </Box>
                   </Box>
                </Box>
            </Box>

        </Box>
    </Box>
            </div>
        );


}