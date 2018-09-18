Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    duration: 1000,
    list:[],
    msg:'',
    count:0,
    flag:false,
     markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  input(e) {
    this.setData({
      msg: e.detail.value
    })
  },
  add(){
    this.data.list.push(this.data.msg)
    this.setData({
      list: this.data.list,
      msg: ''
    })
  },
  del(e){
    var index = e.currentTarget.dataset.index
    this.data.list.splice(index,1)
    this.setData({
      list: this.data.list
    })  
  },
  all(e){
    console.log(e)
    this.data.flag = !this.data.flag;
    this.setData({
      flag: this.data.flag
    })
    if (this.data.flag){
      this.setData({
        count: this.data.list.length
      })
    }else{
      this.setData({
        count: 0
      })
    }  
  },
  checkboxChange(e){
    this.data.count = e.detail.value.length
    this.setData({
      count: this.data.count
    })
  }
})