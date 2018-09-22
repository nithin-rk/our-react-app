import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const Excercises = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Left Pane</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Right Pane</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Excercises.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Excercises);
