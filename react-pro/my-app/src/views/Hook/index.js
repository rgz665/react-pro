import React, {useState, useEffect} from 'react'
import './index.scss'
function Hook(props){
    const [isOnline, setOnline] = useState('rgz')
    function setName(val){
        setOnline(val)
    }
    // 相当于 componentDidMount componentDidUpdate componentWillUnmount
    useEffect(() => {
        // ChatAPI.subscribeToFriendStatus(props.friend.id, setOnline)
        // // 数据变化之后，重新渲染的时候调用cleanup函数 清除上次的绑定事件
        // return function cleanup(){
        //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, setOnline)
        // }
    }, [isOnline])
    // 告诉react只有当isOnline数据变化的时候参会执行更新useEffect函数
    return (
        <div>
            {isOnline}
        </div>
    )
}
export default Hook;