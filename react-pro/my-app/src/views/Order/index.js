import React, {Component, useState, useEffect} from 'react'
import './index.scss'
// class Order extends Component {
//     render(){
//         return (
//             <div>
//                 Order
//             </div>
//         )
//     }
// }
function Order(){
    // 值、 函数
    const [count, setCount] = useState(0);
    // 类似于componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 更新文档的标题
        document.title = `当前${count}页面`
    })
    return (
        <div>
            {count}<br/>
            {/* {name}<br/> */}
            新hooks
            <div className="top" onClick={() => setCount(count + 1)}>
                点击
            </div>
        </div>
    )
}
export default Order;