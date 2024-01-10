import React, { useState } from 'react'
export const Loginfrom = (props) => {

    //creates stateHooks variables for the component
    const [userName, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [login, setLogin] = useState(false)
    const [optionMenu, setOptionMenu] = useState()
    const [fetchMsg, setFetchMsg] = useState(<div></div>)
    
    //Variables that correspond to each column of a row in the API's table
    const [id, setId] = useState()
    const [img, setImg] = useState()
    const [originalUrl, setOriginalUrl] = useState()
    const [name, setName] = useState()
    const [brand, setBrand] = useState()
    const [price, setPrice] = useState()
    const [size, setSize] = useState()
    const [type, setType] = useState()

    //retrieves the data array passed in by parent
    const data = props.data
    //creates a row for each item in the data array, adpating the rows to match the item's properties
    const rows = data.map(item => (
        <div key={item.id} className="rowData">
            <p className="rowP">id: {item.id}</p>
            <p className="rowP">name: {item.name}</p>
            <p className="rowP">type: {item.type}</p>
        </div>

    ))

    //handles the submit ever on the loggin form button
    const handleSubmit = (e) => {
        //prevets the page from reloading (default action of a from submission)
        e.preventDefault()
        //compares the current state of login-related varibles to the accepted strings
        if (userName === "admin" && pass === "admin") {
            //sets the state of the login variable as true, meaning the user is now logged in
            setLogin(true)
        } else {
            //alerts for wrong input in the form
            alert("wrong credentials!!")
            //redundency to ensure the user stays logged out
            setLogin(false)
        }
    }

    //handles the CREATE operation of the CRUD system
    const handleAdd = (e) => {
        //url to be fetched
        let url = 'https://api.sheety.co/933c1e54117bebf9492ad891fe3f0b73/fitArenaGallery/gallery';
        //prevets the page from reloading (default action of a from submission)
        e.preventDefault()
        //creates the object based on all related variables states
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
        //fetches the url in POST method (Code by Sheety documentation)
        fetch(url, {
            method: 'POST',
            headers: {
                //defines expected response format
                'Accept': 'application/json',
                //informs the sent data format
                'Content-Type': 'application/json'
            },
            //turns the previously created object into a JSON string
            body: JSON.stringify(body)
        }).then(() => {     //defines what to execute after the fetch in concluded
            //sets the ADD form back to invisivle
            setOptionMenu(0)
            //display a feedback for 3 seconds
            setFetchMsg(<div>ADDED!!</div>)
            setTimeout(() => {
                setFetchMsg()
            }, 3000)
        })

    }
    //handles the DELETE operation of the CRUD system
    const handleDelete = (e) => {
        //prevets the page from reloading (default action of a from submission)
        e.preventDefault()
        //defines the url to be used in fetch with the endpoint of the correct row to delete (current id state)
        let url = 'https://api.sheety.co/933c1e54117bebf9492ad891fe3f0b73/fitArenaGallery/gallery/' + id;
        //fetches the url in DELETE method (Code by Sheety documentation)
        fetch(url, {
            method: 'DELETE',
        }).then(() => {     //defines what to execute after the fetch in concluded
            //sets the UPDATE form back to invisivle
            setOptionMenu(0)
            //display a feedback for 3 seconds
            setFetchMsg(<div>DELETED!!</div>)
            setTimeout(() => {
                setFetchMsg()
            }, 3000)
        })

    }
    //handles the UPDATE operation of the CRUD system
    const handleUpdate = (e) => {
        //prevets the page from reloading (default action of a from submission)
        e.preventDefault()
        //defines the url to be used in fetch with the endpoint of the correct row to update (current id state)
        let url = 'https://api.sheety.co/933c1e54117bebf9492ad891fe3f0b73/fitArenaGallery/gallery/' + id;
        //creates the object based on all related variables states, 
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
        //fetches the url in PUT method (Code by Sheety documentation)
        fetch(url, {
            method: 'PUT',
            headers: {
                //defines expected response format
                'Accept': 'application/json',
                //informs the sent data format
                'Content-Type': 'application/json'
            },
            //turns the previously created object into a JSON string
            body: JSON.stringify(body)
        }).then(() => {     //defines what to execute after the fetch in concluded
            //sets the UPDATE form back to invisivle
            setOptionMenu(0)
            //display a feedback for 3 seconds
            setFetchMsg(<div>UPDATED!!</div>)
            setTimeout(() => {
                setFetchMsg()
            }, 3000)
        })

    }

    //define what to render if user is not logged in
    const notLogged = (
        <>
            <h2 className="devTitle">THIS AREA IS ONLY FOR DEVELOPERS!!</h2> 
            <div className="loginFrom">
                {/* login form */}
                <form onSubmit={handleSubmit}>
                    <label className="loginLabel">Username:</label>
                    {/* the userName variable state is always updated by the onChange event of this label, meaning it will update character by character */}
                    <input className="loginInput" type="password" required value={userName} onChange={(e) => setUsername(e.target.value)} />
                    <label className="loginLabel">Password:</label>
                    {/* the pas variable state is updated just like the userName variable*/}
                    <input className="loginInput" type="password" required value={pass} onChange={(e) => setPass(e.target.value)} />
                    {/* button to trigger the onSubmit event of the from */}
                    <button className="btnSubmit">Login</button>
                </form>
            </div>
        </>
    )
    
    //define what to render if user is logged in
    const logged = (
        <>
            <h2 className="devTitle2">Welcome back!</h2>
            <h3>What do we want to do today?</h3>
            <div className="devOptions">
                {/* this buttons will control what CRUD form is displayed acordding to the optionMenu state */}
                <button onClick={(e) => setOptionMenu(1)}>ADD TO THE DATABASE</button>
                <button onClick={(e) => setOptionMenu(2)}>REMOVE FROM DATABASE</button>
                <button onClick={(e) => setOptionMenu(3)}>UPDATE ROW</button>
            </div>
            {/* form for the CRUD operation "ADD"  */}
            {/* 
                The form will only render if the state of the "optionMenu" variable matches its designation 
                Each input in this form will update the corresponding state variable with its content, using the onChange trigger
            */}
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
                    {/* button to trigger the correspondent CRUD operation of this form, via the API */}
                    <button className="crudBtn">ADD</button>
                </form>
            </div>
            {/* form for the CRUD operation "DELETE"  */}
            {/* 
                The form will only render if the state of the "optionMenu" variable matches its designation 
                The input in this form will update the corresponding state variable with its content, using the onChange trigger
            */}
            <div className="crudDiv" style={optionMenu === 2 ? { display: "inherit" } : { display: "none" }}>
                <form onSubmit={handleDelete} className="crudFrom">
                    <label className="crudIDLabel">ID to Delete</label>
                    <input type="text " className="crudInput" onChange={(e) => setId(e.target.value)} />
                    {/* button to trigger the correspondent CRUD operation of this form, via the API */}
                    <button className="crudBtn">Delete</button>
                </form>
            </div>
            {/* form for the CRUD operation "UPDATE"  */}
            {/* 
                The form will only render if the state of the "optionMenu" variable matches its designation 
                Each input in this form will update the corresponding state variable with its content, using the onChange trigger
            */}
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
                    {/* button to trigger the correspondent CRUD operation of this form, via the API */}
                    <button className="crudBtn">Update</button>
                </form>
            </div>
            {/* message to diplay after each CRUD operation */}
            {fetchMsg}
            <div className="currentData">
                <h4>Current database items:</h4>
                {/* all the items that were on the database on the App component fetched its data, are displayed on the backoffice */}
                {rows}
            </div>
        </>
    )

    //check the state of the login varible to render the correct page
    return (login ? logged : notLogged)

}