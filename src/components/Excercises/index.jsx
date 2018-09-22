import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

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
  console.log(props);
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <LeftPane classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <RightPane classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
};

Excercises.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Excercises);
