import React, {Component} from 'react'
import './index.scss'
import { Checkbox } from 'antd';
import {Link} from 'react-router-dom'
class Home extends Component {
    constructor(props){
        super(props);
        this.goPath = this.goPath.bind(this);
    }
    goPath(){
        console.log(this)
        // params传参
        // this.props.history.push('/my/8')
        // query传参
        this.props.history.replace({
            pathname:"/my",
            query:{
                name:"rgz",
                title:"汉字"
            }
        })
//         ##11. 受控组件与非受控组件的区别
// 受控组件： 受到数据的控制。组件的变化依靠数据的变化，数据变化了，页面也会跟着变化了。
// 		  <input value={this.state.value}/>
// 		  输入框收到数据的控制，数据只要不变化，input框输什么都不行。


// 非受控组件： 直接操作dom，不做数据的绑定。通过refs来获取dom上的内容进行相关的操作。
// 			<input ref={el=>this.el=el}/>

// 非受控组件 

//   输入框的内容发生了变化，直接通过ref进行标记，直接使用即可

// 受控组件  

//     输入框的内容发生变化后，使其更改组件的状态，然后使用值的时候直接从状态中获取即可
    }
    render(){
        return (
            <div className="home" ref={el => this.el = el}>
                Homexsxsxs
                {/* <div >
                    点击
                </div> */}
                <Link to={{pathname:'/my', query:{name:"rgz"}}}>点击</Link>
                {/* <div onClick={this.goPath.bind(this)}>js跳转</div> */}
                <div onClick={this.goPath.bind(this)}>js跳转</div>
            </div>  
        )   
    }
}
export default Home;