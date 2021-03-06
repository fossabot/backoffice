import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '60rem',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'calc(100vh - 104px)',
  },
})

const NoMatch = ({ title, description, classes }) => (
  <div className={classes.root}>
    <div>
      <Typography type="display3">
        {title}
      </Typography>
      <Typography type="display1" paragraph>
        {description}
      </Typography>
    </div>
  </div>
)

NoMatch.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

NoMatch.defaultProps = {
  title: '404! Sorry, not found.',
  description: (
    <Fragment>
      This URL does not exist, sorry.Please start over from
      the <Link href="/" to="/">Dashboard</Link>.
    </Fragment>
  ),
}

export default withStyles(styles)(NoMatch)
