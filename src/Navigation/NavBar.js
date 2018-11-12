import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default class NavBar extends Component {

    render() {
        const { classes } = this.props
        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex} noWrap>
                        <Link className={classes.link} to="/">Unseenstars Reporting</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}