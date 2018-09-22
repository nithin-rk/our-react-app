import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    color: theme.palette.text.secondary,
    marginTop: 10,
    height: 400,
    overflowY: "auto"
  },
  typography: {
    textTransform: "capitalize"
  }
});

const Excercises = props => {
  const { classes } = props;
  const { exercises } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {exercises.map(([group, exercises]) => (
              <Fragment>
                <Typography className={classes.typography} variant="headline">
                  {group}
                </Typography>
                <List component="nav">
                  {exercises.map(({ title }) => (
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="display1">Welcome!!</Typography>
            <Typography variant="subheading">
              Please select an exercise from on the left
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Excercises.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Excercises);
