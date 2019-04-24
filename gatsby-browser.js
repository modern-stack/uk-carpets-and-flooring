import './src/styles/global.css'

import React from 'react'

import { Context } from './src/Context'

export const wrapRootElement = ({ element }) => <Context>{element}</Context>
