import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { report as styles } from '../styles'

class BusinessReport extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <iframe
                    className={classes.tableauReport}
                    title="Business Report"
                    src="https://public.tableau.com/views/RestaurantsAvailabilityScores-Snowflake/RestaurantsAvailabilityScore?:showVizHome=no&:embed=true"
                />
            </div>
        )
    }
}

export default withStyles(styles)(BusinessReport)