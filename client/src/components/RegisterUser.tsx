import React from "react";

function RegisterUser() {
    return (
        <>
            <form className={"mt-3"}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre completo:</label>
                    <input required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Correo:</label>
                    <input type="email" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export {RegisterUser};