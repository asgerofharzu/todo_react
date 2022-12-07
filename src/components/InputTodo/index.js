import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputStyle from "./Input.module.css"
import { BsFillChatSquareTextFill, } from "react-icons/bs";
import "./input.css"
import InputIcons from '../Icons/InputIcon';
class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            "todo": [],
            changed: false,
        }
    }

    handleTodoChange(e) {
        let val = e.target.value;
        this.setState({ title: val });
    }
    handleTask() {
        this.setState({ todo: [...this.state.todo, this.state.title], title: "" });
    }
    render() {
        return (
            <>
                <div className={InputStyle.h1}>Todo Input</div>
                <div className={InputStyle.center}>
                    <div className={InputStyle.inputDiv}>
                        <span className={InputStyle.logo}>
                            <BsFillChatSquareTextFill />
                        </span>
                        <input className={InputStyle.input} type="text" value={this.state.title} placeholder="Add New Todo" onChange={(e) => this.handleTodoChange(e)}
                            onKeyDown={(e) => e.key === "Enter" && this.handleTask()}
                        // onFocus={(e) => this.setState({changed: true})}
                        // onBlur={(e) => this.setState({changed: false})}
                        />
                    </div>

                    <button className={InputStyle.btn} onClick={() => this.handleTask()}>Add New Task</button>
                </div>
                <div className={InputStyle.h1}>
                    Todo List
                </div>
                <div className={InputStyle.btnGroup}>
                    <button className="btn btn-primary">All</button>
                    <button className="btn btn-primary">Done</button>
                    <button className="btn btn-primary">Todo</button>
                </div>

                <div className={InputStyle.listItem}>
                    <ul className={InputStyle.orderedList}>
                        {this.state.todo.map((item, index) => (
                            <li className={InputStyle.list}
                                key={`task-item-${index}`}>{item} <div><InputIcons /></div>

                            </li>))
                        }
                    </ul>
                </div>
                <div className={InputStyle.dangers}>
                    <button className="btn btn-danger">Delete done tasks</button>
                    <button className="btn btn-danger">Delete all tasks</button>
                </div>
            </>
        );
    }
}

export default TodoInput;