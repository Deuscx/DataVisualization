<template>
  <div>
    <d-echarts :option="option" class="bmap"></d-echarts>
  </div>
</template>

<script>
import DEcharts from "@components/DEcharts/index";
import { convertData, data } from "./mock/bmapData.js";
const option = {
  title: {
    text: "全国主要城市空气质量 - 百度地图",
    subtext: "data from PM25.in",
    sublink: "http://www.pm25.in",
    left: "center"
  },
  tooltip: {
    trigger: "item"
  },
  bmap: {
    key: "leeRDmlFem0RjdPLQvGV0VWjkSrgkdpM",
    center: [104.114129, 37.550339],
    roam: true,
    zoom: 5,
    mapStyle: {
      styleJson: [
        {
          featureType: "water",
          elementType: "all",
          stylers: {
            color: "#d1d1d1"
          }
        },
        {
          featureType: "land",
          elementType: "all",
          stylers: {
            color: "#f3f3f3"
          }
        },
        {
          featureType: "railway",
          elementType: "all",
          stylers: {
            visibility: "off"
          }
        },
        {
          featureType: "highway",
          elementType: "all",
          stylers: {
            color: "#fdfdfd"
          }
        },
        {
          featureType: "highway",
          elementType: "labels",
          stylers: {
            visibility: "off"
          }
        },
        {
          featureType: "arterial",
          elementType: "geometry",
          stylers: {
            color: "#fefefe"
          }
        },
        {
          featureType: "arterial",
          elementType: "geometry.fill",
          stylers: {
            color: "#fefefe"
          }
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: {
            visibility: "off"
          }
        },
        {
          featureType: "green",
          elementType: "all",
          stylers: {
            visibility: "off"
          }
        },
        {
          featureType: "subway",
          elementType: "all",
          stylers: {
            visibility: "off"
          }
        },
        {
          featureType: "manmade",
          elementType: "all",
          stylers: {
            color: "#d1d1d1"
          }
        },
        {
          featureType: "local",
          elementType: "all",
          stylers: {
            color: "#d1d1d1"
          }
        },
        {
          featureType: "arterial",
          elementType: "labels",
          stylers: {
            visibility: "off"
          }
        },
        {
          featureType: "boundary",
          elementType: "all",
          stylers: {
            color: "#fefefe"
          }
        },
        {
          featureType: "building",
          elementType: "all",
          stylers: {
            color: "#d1d1d1"
          }
        },
        {
          featureType: "label",
          elementType: "labels.text.fill",
          stylers: {
            color: "#999999"
          }
        }
      ]
    }
  },
  series: [
    {
      name: "pm2.5",
      type: "scatter",
      coordinateSystem: "bmap",
      data: convertData(data),
      symbolSize: function(val) {
        return val[2] / 10;
      },
      encode: {
        value: 2
      },
      label: {
        formatter: "{b}",
        position: "right",
        show: false
      },
      itemStyle: {
        color: "purple"
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
    {
      name: "Top 5",
      type: "effectScatter",
      coordinateSystem: "bmap",
      data: convertData(
        data
          .sort(function(a, b) {
            return b.value - a.value;
          })
          .slice(0, 6)
      ),
      symbolSize: function(val) {
        return val[2] / 10;
      },
      encode: {
        value: 2
      },
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke"
      },
      hoverAnimation: true,
      label: {
        formatter: function(v) {
          console.log(v);
          return `${v.data.value[2]}`;
        },
        position: "right",
        show: true
      },
      itemStyle: {
        color: "purple",
        shadowBlur: 10,
        shadowColor: "#333"
      },
      zlevel: 1
    }
  ]
};
export default {
  components: { DEcharts },
  setup() {
    return { option };
  }
};
</script>

<style lang="scss" scoped>
.bmap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
