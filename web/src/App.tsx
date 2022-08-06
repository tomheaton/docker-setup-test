import React, {SyntheticEvent, useState} from 'react';
import './App.css';
import {useUsers} from "./hooks";
import toast from "react-hot-toast";

type Props = {};

const App: React.FC<Props> = () => {
    const [username, setUsername] = useState<string>("");
    const [name, setName] = useState<string>("");

    const {data, error, mutate} = useUsers();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        toast.success("user added");
        await mutate();

        try {

        } catch (error) {
            toast.error(`Error: ${error}`)
        }

        console.log("");
    }

    return (
        <div className={"App"}>
            <header className={"App-header"}>
                <h1>
                    Add User
                </h1>
                <br/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor={"username"}>
                        Username
                    </label>
                    <input
                        id={"username"}
                        type={"text"}
                        placeholder={"tomheaton"}
                        required
                        value={username}
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                    <br/>
                    <label htmlFor={"name"}>
                        Name
                    </label>
                    <input
                        id={"name"}
                        type={"text"}
                        placeholder={"Tom Heaton"}
                        required
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <br/>
                    <button type={"submit"}>
                        Add User
                    </button>
                </form>
                <br/>
                <div>
                    {error && (<p>Error!</p>)}
                    {!data && !error && (<p>Loading...</p>)}
                    {data?.map((user: any, index: number) => {
                        return (
                            <p>
                                {user.username}: {user.name}
                            </p>
                        );
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
