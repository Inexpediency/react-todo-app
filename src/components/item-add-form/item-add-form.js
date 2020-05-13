import React, { Component } from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component {
    render() {
        const { onItemAdded } = this.props
        return (
            <div className="item-add-form">
                <button
                    className="btn btn-outline-secondary"
                    onClick={ () => onItemAdded('Hello yay lil bu') }
                >
                    Add Item
                </button>
            </div>
        )
    }
}
