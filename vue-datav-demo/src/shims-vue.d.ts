import echarts from '@types/echarts'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module 'echarts' {
  import type echarts from 'echarts'
  
}