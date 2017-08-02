

var EchartDom=this;

// 国内生产总值
EchartDom._gnsczz= function($echarts, Dom) {
  var echart= $echarts.init(document.getElementById(Dom));
  echart.setOption({
    color: ['#3398DB'],
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '5%',
      right: '10%',
      containLabel: false
    },
    xAxis : [
      {
        type : 'category',
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'直接访问',
        type:'bar',
        barWidth: '60%',
        data:[10, 52, 200, 334, 390, 330, 220]
      },
      {
        name:'访问',
        type:'line',
        barWidth: '60%',
        data:[10, 52, 200, 334, 390, 330, 220]
      }
    ]
  });
}

//生产贡献率
EchartDom._scgxl=function ($echarts, Dom) {
  var echart=$echarts.init(document.getElementById(Dom));
  echart.setOption({
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis:  {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series: [
      {
        name: '直接访问',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: '邮件营销',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: '搜索引擎',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
  })
}

//工业增长率
EchartDom._gyzzl=function ($echarts, Dom) {
  var echart=$echarts.init(document.getElementById(Dom));
  echart.setOption({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'邮件营销',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'联盟广告',
        type:'line',
        stack: '总量',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'视频广告',
        type:'line',
        stack: '总量',
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  })
}

//居民消费价格指数
EchartDom._jmxfjgzs=function ($echarts, Dom) {
  var echart=$echarts.init(document.getElementById(Dom));
  echart.setOption({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'邮件营销',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'联盟广告',
        type:'line',
        stack: '总量',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'视频广告',
        type:'line',
        stack: '总量',
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  })
}

//货币供应量
EchartDom._hbgyl=function ($echarts, Dom) {
  var echart=$echarts.init(document.getElementById(Dom));
  echart.setOption({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'邮件营销',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'联盟广告',
        type:'line',
        stack: '总量',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'视频广告',
        type:'line',
        stack: '总量',
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  })
}

// 地区生产总值
EchartDom._dqsczz= function($echarts, Dom) {
  var echart= $echarts.init(document.getElementById(Dom));
  echart.setOption({
    color: ['#3398DB'],
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '5%',
      right: '10%',
      containLabel: false
    },
    xAxis : [
      {
        type : 'category',
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'直接访问',
        type:'bar',
        barWidth: '60%',
        data:[10, 52, 200, 334, 390, 330, 220]
      },
      {
        name:'访问',
        type:'line',
        barWidth: '60%',
        data:[10, 52, 200, 334, 390, 330, 220]
      }
    ]
  });
}

//地方财政预算内收入
EchartDom._dfczysnsr=function ($echarts, Dom) {
  var echart=$echarts.init(document.getElementById(Dom));
  echart.setOption({
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis:  {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series: [
      {
        name: '直接访问',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: '邮件营销',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: '搜索引擎',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
  })
}

//进出口总值
EchartDom._jckzz=function ($echarts, Dom) {
  var echart=$echarts.init(document.getElementById(Dom));
  echart.setOption({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'邮件营销',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'联盟广告',
        type:'line',
        stack: '总量',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'视频广告',
        type:'line',
        stack: '总量',
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  })
}

//工业增加值
EchartDom._gyzzz=function ($echarts, Dom) {
  var echart=$echarts.init(document.getElementById(Dom));
  echart.setOption({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'邮件营销',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'联盟广告',
        type:'line',
        stack: '总量',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'视频广告',
        type:'line',
        stack: '总量',
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  })
}

//社会消费品零售总额
EchartDom._shxfplsze=function ($echarts, Dom) {
  var echart=$echarts.init(document.getElementById(Dom));
  echart.setOption({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'邮件营销',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'联盟广告',
        type:'line',
        stack: '总量',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'视频广告',
        type:'line',
        stack: '总量',
        data:[150, 232, 201, 154, 190, 330, 410]
      }
    ]
  })
}





