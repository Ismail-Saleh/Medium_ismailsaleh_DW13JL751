import React, { Component } from 'react';
import {ClickAwayListener} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    wrapper: {
        position: 'relative',
      },
      div: {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
      },
});

class Dropdown extends Component {
    render() {
        const { classes } = this.props;
        const [open, setOpen] = React.useState(false);

        const handleClick = () => {
            setOpen(prev => !prev);
        };

        const handleClickAway = () => {
            setOpen(false);
        };
        return (
            <div>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div className={classes.wrapper}>
                        <button type="button" onClick={handleClick}>
                            Open menu dropdown
                        </button>
                        {open ? (
                            <div className={classes.div}>Click me, I will stay visible until you click outside.</div>
                        ) : null}
                    </div>
                </ClickAwayListener>
            </div>
        );
    }
}

export default withStyles(styles)(Dropdown);