import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from './actionCreators'
//GroupState(Banner,{
//   reducer: "home",
//   states:["banners"]
// });
const GroupState = (UIComponent, options) => {
    return connect(state=>{
        if(!options) return state;// state.home.banners state.commons  this.props.navs/banners/userInfo
        let {states} = options;
        if(!states) return state[options.reducer];//state.home  //this.props.navs/banners
        let _state={}
        states.forEach(s=>{
            _state[s] = state[options.reducer][s] //state.home.banners  {banners:null}
        })
        return _state;
    },dispatch=>{
        if(!options){
            let actions = {}
            for(var key in actionCreators){ //
                // actions = Object.assign({}, actionCreators[key]);
                actions = {...actionCreators[key]};
            }
            return bindActionCreators(actions, dispatch)
        }
        return bindActionCreators(actionCreators[options.reducer],dispatch);
    })(UIComponent);
}

export default GroupState;