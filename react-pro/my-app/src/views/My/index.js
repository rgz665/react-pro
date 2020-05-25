import React, {Component} from 'react'
import GroupState from "./../../utils/group"
import {getAdvertList} from '@/api/common'
import './index.scss'
import qs from 'qs'
import Son from './../Son'
class My extends Component {
    constructor(props){
        super(props)
    }
    getIndexAdv(){
        getAdvertList().then(res => {
            console.log(res.date);
        })
    }
    componentWillMount(){
        let {location} = this.props;
        let name = "";
        // alert(this.props.match.params.id)
        // alert(this.props.location.query.title)
        if(location.query && location.query.title){
            name = location.query.title;
            sessionStorage.setItem('name', name)
        }else{
            name = sessionStorage.getItem('name')
        }
        // alert(name)
    }
    render(){
        this.getIndexAdv();
        let {name} = this.props;
        /* qs.parse()将URL解析成对象的形式 */
        // qs.stringify()将对象序列化成URL的形式
        // let content = this.props.location.search.replace("?", "");
        // console.log(content)
        // console.log(qs.parse(content));
        // console.log(this.props); //history location match
        return (
            <div style={{background:'yellow'}}>
                <Son name={1}/>
                {name}
                My
            </div>
        )
    }
}
My.propTypes = {

}
export default GroupState(My, {
    reducer:"commons",
    states:["name"]
}); 