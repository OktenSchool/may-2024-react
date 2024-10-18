import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/PaginationComponent";
import {apiService} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import Todos from "../components/Todos";
import {ITodo} from "../models/ITodo";

const TodosPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page');

        if (page) {
            apiService.todo
                .getAll(+page)
                .then(value => {
                    setTodos(value.todos);
                    const lastId = value.todos[value.todos.length - 1].id;
                    if (lastId >= value.total) {
                        setFlag(true);
                    }else{
                        setFlag(false);

                    }
                    console.log(lastId);
                });

        }


    }, [query]);

    return (
        <div>
            <Todos todos={todos}/>
            <PaginationComponent flag={flag}/>
        </div>
    );
};

export default TodosPage;
