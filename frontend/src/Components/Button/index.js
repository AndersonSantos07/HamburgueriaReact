import React from 'react'
import { Button } from './styles'

function ButtonComponent ({children, newStyle, ...props}){
   
    return(
        <Button {...props} newStyle={newStyle}>{children}</Button>
    )
}

export default ButtonComponent