import {useTypeSelector} from "../hooks/useTypeSelector";
import React, {useEffect} from "react";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useAction";


const UserList: React.FC = () => {
    const {users, loading, error} = useTypeSelector(state => state.user)
    const {fetchUsers} = useActions()


    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            { loading?
                'Идет загрузка'
            : users.map( name => <div key={name.id}>{name.name}</div>)
            }
        </div>
    )
}


export default UserList