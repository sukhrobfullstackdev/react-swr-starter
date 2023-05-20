import axios from "axios";

const todosApi = axios.create({
    baseURL: "http://localhost:3500"
});

export const todosUrlEndpoint = '/todos';

export const getTodos = async () => {
    const {data} = await todosApi.get(todosUrlEndpoint);
    return data;
}

export const addTodo = async (userId, title, completed) => {
    const {data} = await todosApi.post(todosUrlEndpoint, {userId, title, completed });
    return data;
}

export const updateTodo = async (todo) => {
    const {data} = await todosApi.patch(`${todosUrlEndpoint}/${todo.id}`, todo);
    return data;
}

export const deleteTodo = async (id) => {
    return await todosApi.delete(`${todosUrlEndpoint}/${id}`);
}