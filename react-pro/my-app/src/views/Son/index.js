import React, {Component} from 'react'
import './index.scss'
import PropTypes from 'prop-types'

const TodoList = (props) => {
    return (
        <div>无状态组件</div>
    )
}
class Son extends Component {
    render(){
        console.log(this)
        return (
            <div>
                Son
                <TodoList/>
                {this.props.name}
            </div>
        )
    }
}
Son.propTypes = {
    // array
    // bool
    // func
    // number
    // object
    // string
    // symbol
    // node
    // element
    name:PropTypes.number
}


export default Son;