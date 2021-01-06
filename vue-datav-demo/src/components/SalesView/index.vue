<template>
  <a-card
    style="width:100%"
    :tab-list="tab.tabList"
    :active-tab-key="tab.activeTab"
    @tabChange="key => onTabChange(key, 'activeTab')"
    class="sales-view"
    hoverable
  >
    <div class="sale-view-wrapper">
      <d-echarts class="schart" :option="chartProps.option" />
      <div class="sales-view-list">
        <div class="list-item" v-for="item in rankData" :key="item.no">
          <div :class="['item-num', { top: item.no <= 3 }]">{{ item.no }}</div>
          <div class="item-name">{{ item.name }}</div>
          <div class="item-money">{{ item.money }}</div>
        </div>
      </div>
    </div>

    <template v-slot:tabBarExtraContent>
      <a-radio-group v-model:value="date" :change="handleDateChange">
        <a-radio-button value="d">
          今日
        </a-radio-button>
        <a-radio-button value="w">
          本周
        </a-radio-button>
        <a-radio-button value="m">
          本月
        </a-radio-button>
        <a-radio-button value="y">
          今年
        </a-radio-button>
      </a-radio-group>
      <a-range-picker
        v-model:value="datePicker.dateRange"
        format="YYYY/MM/DD"
        :ranges="{
          一周前: [dayjs().subtract(7, 'days'), dayjs()],
          一月前: [dayjs().subtract(1, 'month'), dayjs()]
        }"
        separator="至"
        :locale="datePicker.locale"
        @change="datePicker.onChange"
      >
        <template v-slot:dateRender="{ current }">
          <div class="ant-calendar-date" :style="getCurrentStyle(current)">
            {{ current.date() }}
          </div>
        </template>
      </a-range-picker>
    </template>
  </a-card>
</template>

<script>
import { reactive, ref, computed } from "vue";
import dayjs from "dayjs";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import DEcharts from "@components/DEcharts/index";
export default {
  components: {
    DEcharts
  },
  setup() {
    // date
    const date = ref("d");
    const datePicker = reactive({
      dateRange: [],
      locale,
      onChange(dates, dateStrings) {
        console.log("From: ", dates[0], ", to: ", dates[1]);
        console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
      }
    });
    const handleDateChange = function(e) {
      console.log(e);
    };

    //tab
    const tab = reactive({
      tabList: [
        {
          key: "sale",
          tab: "销售额"
        },
        {
          key: "visited",
          tab: "访问量"
        }
      ],
      activeTab: "sale"
    });

    const onTabChange = function(key, type) {
      console.log(key, type);
      tab[type] = key;
    };

    function getCurrentStyle(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = "1px solid #1890ff";
        style.borderRadius = "50%";
      }
      return style;
    }

    //charts
    const option = {
      color: ["#3398DB"],
      title: { text: " 年度销售额" },

      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisTick: {
            alignWithLabel: true
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: {
        type: "value",

        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: "销售额",
          type: "bar",
          barWidth: "35%",
          data: new Array(12)
            .fill(0)
            .map(() => Math.round(Math.random() * 200 + 100))
        }
      ]
    };

    const chartProps = reactive({ option });
    //rankList
    const rankData = ref([
      { no: 1, name: "麦当劳", money: "323,234" },
      { no: 2, name: "肯德基", money: "323,233" },
      { no: 3, name: "必胜客", money: "323,232" },
      { no: 4, name: "海底捞", money: "323,231" }
    ]);

    return {
      tab,
      onTabChange,
      date,
      handleDateChange,
      datePicker,
      getCurrentStyle,
      dayjs,
      rankData,
      chartProps
    };
  }
};
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 2rem;
}
.sale-view-wrapper {
  text-align: center;
  display: flex;
  .schart {
    flex: 5;
    height: 200px;
  }
  .sales-view-list {
    flex: 3;
    .list-item {
      display: flex;
      margin-bottom: 4px;
      .item-num {
        width: 1.5rem;
        height: 1.5rem;

        &.top {
          border-radius: 50%;
          border: 1px;
          background-color: black;
          color: white;
        }
      }

      .item-name {
        margin-left: 1rem;
      }
      .item-money {
        margin-left: auto;
      }
    }
  }
}
</style>
