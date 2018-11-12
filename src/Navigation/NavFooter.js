import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

let NavFooter = ({ classes }) => (
	<Paper className={classes.container} square>
		<Typography variant="body1" align="center" classes={{ root: classes.text }}>
			&#169; 2018 Sogeti USA
		</Typography>
	</Paper>
)

const styles = theme => ({
  container: {
    padding: 40,
    background: theme.palette.primary[500]
  },
  text: {
    color: theme.palette.background.paper
  }
})

export default withStyles(styles)(NavFooter)