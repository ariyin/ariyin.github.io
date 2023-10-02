import React, { Component } from 'react'

export default function Project({ name, date, description, uix, code, image }) {
    return (
        <div style={{marginTop: 25 + 'px', marginBottom: 25 + 'px'}}>
            <img src = {image} width = {340} height = {200} style = {{borderRadius: 15 + 'px'}}/>
            {/* if uix or code = true/false, add the respective tags */}
            <h3 style = {{paddingTop: 15 + 'px'}}> {name} </h3>
            <h3> {date} </h3>
            <p style = {{maxWidth: 340 + 'px', paddingTop: 5 + 'px'}}> {description} </p>
        </div>
    )
}