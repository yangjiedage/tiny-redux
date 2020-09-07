# 什么是redux

redux是一个状态管理的方案，基于flux思想实现的js库

## 原则
- 单一数据源。生成全局唯一store，一个项目只能有一个store。
  > store本质上就是一个state tree。
- state Read Only。不能直接修改state。
- 使用纯函数修改state。本质上是新生成state，而不是去修改原本的state。
  > 这样做的好处：1、新旧state，可以实现diff。2、有旧state，可以实现回溯。
## Redux需要实现的方法
  1. createStore。  
      参数：initState、reducers、enhancer。  
      参数解释:
        - initState。初始化的state。
        - reducers。接受action和state，生成新state的纯函数。
        - enhancer。增强器，提供中间件扩展。  

      返回：Store。  
      Store的方法：
        - dispatch。  
        输入： action。触发reducer，生成新的state。  
        - subscribe。  
        输入：function。当调用dispatch的时候，触发，调用所有的subscirbe的函数  
        - getState。  
        返回所有的state。  
        - bindActionCreators。
  2. applyMiddleware。  
    参数：middlewares。  
    参数解释:  
      - middlewares。中间件的list，比如thunk、log等。
  3. combineReducers。  
    用来合并各个reducers。

  