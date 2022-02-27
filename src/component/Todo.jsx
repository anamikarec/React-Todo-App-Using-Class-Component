import React from "react";
import TodoList from "./TodoList";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-Todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add # {this.state.items.length + 1}</button>
        </form>
      </>
    );
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) return;
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
}
