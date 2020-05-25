
import React, { Component } from 'react'
import { Route, Redirect, Switch} from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import AllViews from './../views'
import routesConfig from './config'
import queryString from 'query-string'

export default class CRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" push />} />
                {Object.keys(routesConfig).map(key =>
                    routesConfig[key].map(r => {
                        const route = r => {
                            const Component = AllViews[r.component];
                            return (
                                <Route
                                    key={r.key}
                                    exact
                                    path={r.key}
                                    render={props => {
                                        const reg = /\?\S*/g;
                                        // 匹配?及其以后字符串 返回一个可匹配的数组
                                        const queryParams = window.location.hash.match(reg); //数组
                                        // 去除?的参数
                                        const { params } = props.match;
                                        Object.keys(params).forEach(key => {
                                            params[key] =
                                                params[key] && params[key].replace(reg, '');
                                        });
                                        props.match.params = { ...params };
                                        const merge = {
                                            ...props,
                                            query: queryParams
                                                ? queryString.parse(queryParams[0])  //取出数组中的第一项然后将字符串去掉？然后成转对象
                                                : {},
                                        };
                                        // 重新包装组件
                                        const wrappedComponent = (
                                            <DocumentTitle title={r.title}>
                                                <Component {...merge} />
                                            </DocumentTitle>
                                        );
                                        return wrappedComponent
                                    }}
                                />
                            );
                        };
                        return r.component ? route(r) : "";
                    })
                )}
                {/* 都不匹配路径的时候执行 */}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        );
    }
}
// component
// 当使用component（而不是render/children）时，
// 这个router会使用React.createElement去创建一个ReactElement。这意味着：
// 如果component设置的是一个内联函数，每次渲染你都将创建一个新的组件。每次更新，
// 都存在组建的卸载和挂载。如果你要设置一个内联函数进行渲染，请使用render或者children属性。

// render: func
// render属性能使你便捷的渲染内联组件或是嵌套组件，你可以给这个属性传入一个函数，
// 当路由的路径匹配时调用。同时，render属性也会接受所有由route传入的所有参数。

// children: func
// children是三个中比较特殊的。当children的值是一个函数时，
// 无论当前地址和path路径匹不匹配，都将会执行children对应的函数。

// 注意：
// 当children为<Component />(Component为组件名)即<Route children={<Component />}时，当前地址和path不匹配时，Component组件不渲染。
// 当Route被Switch包裹时，和上述结果一样，当前地址和path不匹配时，Component组件不渲染。

// https://blog.csdn.net/wangyuegyq/article/details/103296048





