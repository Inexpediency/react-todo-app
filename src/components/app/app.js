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
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ]
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

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const oldItem = todoData[idx]
            const newItem = {
                ...oldItem,
                done: !oldItem.done
            }

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx+1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const oldItem = todoData[idx]
            const newItem = {
                ...oldItem,
                important: !oldItem.important
            }

            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx+1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
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
