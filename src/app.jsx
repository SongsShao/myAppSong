/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.less'
import './pages/assets/fonts/iconfont.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/search/index',
      'pages/catalog/index',
      'pages/cart/cart',
      'pages/ucenter/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#CCC',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "backgroundColor": "#fafafa",
      "borderStyle": "white",
      "selectedColor": "#AB956D",
      "color": "#666",
      "list": [{
        "pagePath": "pages/index/index",
        "iconPath": 'pages/resource/icon/home1.png',
        "selectedIconPath": 'pages/resource/icon/home.png',
        "text": "首页"
      }, {
        "pagePath": "pages/catalog/index",
        "iconPath": 'pages/resource/icon/menu1.png',
        "selectedIconPath": 'pages/resource/icon/menu.png',
        "text": "分类"
      }, {
        "pagePath": "pages/cart/cart",
        "iconPath": 'pages/resource/icon/cart1.png',
        "selectedIconPath": 'pages/resource/icon/cart.png',
        "text": "购物车"
      }, {
        "pagePath": 'pages/ucenter/index',
        "iconPath": 'pages/resource/icon/nickname1.png',
        "selectedIconPath": 'pages/resource/icon/nickname.png',
        "text": "个人"
      }]
    },
    "networkTimeout": {
      "request": 10000,
      "downloadFile": 10000
    },
    "debug": true,
  }

  componentDidMount () {}
  componentWillMount() {
    this.update();
  }
  update = () => {
    if(process.env.TARO_ENV === 'weapp') {
      const updateManager = Taro.getUpdateManager();
      Taro.getUpdateManager().onUpdateReady(function() {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
    }
  }
  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
