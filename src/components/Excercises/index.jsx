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
  const { category } = props;
  const { exercise } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {exercises.map(
              ([group, exercises]) =>
                !category || category === group ? (
                  <Fragment>
                    <Typography
                      className={classes.typography}
                      variant="headline"
                    >
                      {group}
                    </Typography>
                    <List component="nav">
                      {exercises.map(({ id, title }) => (
                        <ListItem button>
                          <ListItemText
                            primary={title}
                            onClick={() => props.onSelect(id)}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Fragment>
                ) : null
            )}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="display1">{exercise.title}</Typography>
            <Typography variant="subheading">{exercise.description}</Typography>
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
