import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Swiper, SwiperItem, Navigator, Icon, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtIcon } from 'taro-ui'
import './index.less'
//引入阿里图标库
// import '../assets/fonts/iconfont.less'


@inject('counterStore')
@observer
class Index extends Component{
    config = {
        navigationBarTitleText: '购物车'
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
            <View className='index'>
              <View className='header'>
                <View className='headerLeft'>
                  {/* <Image */}
                  <View className='headerLeftImage'>
                    <AtIcon prefixClass='icon' value='address' size='28' color='#999'></AtIcon>
                  </View>
                  <View className='headerLeftText'>
                    陕西省西安市西咸新区三桥新街...
                  </View>
                </View>
                <View className='headerRight'>
                  <View className='headerRightStyle'>
                    <View className='headerRightImage'><AtIcon prefixClass='icon' value='checkmore' size='30' color='#999'></AtIcon></View>
                    <View className='headerRightText'>编辑</View>
                  </View>
                </View>
              </View>
            </View>
        )
    }
}

export default Index 