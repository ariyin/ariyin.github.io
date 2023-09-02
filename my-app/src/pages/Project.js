import React, { Component } from 'react'

export default function Project({ name, date, description, uix, code, image }) {
    return (
        <div>
            <img src = {image} width = {340} height = {200} style = {{borderRadius: 15 + 'px'}}/>
            {/* if uix or code = true/false, add the respective tags */}
            <h2 style = {{paddingTop: 15 + 'px'}}> {name} </h2>
            <h3> {date} </h3>
            <p style = {{maxWidth: 340 + 'px', paddingTop: 5 + 'px'}}> {description} </p>
        </div>
    )
}