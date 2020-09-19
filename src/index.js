import React, { Component } from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {Provider} from './Context'
import {ProviderContainer} from './Context'
import {Context} from './Context'


ReactDom.render(
    <ProviderContainer>
        <App />

    </ProviderContainer>
   



,document.getElementById('root'))