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
                    src="https://public.tableau.com/views/RestaurantsAvailabilityScores_Extract/RestaurantsAvailabilityScore?:embed=y&:display_count=y&publish=y&:showVizHome=n"
                />
            </div>
        )
    }
}

export default withStyles(styles)(BusinessReport)