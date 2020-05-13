import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'},
    ]

    render() {

        const { group, onGroupChange } = this.props

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = group === name
            const classes = isActive ? "btn-info" : "btn-outline-secondary"
            return (
                <button type="button" className={ `btn ${classes}` } key={ name }
                        onClick={ () => onGroupChange(name) }>
                    { label }
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
