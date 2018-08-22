import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from '../todo/TodoForm'
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(r => this.setState({ ...this.state, description: '', list: r.data }))
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(r => this.refresh())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(r => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}></TodoForm>
                <TodoList list={this.state.list} handleRemove={this.handleRemove}></TodoList>
            </div>
        )
    }
}