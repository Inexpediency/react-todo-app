import React, { Component } from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false,
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !this.state.done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !this.state.important
            }
        })
    }

    render() {
        const { label } = this.props
        const { done, important } = this.state

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }

        let classNames = 'todo-list-item'
        if (done) classNames += ' done'
        if (important) classNames += ' important'

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" style={style}
                      onClick={ this.onLabelClick }>
                    {label}
                </span>

                <button type="button" className="btn btn-outline-success btn-sm float-right"
                    onClick={ this.onMarkImportant }>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}
