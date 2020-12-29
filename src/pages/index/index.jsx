/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Swiper, SwiperItem, Navigator, Icon, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    // const { counterStore: { counter } } = this.props
    const scrollStyle = {
      height: '100vh'
    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '170px',
      'background-color': 'rgb(26, 173, 25)'
    }
    const vStyleB = {
      // marginTop: '12px',
       height: '53px',
      'background-color': 'rgb(255, 255, 255)',
      paddingTop: '20rpx'
    }
    const vStyleC = {
      height: '170px',
      'background-color': 'rgb(241,241,241)',
      color: '#333',
      padding:'5rpx'
    }
    return (
      <View className='index'>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
        >
          <View className='search'>
            <Navigator url='/pages/search/index' className='input'>
              <Icon className='icon' size='18' color='#666' type='search' />
              <Text className='txt'>商品搜索, 共00款好物</Text>
            </Navigator>
          </View>
          <View style={vStyleA}>
          <Swiper
            style={{ height: '170px' }}
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay={true}
          >
        <SwiperItem>
          <View className='demo-text-1'>
            <Image 
            style='width: 100%;height: 170px;background: #fff;'
            src='../resource/image/deng1.jpg'
            />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>
          <Image 
            style='width: 100%;height: 170px;background: #fff;'
            src='../resource/image/deng2.jpg'
            />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>
          <Image 
            style='width: 100%;height: 170px;background: #fff;'
            src='../resource/image/deng3.jpg'
            />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>
          <Image 
            style='width: 100%;height: 170px;background: #fff;'
            src='../resource/image/deng4.jpg'
            />
          </View>
        </SwiperItem>
      </Swiper>
        </View>
        <View style={vStyleB}>
          <View className='vStyleHeader'>
            <View className='headerList'>
              <Image className='vStyleHeaderImage' src='../resource/image/dengTitleIndex.png' />
            </View>
            <View className='headerListDown'>
              {/* <text style="line-height: 44px;"> */}
                灯饰
              {/* </text> */}
            </View>
          </View>
          <View  className='vStyleHeader'>
          <View className='headerList'>
              <Image className='vStyleHeaderImage' src='../resource/image/BagTitleIndex.png' />
            </View>
            <View className='headerListDown'>
              {/* <text style="line-height: 44px;"> */}
                浴霸
              {/* </text> */}
            </View>
          </View>
          <View className='vStyleHeader'>
          <View className='headerList'>
              <Image className='vStyleHeaderImage' src='../resource/image/openTitleIndex.png' />
            </View>
            <View className='headerListDown'>
              {/* <text style="line-height: 44px;"> */}
                开关
              {/* </text> */}
            </View>
          </View>
          <View className='vStyleHeader'>
          <View className='headerList'>
              <Image className='vStyleHeaderImage' src='../resource/image/yaTitleIndex.png' />
            </View>
            <View className='headerListDown'>
              {/* <text style="line-height: 44px;"> */}
                低压电器
              {/* </text> */}
            </View>
          </View>
          <View className='vStyleHeader'>
          <View className='headerList'>
              <Image className='vStyleHeaderImage' src='../resource/image/fengTitleIndex.png' />
            </View>
            <View className='headerListDown'>
              {/* <text style="line-height: 44px;"> */}
                换气扇
              {/* </text> */}
            </View>
          </View>
        </View>
        <View className='vStyleC'>
          <View className="contentListTitle">
            商家推荐
          </View>
          <View className='contentList'>
            <Image src='../resource/image/ritui.jpg' className='contentListImage' />
          </View>
          <View className='contentList'>
            <Image src='../resource/image/ritui1.jpg' className='contentListImage'/>
          </View>
          <View className='contentList'>
            <Image src='../resource/image/ritui2.jpg' className='contentListImage'/>
          </View>
          <View className='contentList'>
           <Image src='../resource/image/ritui1.jpg' className='contentListImage'/>
          </View>
        </View>
        <View className='vStyleD'>
          <View className="contentListTitle">
            热销商品
          </View>
          <View className='vStyleDcenter'>
            <View className='vStyleDList'>
              <Image src='../resource/image/list1.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  <Text className='textStyleNum'>
                    销售量: 100笔
                  </Text>
                  </View>
              </View>
            </View>
            <View className='vStyleDList'>
              <Image src='../resource/image/list2.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
            <View className='vStyleDList'>
              <Image src='../resource/image/list3.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
            <View className='vStyleDList'>
              <Image src='../resource/image/list4.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
            <View className='vStyleDList'>
              <Image src='../resource/image/list5.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
            <View className='vStyleDList'>
              <Image src='../resource/image/list6.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View className='vStyleD'>
          <View className="contentListTitle">
            营销商品
          </View>
          <View className='vStyleDcenter'>
            <View className='vStyleDList'>
              <Image src='../resource/image/list1.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  <Text className='textStyleNum'>
                    销售量: 100笔
                  </Text>
                  </View>
              </View>
            </View>
            <View className='vStyleDList'>
              <Image src='../resource/image/list2.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
            <View className='vStyleDList'>
              <Image src='../resource/image/list3.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
            
            <View className='vStyleDList'>
              <Image src='../resource/image/list4.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
            <View className='vStyleDList'>
              <Image src='../resource/image/list5.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
            <View className='vStyleDList'>
              <Image src='../resource/image/list6.jpg' className='vStyleDListImage' />
              <View className='vStyleDListText'>
                <Text>自由魔方</Text>
                <View className='vStyleDListTextStyle'>
                  <Text className='textStyleSamll'>￥</Text>
                  <Text className='textStyleBag'> 1200.00</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>

      </View>
      </View>
    )
  }
}

export default Index 
