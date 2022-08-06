import React, {SyntheticEvent, useState} from 'react';
import './App.css';

type Props = {};

const App: React.FC<Props> = () => {
    const [username, setUsername] = useState<string>("");
    const [name, setName] = useState<string>("");

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
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
            </header>
        </div>
    );
}

export default App;
