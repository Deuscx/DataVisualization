<template>
  <a-row :gutter="8" class="bottom-container">
    <a-col :span="12">
      <a-card
        :bordered="false"
        hoverable
        title="关键词搜索"
        class="common-card"
      >
        <d-echarts
          :option="searchUserOption"
          class="chart-wrapper"
          ref="searchRef"
        />

        <div class="table-wrapper">
          <a-table :columns="columns" :data-source="data">
            <template #name="{text}">
              <a>{{ text }}</a>
            </template>
          </a-table>
        </div>
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-card
        :bordered="false"
        hoverable
        title="分类销售排行"
        class="common-card"
      >
        <d-echarts :option="typeOption" class="chart-wrapper2" />
        <template v-slot:extra>
          <a-radio-group
            v-model:value="type"
            button-style="solid"
            @change="handleTypeChange"
          >
            <a-radio-button value="type">
              品类
            </a-radio-button>
            <a-radio-button value="goods">
              商品
            </a-radio-button>
          </a-radio-group>
        </template>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import DEcharts from "@components/DEcharts/index";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    slots: { customRender: "name" }
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true
  },
  {
    title: "Long Column Long Column",
    dataIndex: "address",
    key: "address 3",
    ellipsis: true
  },
  {
    title: "Long Column",
    dataIndex: "address",
    key: "address 4",
    ellipsis: true
  }
];

const data = reactive([
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
]);

export default {
  components: {
    DEcharts
  },
  setup() {
    const searchRef = ref(null);
    const mokeData = [820, 932, 1320, 901, 934, 1290, 1330];
    onMounted(() => {
      console.log(searchRef.value.chart);
    });

    const searchUserOption = {
      title: {
        text: "搜索用户数"
      },
      xAxis: {
        type: "category",
        boundaryGap: false
      },
      yAxis: {
        show: false
      },
      series: [
        {
          data: mokeData,
          type: "line",
          areaStyle: {
            color: "rgba(95,187,255,.5)"
          },
          lineStyle: {
            color: "rgb(95,187,255)"
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }
      ],
      grid: {
        left: 10,
        bottom: 10
      }
    };

    const type = ref("type");
    function handleTypeChange(e) {
      console.log(e.target.value);
    }

    const typeOption = {
      baseOption: {
        title: {
          text: "品类分布"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["70%", "90%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderWidth: 8,
              borderColor: "#fff"
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      },

      media: [
        {
          query: {
            maxWidth: 600
          },
          option: {
            legend: {
              show: false
            }
          }
        },
        {
          option: {
            legend: {
              orient: "vertical",
              right: 10,
              show: true
            }
          }
        }
      ]
    };
    return {
      type,
      handleTypeChange,
      data,
      columns,
      searchUserOption,
      typeOption,
      searchRef
    };
  }
};
</script>

<style lang="scss" scoped>
.bottom-container {
  margin: 1rem 0;
  .common-card {
    height: 60vh;
  }
  .chart-wrapper {
    min-height: 20vh;
  }
  .chart-wrapper2 {
    min-height: 50vh;
  }
}
</style>
