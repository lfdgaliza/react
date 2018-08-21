import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from '../todo/TodoForm'
import TodoList from './TodoList';

export default class Todo extends Component {

    handleAdd() {
        console.log("ADD");
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd}></TodoForm>
                <TodoList></TodoList>
            </div>
        ) 
    }
}