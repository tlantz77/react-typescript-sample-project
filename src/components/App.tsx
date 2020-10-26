import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

export interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
 
class _App extends Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }
  
  render() { 
    return (
      <div>
        Yo!
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
}
 
export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App);