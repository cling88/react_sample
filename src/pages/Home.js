import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
function Home() {
    const handleClick1 = () => {
        alert('button01')
    }

    const handleClick2 = (data) => {
        alert('button01 with ' + data)
    }

    return (
        <div>
            This is Home Page! <br/>
            <ButtonComponent
                color="blue"
                readOnly={false}
                onClick={handleClick1}
            >test1</ButtonComponent>Z
            <ButtonComponent
                color="blue"
                readOnly={false}
                onClick={() => handleClick2("kim")}
            >test1</ButtonComponent>
            <ButtonComponent
                readOnly={true}
            >test2</ButtonComponent>
        </div>
    )
}

export default Home
