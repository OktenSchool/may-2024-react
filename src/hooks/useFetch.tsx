import {useEffect, useState} from "react";

export const useFetch = () => {

    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json()
                .then(data => setUsers(data)))
    });

    return users;

}
