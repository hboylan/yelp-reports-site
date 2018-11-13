import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import AssessmentIcon from '@material-ui/icons/Assessment'
import CodeIcon from '@material-ui/icons/Code'
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
            <Grid className={classes.root} container spacing={24}>

                {/* Title */}
                <Grid item xs={12}>
                    <Typography variant="h4" color="inherit" className={classes.flex} noWrap>Sogeti I&D Hackathon 2018</Typography>
                </Grid>

                {/* Members */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Members</Typography>
                    <List>
                        {team.map((m, i) => <Teammate m={m} key={i} />)}
                    </List>
                </Grid>

                <Grid className={classes.root} container xs={12} md={8} spacing={24}>
                
                    {/* Objective */}
                    <Grid item xs={12}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Objective</Typography>
                        <Typography variant="body1" color="inherit">
                            To design a generic big data system to collect, process, and analyze data to provide valuable business insights. Our solution will utilize the Yelp academic dataset to help answer common questions about how to improve the success of a business.
                        </Typography>
                    </Grid>

                    {/* Architecture */}
                    <Grid item xs={12}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Architecture</Typography>
                        <img className={classes.architecture} alt="Architecture Diagram" src="https://s3.us-east-2.amazonaws.com/unseenstars/architecture.png" />
                    </Grid>

                    {/* Tableau Reports */}
                    <Grid item xs={12}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Tableau Reports</Typography>
                        <List>
                            <Item
                                link="/business"
                                title="Yelp Businesses"
                                description="Browse businesses geographically to view detailed insights about each"
                                icon={<AssessmentIcon />}
                            />
                        </List>
                    </Grid>

                    {/* Code Repositories */}
                    <Grid item xs={12}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Code Repositories</Typography>
                        <List>
                            <Item
                                link="https://github.com/hboylan/s3-processing-lambda"
                                title="Processing Lambda"
                                description="Process data files from S3 using Lambda"
                            />
                            <Item
                                link="https://github.com/hboylan/s3-processing-spark"
                                title="Processing Spark"
                                description="Spark JAR to load yelp data into Redshift or Snowflake"
                            />
                        </List>
                    </Grid>
                </Grid>
            </Grid>
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

const Item = ({ link, title, description, icon = <CodeIcon /> }) => {

    const primary = (
        <Link to={link}>
            <Typography variant="body1">{title}</Typography>
        </Link>
    )
    return (
        <ListItem>
            <Avatar>{icon}</Avatar>
            <ListItemText primary={primary} secondary={description} />
        </ListItem>
    )
}

export default withStyles(styles)(Home)