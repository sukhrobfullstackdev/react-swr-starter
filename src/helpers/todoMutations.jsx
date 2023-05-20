import {addTodo, updateTodo, deleteTodo} from "../api/todosApi.jsx";

export const addMutation = async (newTodo, todos) => {
    const added = await addTodo(newTodo.userId, newTodo.title, newTodo.completed);
    return [...todos, added];
}
export const addTodoOptions = async (newTodo, todos) => {
    return {
        optimisticData: [...todos, newTodo].sort((a, b) => b.id - a.id),
        rollbackOnError: true,
        populateCache: true,
        revalidate: false
    }
}
export const editMutation = async (editingTodo, todos) => {
    await updateTodo(editingTodo);
    return [...todos];
}
export const editTodoOptions = async (editingTodo) => {
    return {
        optimisticData: (todos) => {
            const prevTodos = todos.filter(todo => {
                return todo.id !== editingTodo.id
            })
            return [...prevTodos, editingTodo]
                .sort((a, b) => b.id - a.id)
        },
        rollbackOnError: true,
        populateCache: (updated, todos) => {
            const prevTodos = todos.filter(todo => {
                return todo.id !== editingTodo.id
            })
            return [...prevTodos, updated]
                .sort((a, b) => b.id - a.id)
        },
        revalidate: false
    }
}
export const deleteMutation = async (deletingTodoId, todos) => {
    await deleteTodo(deletingTodoId);
    return [...todos];
}
export const deleteTodoOptions = async (deletingTodoId, todos) => {
    return {
        optimisticData: (todos) => {
            return todos.filter(todo => {
                return todo.id !== id
            })
        },
        rollbackOnError: true,
        populateCache: (emptyResponseObj, todos) => {
            return todos.filter(todo => {
                return todo.id !== id
            })
        },
        revalidate: false
    }
}