import React from 'react'

export default function Project({ name, date, description, uix, code, image, link }) {
    return (
        <div className = "grow" style={{marginTop: 25 + 'px', marginBottom: 25 + 'px'}}>
            <div className = "component-scale">
                <img src = {image} alt = "project thumbnail" loading = "lazy" width = {340} style = {{borderRadius: 15 + 'px'}}/>
                {code ? (
                    <span>
                        <span className = "tag"> code </span>
                        {uix ? <span className = "shifted-tag"> ui/ux </span> : null}
                    </span>
                    ) : (uix ? <span className = "tag"> ui/ux </span> : null)}
            </div>
            <h3> {name} </h3>
            <h3> {date} </h3>
            <p className = "width-scale" style = {{paddingTop: 5 + 'px'}}> {description} </p>
        </div>
    )
}