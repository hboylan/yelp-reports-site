import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CloudDownload from '@material-ui/icons/CloudDownload'
import logo from '../public/logo.png'

export default class NavBar extends Component {

    render() {
        const { classes } = this.props
        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <img className={classes.logo} alt="Capgemeni Sogeti" src={logo} />
                    &nbsp;
                    <Typography variant="h6" color="inherit" className={classes.flex} noWrap>
                        <Link className={classes.link} to="/">
                            Team Unseenstars
                        </Link>
                    </Typography>
                    <Button
                        color="secondary"
                        onClick={() => window.open('https://s3.us-east-2.amazonaws.com/unseenstars/maryland-unseenstars.pptx', '_blank')}
                    >
                        <CloudDownload />&nbsp;Presentation
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}