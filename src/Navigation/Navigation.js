import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import NavBar from './NavBar'
import NavFooter from './NavFooter'
import { nav as styles } from '../styles'

class Navigation extends Component {

    render() {
        const { children, classes } = this.props
        const barProps = { classes }
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <NavBar {...barProps} />
                    <main className={classes.content}>
                        {children}
                        <NavFooter />
                    </main>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Navigation)