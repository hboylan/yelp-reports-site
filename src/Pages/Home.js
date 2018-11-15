import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import AssessmentIcon from '@material-ui/icons/Assessment'
import BarChartIcon from '@material-ui/icons/BarChart'
import CodeIcon from '@material-ui/icons/Code'
import MemoryIcon from '@material-ui/icons/Memory'
import MoneyOffIcon from '@material-ui/icons/MoneyOff'
import PersonIcon from '@material-ui/icons/Person'
import SchoolIcon from '@material-ui/icons/School'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import { home as styles } from '../styles'

const profiles = 'https://s3.us-east-2.amazonaws.com/unseenstars/profile_pics/'
const tableau = 'https://public.tableau.com/views/'

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
            name: 'Aravind Krishna',
            pic: 'aravind.krishna'
        }]
    }

    render() {
        const { classes } = this.props
        const { team } = this.state
        return (
            <Grid className={classes.root} container>

                {/* Title */}
                <Grid item xs={12}>
                    <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Sogeti I&D Hackathon 2018</Typography>
                </Grid>

                {/* Members */}
                <Grid item xs={12} md={4} className={classes.nested}>
                    <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Members</Typography>
                    <List>
                        {team.map((m, i) => <Teammate m={m} key={i} />)}
                    </List>
                </Grid>

                <Grid item xs={12} md={8}>
                
                    {/* Objective */}
                    <Grid item xs={12} className={classes.nested}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Objective</Typography>
                        <Typography variant="body1" color="inherit">
                            To design a generic big data system to collect, process, and analyze data to provide valuable business insights. Our solution will utilize the Yelp academic dataset to help answer common questions about how to improve the success of a business.
                        </Typography>
                    </Grid>
                
                    {/* Solution */}
                    <Grid item xs={12} className={classes.nested}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Solution</Typography>
                        <Typography variant="body1" color="inherit">
                            Big data pipeline for AWS and advanced analytics using Tableau to deliver insights from Yelp.
                        </Typography>
                    </Grid>

                    {/* Architecture */}
                    <Grid item xs={12} className={classes.nested}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Benefits</Typography>
                        <List>
                            <Item
                                title="Reusable Code Components"
                                description="Generic code repositories are now available to process data and load it into a data warehouse"
                            />
                            <Item
                                title="Adaptable to Change"
                                description="Solution was developed to be adaptable to changes in data"
                                icon={<ShuffleIcon />}
                            />
                            <Item
                                title="Low Cost Resources"
                                description="Leverages serverless functions, transient compute clusters, and free hosting services"
                                icon={<MoneyOffIcon />}
                            />
                            <Item
                                title="Machine Learning and Analytics"
                                description="Data warehouse and processing pipeline is built to support ML modeling and BI tools"
                                icon={<MemoryIcon />}
                            />
                            <Item
                                // link="https://github.com/hboylan/s3-processing-spark#metrics"
                                title="OLAP Database Comparison"
                                description="Metrics were gathered to compare Redshift with Snowflake, two competing OLAP databases"
                                icon={<BarChartIcon />}
                            />
                            <Item
                                title="Big Data Reference Architecture"
                                description="Consultants can use our code components as reference material"
                                icon={<SchoolIcon />}
                            />
                        </List>
                    </Grid>

                    {/* Architecture */}
                    <Grid item xs={12} className={classes.nested}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Architecture</Typography>
                        <img className={classes.architecture} alt="Architecture Diagram" src="https://s3.us-east-2.amazonaws.com/unseenstars/architecture.png" />
                    </Grid>

                    {/* Tableau Reports */}
                    <Grid item xs={12} className={classes.nested}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Tableau Reports</Typography>
                        <List>
                            <Item
                                link={tableau + 'RestaurantsAvailabilityScores_Extract/RestaurantsAvailabilityScore'}
                                title="Yelp Business Insights"
                                description="Browse geographically to view detailed insights in relation to competing businesses"
                                icon={<AssessmentIcon />}
                            />
                            <Item
                                link={tableau + 'YelpReviewWordsAnalysis/ReviewWordCountAnalysis'}
                                title="Yelp Review Words"
                                description="Browse review keywords to see how users describe businesses"
                                icon={<AssessmentIcon />}
                            />
                            <Item
                                link={tableau + 'YelpDataSentimentAnalysis/SentimentalDashboard'}
                                title="Yelp Review Sentiment"
                                description="Browse reviews to understand how users feel about different businesses"
                                icon={<AssessmentIcon />}
                            />
                            <Item
                                link={tableau + 'YelpBusinessAmenitiesScore/YelpAmenitiesScoreDashboard'}
                                title="Yelp Business Amenities"
                                description="Browse nearby business amenities by category to understand what each have to offer customers"
                                icon={<AssessmentIcon />}
                            />
                        </List>
                    </Grid>

                    {/* Code Repositories */}
                    <Grid item xs={12} className={classes.nested}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Reusable Code</Typography>
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

                    {/* Summary */}
                    <Grid item xs={12} className={classes.nested}>
                        <Typography variant="h5" color="inherit" className={classes.flex} noWrap>Summary</Typography>
                        <Typography variant="body1" color="inherit" className={classes.flex}>
                        Analytics for big data are being used more often by businesses of all sizes to gain meaningful insight into their operations.
                        Sogeti clients can benefit from a solution which demonstrates the ability to collect any type of source data and prepare it so that business users can find answers to valuable questions.
                        Our solution follows best practices for how to collect, process, and analyze big data in a cloud environment.
                        We believe that it is applicable to many businesses and can provide value to Sogeti clients in the future, adapting to change based on additional requirements.
                        </Typography>
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

    const primary = link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Typography variant="body1">{title}</Typography>
        </a>
    ) : null
    return (
        <ListItem>
            <Avatar>{icon}</Avatar>
            <ListItemText primary={link ? primary : title} secondary={description} />
        </ListItem>
    )
}

export default withStyles(styles)(Home)