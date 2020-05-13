import React, { Component } from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {
    render() {
        const {
            label,
            important,
            done,
            onDeleted,
            onToggleDone,
            onToggleImportant
        } = this.props

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
                      onClick={ onToggleDone }>
                    {label}
                </span>

                <button type="button" className="btn btn-outline-success btn-sm float-right"
                    onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right"
                    onClick={ onDeleted }>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}
