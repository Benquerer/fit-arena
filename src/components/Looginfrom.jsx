import React, { useState } from 'react'
export const Looginfrom = (props) => {

    const url = 'https://api.sheety.co/933c1e54117bebf9492ad891fe3f0b73/fitArenaGallery/gallery';

    const [userName, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [login, setLogin] = useState(false)
    const [optionMenu, setOptionMenu] = useState()
    const [fetchMsg, setFetchMsg] = useState(<div></div>)
    const [id, setId] = useState()
    const [img, setImg] = useState()
    const [originalUrl, setOriginalUrl] = useState()
    const [name, setName] = useState()
    const [brand, setBrand] = useState()
    const [price, setPrice] = useState()
    const [size, setSize] = useState()
    const [type, setType] = useState()
    
    const data = props.data
    const rows = data.map(item => (
        <div key={item.id} className="rowData">
            <p className="rowP">id: {item.id}</p>
            <p className="rowP">name: {item.name}</p>
            <p className="rowP">type: {item.type}</p>
        </div>

    ))

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName === "admin" && pass === "admin") {
            setLogin(true)
        } else {
            alert("wrong credentials!!")
            setLogin(false)
        }
    }

    const handleAdd = (e) => {
        e.preventDefault()
        let body = {
            gallery: {
                id: id,
                img: img,
                originalUrl: originalUrl,
                name: name,
                brand: brand,
                price: price,
                size: size,
                type: type
            }
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        setOptionMenu(0)
        setFetchMsg(<div>ADDED!!</div>)
        setTimeout(() => {
            setFetchMsg()
        }, 3000);
    }
    const handleDelete = (e) => {
        e.preventDefault()
        let url = 'https://api.sheety.co/933c1e54117bebf9492ad891fe3f0b73/fitArenaGallery/gallery/' + id;
        console.log(url)
        fetch(url, {
            method: 'DELETE',
        })
        setFetchMsg(<div>DELETED!!</div>)
        setTimeout(() => {
            setFetchMsg()
        }, 3000);
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        let url = 'https://api.sheety.co/933c1e54117bebf9492ad891fe3f0b73/fitArenaGallery/gallery/' + id;
        let body = {
            gallery: {
                id: id,
                img: img,
                originalUrl: originalUrl,
                name: name,
                brand: brand,
                price: price,
                size: size,
                type: type
            }
        }
        console.log(body);
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          })
          .then((response) => response.json())
          .then(json => {
            // Do something with object
            console.log(json.gallery);
          });
        setOptionMenu(0)
        setFetchMsg(<div>UPDATED!!</div>)
        setTimeout(() => {
            setFetchMsg()
        }, 3000);
    }

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
                <button onClick={(e) => setOptionMenu(1)}>ADD TO DE DATABASE</button>
                <button onClick={(e) => setOptionMenu(2)}>REMOVE FROM DATABASE</button>
                <button onClick={(e) => setOptionMenu(3)}>UPDATE ROW</button>
            </div>
            <div className="crudDiv" style={optionMenu === 1 ? { display: "inherit" } : { display: "none" }}>
                <form onSubmit={handleAdd} className="crudFrom">
                    <label className="crudIDLabel">ID: </label>
                    <input type="text " className="crudInput" onChange={(e) => setId(e.target.value)} />
                    <label className="crudLabel">Item Image:</label>
                    <input type="text " className="crudInput" onChange={(e) => setImg(e.target.value)} />
                    <label className="crudLabel">Item URL:</label>
                    <input type="text " className="crudInput" onChange={(e) => setOriginalUrl(e.target.value)} />
                    <label className="crudLabel">Item Name: </label>
                    <input type="text " className="crudInput" onChange={(e) => setName(e.target.value)} />
                    <label className="crudLabel">Item Brand:</label>
                    <input type="text " className="crudInput" onChange={(e) => setBrand(e.target.value)} />
                    <label className="crudLabel">Item Price:</label>
                    <input type="text " className="crudInput" onChange={(e) => setPrice(e.target.value)} />
                    <label className="crudLabel">Item Size:</label>
                    <input type="text " className="crudInput" onChange={(e) => setSize(e.target.value)} />
                    <label className="crudLabel">Item Type:</label>
                    <input type="text " className="crudInput" onChange={(e) => setType(e.target.value)} />
                    <button className="crudBtn">ADD</button>
                </form>
            </div>
            <div className="crudDiv" style={optionMenu === 2 ? { display: "inherit" } : { display: "none" }}>
                <form onSubmit={handleDelete} className="crudFrom">
                    <label className="crudIDLabel">ID to Delete</label>
                    <input type="text " className="crudInput" onChange={(e) => setId(e.target.value)} />
                    <button className="crudBtn">Delete</button>
                </form>
            </div>
            <div className="crudDiv" style={optionMenu === 3 ? { display: "inherit" } : { display: "none" }}>
                <form onSubmit={handleUpdate} className="crudFrom">
                    <label className="crudIDLabel">ID to update: </label>
                    <input type="text " className="crudInput" onChange={(e) => setId(e.target.value)} />
                    <label className="crudLabel">Item Image:</label>
                    <input type="text " className="crudInput" onChange={(e) => setImg(e.target.value)} />
                    <label className="crudLabel">Item URL:</label>
                    <input type="text " className="crudInput" onChange={(e) => setOriginalUrl(e.target.value)} />
                    <label className="crudLabel">Item Name: </label>
                    <input type="text " className="crudInput" onChange={(e) => setName(e.target.value)} />
                    <label className="crudLabel">Item Brand:</label>
                    <input type="text " className="crudInput" onChange={(e) => setBrand(e.target.value)} />
                    <label className="crudLabel">Item Price:</label>
                    <input type="text " className="crudInput" onChange={(e) => setPrice(e.target.value)} />
                    <label className="crudLabel">Item Size:</label>
                    <input type="text " className="crudInput" onChange={(e) => setSize(e.target.value)} />
                    <label className="crudLabel">Item Type:</label>
                    <input type="text " className="crudInput" onChange={(e) => setType(e.target.value)} />
                    <button className="crudBtn">Update</button>
                </form>
            </div>
            {fetchMsg}
            <div className="currentData">
                <h4>Current database items:</h4>
                {rows}
            </div>
        </>
    ) 

    return (login ? logged : notLogged)
    
}