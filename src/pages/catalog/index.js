import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Swiper, SwiperItem, Navigator, Icon, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.less'


@inject('counterStore')
@observer
class Index extends Component{
    config = {
        navigationBarTitleText: '分类'
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
              <View className='search'>
                <Navigator url='/pages/search/index' className='input'>
                  <Icon className='icon' size='18' color='#666' type='search' />
                  <Text className='txt'>商品搜索, 共00款好物</Text>
                </Navigator>
              </View>
              <View className='catalog'>
                <View className='catalogLeft'>
                  <View className='leftList active'>
                    灯饰
                  </View>
                  <View className='leftList'>
                    开关
                  </View>
                  <View className='leftList'>
                    浴霸
                  </View>
                  <View className='leftList'>
                    换气扇
                  </View>
                  <View className='leftList'>
                    低压电器
                  </View>
                </View>
                <View className='catalogRight'>
                  <View className='rightCard'>
                    <View className='rightCardTitle'>
                      现代系列
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list1.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list2.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list3.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list4.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list5.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className='rightCard'>
                    <View className='rightCardTitle'>
                      现代系列
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list1.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list2.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list3.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list4.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list5.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className='rightCard'>
                    <View className='rightCardTitle'>
                      现代系列
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list1.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list2.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list3.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list4.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list5.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className='rightCard'>
                    <View className='rightCardTitle'>
                      现代系列
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list1.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list2.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list3.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list4.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                    <View className='rightCardBody'>
                      <View className='bodyList'>
                        <Image src='../resource/image/list5.jpg' className='bodyListImage' />
                        <View className='bodyListText'>
                          自由魔方
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
        )
    }
}

export default Index 