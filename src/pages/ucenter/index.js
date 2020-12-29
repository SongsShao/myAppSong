import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Swiper, SwiperItem, Navigator, Icon, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


@inject('counterStore')
@observer
class Index extends Component{
    config = {
        navigationBarTitleText: '个人'
      }
    
      componentWillMount () { }
    
      componentWillReact () {
        console.log('componentWillReact')
      }
    
      componentDidMount () { }
    
      componentWillUnmount () { }
    
      componentDidShow () { }
    
      componentDidHide () { }
    render(){
        return(
            <View></View>
        )
    }
}

export default Index 