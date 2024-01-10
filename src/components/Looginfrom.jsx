import React, { useState } from 'react'

export const Looginfrom = (props) => {

    const [userName, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [login, setLogin] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName==="admin" && pass==="admin") {
            setLogin(true)
        } else {
            alert("wrong credentials!!")
            setLogin(false)
        }
    }

    const data = props.data
    const rows = data.map(item => ( 
            <div className="rowData">
                <p className="rowP">id: {item.id}</p>
                <p className="rowP">name: {item.name}</p>
                <p className="rowP">type: {item.type}</p>
            </div>
            
    ))

    const notLogged = (
        <>
        <h2 className="devTitle">THIS AREA IS ONLY FOR DEVELOPERS!!</h2>
            <div className="loginFrom">  
                <form onSubmit={handleSubmit}>
                    <label className="loginLabel">Username:</label>
                    <input className="loginInput" type="password" required value={userName} onChange={(e) => setUsername(e.target.value)} />
                    <label className="loginLabel">Password:</label>
                    <input className="loginInput" type="password" required value={pass} onChange={(e) => setPass(e.target.value)} />
                    <button className="btnSubmit">Login</button>
                </form>
            </div>
        </>
    )

    const logged = (
        <>
            <h2 className="devTitle2">Welcome back!</h2>
            <h3>What do we want to do today?</h3>
            <div className="devOptions">
                <button>ADD TO DE DATABASE</button>
                <button>REMOVE FROM DATABASE</button>
                <button>UPDATE ROW</button>
                <button>REFRESH</button>
            </div>
            <div className="currentData">
                <h4>Current database items:</h4>
                {rows}
            </div>
        </>
    )

    return (login?logged:notLogged)
}
