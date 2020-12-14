import React from 'react'

const ButtonComponent = (props) =>  {
    const { color, readOnly } = props;
    return (
        <button
            style={{backgroundColor: color === 'blue'? 'blue': 'yellow'}}
            disabled={readOnly}
            onClick={() => props.onClick()}
        >{props.children}</button>
    )
}

export default ButtonComponent
