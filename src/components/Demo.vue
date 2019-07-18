<template>
  <div>
    <div>
    <div id="myChart" :style="{width: '50%', height: '400px',float: 'left'}" ></div>
    <div id="topLeft" :style="{width: '50%', height: '400px',float: 'right'}" >
      <div id="topLeftLeft" :style="{width: '50%', height: '400px',float: 'left'}" ></div>
      <div id="topLefRight" :style="{width: '50%', height: '400px',float: 'right'}" ></div>
    </div>
  </div>
    <div>
      <div id="myChart1" :style="{width: '50%', height: '400px',float: 'left'}" >1</div>
      <div id="zheX" :style="{width: '50%', height: '400px',float: 'right'}" ></div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'Demo',
  data: function () {
    debugger
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
    this.drawLine2()
    this.topLeftLeft()
    this.topLefRight()
    // this.a()
  },
  methods: {
    a: function (that, params, urls) {
      that.$router.push({
        name: urls,
        // query get请求 params post请求
        query: {
          name: 'db',
          cq: params.name,
          id: params.value
        }
      })
    },
    drawLine: function () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {text: '每月发车数'},
        tooltip: {},
        xAxis: {
          data: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
      let that = this
      myChart.on('click', function (params) {
        if (params.value) {
          alert('单击了' + params.name + '柱状图' + '销量为' + params.value)
          that.$options.methods.a(that, params, 'OnTheOrder')
        } else {
          alert('单击了' + params.name + 'x轴标签')
        }
      })
    },
    drawLine2: function () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('zheX'))
      // 绘制图表
      myChart.setOption({
        title: {text: '折线图'},
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
      let that = this
      myChart.on('click', function (params) {
        if (params.value) {
          alert('单击了' + params.name + '柱状图' + '销量为' + params.value)
          that.$options.methods.a(that, params)
        } else {
          alert('单击了' + params.name + 'x轴标签')
        }
      })
    },
    topLeftLeft: function () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('topLeftLeft'))
      // 绘制图表
      myChart.setOption({
        title: {text: '始发站'},
        series: [
          {
            name: '访问来源',
            type: 'pie',
            center: ['40%', '60%'],
            data: [
              {value: 335, name: '上海'},
              {value: 310, name: '广州'},
              {value: 234, name: '深圳'},
              {value: 135, name: '四川'},
              {value: 1548, name: '北京'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      let that = this
      myChart.on('click', function (params) {
        if (params.value) {
          alert('单击了' + params.name + '柱状图' + '销量为' + params.value)
          that.$options.methods.a(that, params)
        } else {
          alert('单击了' + params.name + 'x轴标签')
        }
      })
    },
    topLefRight: function () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('topLefRight'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '终点站'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            center: ['40%', '60%'],
            data: [
              {value: 335, name: '郑州'},
              {value: 310, name: '上海'},
              {value: 234, name: '杭州'},
              {value: 135, name: '南阳'},
              {value: 1548, name: '苏州'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      let that = this
      myChart.on('click', function (params) {
        if (params.value) {
          alert('单击了' + params.name + '柱状图' + '销量为' + params.value)
          that.$options.methods.a(that, params)
        } else {
          alert('单击了' + params.name + 'x轴标签')
        }
      })
    }
  }
}
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
