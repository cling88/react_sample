import React from 'react'
const data = {
    user1: {
        name: '홍길동',
        userId: 'hong'
    },
    user2: {
        name: '김둘리',
        userId: 'kim'
    }
}
const User = ({ match }) => {
    const userid = match.params.userid;
    const userId2 = data[userid];
    console.log("userId :: ", userid);
    console.log("userId2 :: ", userId2);
    
    return (
        <div>
            This is User Page! <br/>
            {
                userId2 ?
                <p>User id is {userid}</p> : 
                <p>No User</p>
            }
        </div>
    )
}
export default User
