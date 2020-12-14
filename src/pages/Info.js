import React from 'react'
import qs from 'qs'
// 목업데이터
const data = {
    user1: {
        name: '홍길동',
        detail: 'hong gill dong detail'
    },
    user2: {
        name: '김둘리',
        detail: 'kim dool li detail'
    }
}
const Info = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // url 상에 앞에 ? 를 ignore함 
    })
    console.log("location >> ", location);
    console.log("query >> ", query.detail)
    const queryCheck = data[query.detail];
    return (
        <div>
            This is info Page! <br/>
            {
                queryCheck &&
                <p>{queryCheck.detail}</p>
            }
        </div>
    )
}
export default Info
