import { useState, useEffect } from 'react';

const useUsersData = () => {
    const [ users, setUsers ] = useState([]);
    const getData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const data = await fetch(url);
        const json = await data.json();
        setUsers(json);
    }
    useEffect(() => {
        getData();
    }, []);

    return users;
}


export default useUsersData;