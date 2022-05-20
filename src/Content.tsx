
import { useState, useEffect, FormEvent } from "react";
import { ITodo } from "./interface";
import Api from './utils/api';

export default function Content(props: { searchValue: string }) {
    const [allTodos, setAllTodos] = useState<ITodo[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        let isCancelled = false;
        Api.query().then((todos) => {
            if (isCancelled) {
                return;
            }
            setAllTodos(todos);
        });
        return () => {
            isCancelled = true;
        };
    }, []);

    const addTodo = (event: FormEvent) => {
        const title = inputValue;

        event.preventDefault();
        if (title?.length) {
            Api.create({
                title,
                tags: []
            }).then((newTodo: ITodo) => {
                setAllTodos([...allTodos, newTodo]);
                setInputValue('');
            })
        }
    }

    const deleteTodo = async (id: string) => {
        await Api.destroy(id);
        setAllTodos(allTodos.filter((todo) => todo.id !== id));
    }

    useEffect(() => {
        setTodos(
            allTodos.filter((todo: ITodo) =>
                todo.title.toLowerCase().includes(props.searchValue)
            )
        );
    }, [props.searchValue, allTodos]);

    return (
        <main className="content">
            <form className="todo-add-form" onSubmit={addTodo}>
                <input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className="todo-input"
                    type="text"
                    placeholder="Add todo..."
                    required />
            </form>
            <section className="todos">
                {todos.length
                    ? (
                        todos.map((todo) => (
                            <article className="todo" tabIndex={0} key={todo.id}>
                                <span className="todo__text">{todo.title}</span>
                                <div className="item-actions">
                                    <button type="button" className="item-actions__action">Complete</button>
                                    <button
                                        type="button"
                                        className="item-actions__action item-actions_type_delete"
                                        onClick={() => deleteTodo(todo.id as string)}
                                    >Delete</button>
                                </div>
                            </article>
                        ))
                    )
                    : (
                        props.searchValue
                            ? (
                                <div>Nothing found. Try another search, pls.</div>
                            ) : (
                                <div>Add your first todo!</div>
                            )

                    )}
            </section>
        </main>
    )
}