import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Excercises from "./Excercises";
import { muscles, exercises } from "../store";

class App extends Component {
  state = {
    exercises,
    category: "",
    execise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  handleCategoryClick = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelect = id => {
    console.log({ exercises });
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };
  render() {
    const exercises = this.getExercisesByMuscles();

    return (
      <Fragment>
        <Header />
        <Excercises
          exercises={exercises}
          category={this.state.category}
          onSelect={this.handleExerciseSelect}
          exercise={this.state.execise}
        />
        <Footer
          muscles={muscles}
          category={this.state.category}
          onSelect={this.handleCategoryClick}
        />
      </Fragment>
    );
  }
}

export default App;
