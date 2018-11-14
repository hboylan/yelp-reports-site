import React from 'react'
import { withStyles } from '@material-ui/core'
import { report as styles } from '../styles'

const TableauReport = ({ classes, title, view }) => (
    <div className={classes.root}>
        <iframe
            className={classes.tableauReport}
            title={title}
            src={`https://public.tableau.com/views/${view}?:embed=y&:display_count=y&:showVizHome=n`}
        />
    </div>
)

export default withStyles(styles)(TableauReport)