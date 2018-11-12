import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import PersonIcon from '@material-ui/icons/Person'
import { home as styles } from '../styles'

const profiles = 'https://s3.us-east-2.amazonaws.com/unseenstars/profile_pics/'

class Home extends Component {

    state = {
        team: [{
            name: 'Saurav Kumar',
            pic: 'saurav.kumar',
            title: 'Manager Consultant'
        }, {
            name: 'Hugh Boylan',
            pic: 'hugh.boylan'
        }, {
            name: 'Sumanta Ghosh',
            pic: 'sumanta.ghosh'
        }, {
            name: 'Lee Whieldon',
            pic: 'lee.whieldon'
        }, {
            name: 'Morgan Robinson',
            pic: 'morgan.robinson'
        }, {
            name: 'Aravind Krishnakurupsreekumarann'
        }]
    }

    render() {
        const { classes } = this.props
        const { team } = this.state
        return (
            <div className={classes.root}>
                <Typography variant="h4" color="inherit" className={classes.flex} noWrap>Sogeti I&D Hackathon 2018</Typography>

                {/* Unseenstars Team */}
                <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Unseenstars Team</Typography>
                <List>
                    {team.map((m, i) => <Teammate m={m} key={i} />)}
                </List>

                {/* Tableau Reports */}
                <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Tableau Reports</Typography>
                <ul>
                    <Link className={classes.link} to="/business">Yelp Businesses</Link>
                </ul>
            </div>
        )
    }
}

const Teammate = ({ m }) => (
    <ListItem>
        <ListItemAvatar>
            {m.pic ?
                <Avatar src={profiles + m.pic + '.png'} />
                :
                <Avatar><PersonIcon /></Avatar>
            }
        </ListItemAvatar>
        <ListItemText
            primary={m.name}
            secondary={m.title ? m.title : 'Senior Consultant'}
        />
    </ListItem>
)

export default withStyles(styles)(Home)