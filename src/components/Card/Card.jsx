import React from 'react'

export  function Card({ title, description, children }) {
  return (
    <div className="card" style={{width: 18 + 'rem'}}>
        { children }
        <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ description }</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
