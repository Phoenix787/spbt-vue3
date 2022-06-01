import axios from "axios";

const SERVER_URL = 'http://localhost:8080';

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 1000
});

export default {
    createNew: (text, completed) => instance.post('todos', {title: text, completed: completed}),
    getAll: () => instance.get('todos', {
    transformResponse: [function(data) {
        return data ? JSON.parse(data)._embedded.todos : data;

    }]
    }),
    updateForId: (id, text, completed) => instance.put('todos/' + id, {title: text, completed: completed}),

    removeForId: (id) => instance.delete('todos/'+id)



}