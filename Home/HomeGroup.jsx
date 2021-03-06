import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

import HomeCard from './HomeCard'

const styles = theme => ({
  headline: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
})

const HomeGroup = ({
  title,
  cards,
  handleClick,
  classes,
}) => (
  <div>
    <div className={classes.headline}>
      <Typography type="headline">
        {title}
      </Typography>
    </div>

    <Grid container>

      {cards ? cards.map(card => (
        <Grid item xs={12} sm={4} key={`group-card-${card.id}`}>
          <HomeCard
            title={card.title}
            description={card.description}
            handleClick={() => handleClick(card.link)}
            icon={card.icon}
            disabled={card.disabled}
          />
        </Grid>
      )) : null}

    </Grid>
  </div>
)

HomeGroup.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(HomeGroup)
