import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CloudDownload from '@material-ui/icons/CloudDownload'

export default class NavBar extends Component {

    render() {
        const { classes } = this.props
        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex} noWrap>
                        <Link className={classes.link} to="/">Unseenstars Reporting</Link>
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