import React from 'react';
import { Box, Typography, IconButton } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import { MoreHoriz } from '@material-ui/icons';
import BtmList from './contents/BtmList';
import Btmkiri from './BtmKr'

const btm = [
    {
        id: 1,
        number: '01',
        title: 'lorem ipsum dolor set amet',
        name: 'Sílvia Bastos',
        loc: 'Better Human',
        date: '26 Desember',
        time: '6 min read'
    },
    {
        id: 2,
        number: '02',
        title: 'Stop Obsessing About Focus: Here’s What Your Mind Really Needs',
        name: 'Sílvia Bastos',
        loc: 'Better Human',
        date: '26 Desember',
        time: '6 min read'
    },
    {
        id: 3,
        number: '03',
        title: 'Stop Obsessing About Focus: Here’s What Your Mind Really Needs',
        name: 'Sílvia Bastos',
        loc: 'Better Human',
        date: '26 Desember',
        time: '6 min read'
    },
    {
        id: 4,
        number: '04',
        title: 'Stop Obsessing About Focus: Here’s What Your Mind Really Needs',
        name: 'Sílvia Bastos',
        loc: 'Better Human',
        date: '26 Desember',
        time: '6 min read'
    },
]

const btmKiri = [
    {
        id: 1,
        category: 'Education',
        title: 'How to Tell if Someone Values You',
        detail: 'The endearing popularity of nineties icon, actor Keanu Reeves, has spiked in recent months. The summation would be that in this jarring',
        name: 'Caroline ',
        from: 'One Zero',
        date: 'Nov 26',
        time: '6 min read',
        img : 'https://cdn-images-1.medium.com/fit/c/152/156/1*YMO8ko10TpWBSyIwPqBxLA.jpeg'
    },
    {
        id: 2,
        category: 'Education',
        title: 'How to Tell if Someone Values You',
        detail: 'The endearing popularity of nineties icon, actor Keanu Reeves, has spiked in recent months. The summation would be that in this jarring',
        name: 'Caroline ',
        from: 'One Zero',
        date: 'Nov 26',
        time: '6 min read',
        img : 'https://cdn-images-1.medium.com/fit/c/152/156/1*_-a96T1bGeRU8nE1-861rA.jpeg'
    },
    {
        id: 3,
        category: 'Education',
        title: 'How to Tell if Someone Values You',
        detail: 'The endearing popularity of nineties icon, actor Keanu Reeves, has spiked in recent months. The summation would be that in this jarring',
        name: 'Caroline ',
        from: 'One Zero',
        date: 'Nov 26',
        time: '6 min read',
        img : 'https://cdn-images-1.medium.com/fit/c/152/156/0*ZxYqC36-y74gbed5'
    },
    {
        id: 4,
        category: 'Education',
        title: 'How to Tell if Someone Values You',
        detail: 'The endearing popularity of nineties icon, actor Keanu Reeves, has spiked in recent months. The summation would be that in this jarring',
        name: 'Caroline ',
        from: 'One Zero',
        date: 'Nov 26',
        time: '6 min read',
        img : 'https://cdn-images-1.medium.com/fit/c/152/156/0*r-2l4UXr7gI99vWV'
    }
]



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
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
        color: 'black',
        opacity: '0.45'
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
    fMenu: {
        color: 'black',
        opacity: '0.58',
        textDecoration: 'none',
        fontSize: '14px'
    },
    brand: {
        textAlign: "left",
        fontFamily: 'Times New Roman,Times, serif',
        fontSize: '29px',
        fontWeight: '800'
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


export default function Btm() {
    const classes = useStyles();
    return (
        <div style={{ width: '100%' }}>
            <Box display='flex' style={{ width: '100%' }} pl={10}>

                <Box>
                    <Typography variant='h5' style={{ textAlign: 'left' }}>Popular on Medium</Typography>
                    <br />
                    <hr style={{ border: '1px solid #d9d9d9' }} />


                    {btm.map(item =>
                        <BtmList
                            number={item.number}
                            title={item.title}
                            name={item.name}
                            loc={item.loc}
                            date={item.date}
                            time={item.time}
                        />
                    )}
                    <Box display='flex'>
                        <Box>
                            <p className={classes.pFlex} style={{ paddingBottom: '12px' }}>
                                <a href='' className={classes.fMenu}>Help</a>| <a href='' className={classes.fMenu}>Status</a> | <a href='' className={classes.fMenu}>Writer</a> | <a href='' className={classes.fMenu}>Blog</a> | <a href='' className={classes.fMenu}>Career</a> | <a href='' className={classes.fMenu}>Privacy</a> | <a href='' className={classes.fMenu}>Terms</a> |
                        <a href='' className={classes.fMenu}>About</a>
                            </p>

                        </Box>
                    </Box>
                </Box>
                <Box>

                    {btmKiri.map(item =>

                        <Btmkiri
                            category={item.category}
                            title={item.title}
                            detail={item.detail}
                            name={item.name}
                            from={item.from}
                            date={item.date}
                            time={item.time}
                            img={item.img}

                        />

                    )}
                </Box>
            </Box>
        </div>
    );


}