import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component{
    render() {
        const todoData = [
            { label: 'Drink Coffee', id: 1 },
            { label: 'Make Awesome App', id: 2 },
            { label: 'Have a lunch', id: 3 }
        ];

        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList todos={todoData} />
            </div>
        );
    }
};
