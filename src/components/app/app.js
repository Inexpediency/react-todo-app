import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component{

    maxId = 0;

    state = {
        filter: '',
        term: 'all',
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ]
    }

    filter(items, filt) {
        return items.filter((el) =>
            el.label.toLowerCase().startsWith(filt)
        )
    }

    onGroupsTodo(items, group) {
        switch(group) {
            case 'all':
                return items
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items
        }
    }

    createTodoItem(text) {
        return {
            label: text,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteListItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const td = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: td
            }
        })
    }

    addListItem = (text) => {
        this.setState(( { todoData }) => {
            const td = [
                ...todoData,
                this.createTodoItem(text)
            ]

            return {
                todoData: td
            }
        })
    }

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id)

        const oldItem = arr[idx]
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        }

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx+1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onFilterList = (filter) => {
        this.setState({
            filter: filter.toLowerCase()
        })
    }

    onGroupChange = (gr) => {
        this.setState({
            term: gr
        })
    }

    render() {

        const {todoData, filter, term} = this.state
        const doneCount = todoData.filter((el) => el.done).length
        const todoCount = todoData.length - doneCount

        const visibleTodos = this.onGroupsTodo(this.filter(todoData, filter), term)

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onFilter={ this.onFilterList }/>
                    <ItemStatusFilter group={ term } onGroupChange={this.onGroupChange}/>
                </div>

                <TodoList
                    todos={visibleTodos}
                    onDeleted={ (id) => this.deleteListItem(id) }
                    onToggleDone={ (id) => this.onToggleDone(id) }
                    onToggleImportant={ (id) => this.onToggleImportant(id) }
                />

                <ItemAddForm
                    onItemAdded={ (text) => this.addListItem(text) }
                />
            </div>
        );
    }
};
