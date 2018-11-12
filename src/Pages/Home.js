import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { home as styles } from '../styles'

class Home extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Typography variant="title" color="inherit" className={classes.flex} noWrap>2018 I&D Hackathon Team</Typography>
                <ul>
                    <li>Saurav Kumar</li>
                    <li>Hugh Boylan</li>
                    <li>Sumanta Ghosh</li>
                    <li>Lee Whieldon</li>
                    <li>Aravind Krishnakurupsreekumarann</li>
                    <li>Morgan Robinson</li>
                </ul>
                <Typography variant="headline" color="inherit" className={classes.flex} noWrap>Yelp Reports</Typography>
                <ul>
                    <Link className={classes.link} to="/business">Yelp Businesses</Link>
                </ul>
            </div>
        )
    }
}

export default withStyles(styles)(Home)