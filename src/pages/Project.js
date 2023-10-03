import React from 'react'

export default function Project({ name, date, description, uix, code, image }) {
    return (
        <div className = "grow" style={{marginTop: 25 + 'px', marginBottom: 25 + 'px'}}>
            <img src = {image} alt = "project thumbnail" loading = "lazy" width = {340} height = {200} style = {{borderRadius: 15 + 'px'}}/>
            {code ? (
                <span>
                    <span className = "tag"> code </span>
                    {uix ? <span className = "shifted-tag"> ui/ux </span> : null}
                </span>
                ) : (uix ? <span className = "tag"> ui/ux </span> : null)}
            <h3 style = {{paddingTop: 15 + 'px'}}> {name} </h3>
            <h3> {date} </h3>
            <p style = {{maxWidth: 340 + 'px', paddingTop: 5 + 'px'}}> {description} </p>
        </div>
    )
}