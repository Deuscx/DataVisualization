# 可视化





## 百度地图

[百度地图开放平台](http://lbsyun.baidu.com/)

- 百度地图 JavaScript [开发指南](http://lbsyun.baidu.com/index.php?title=jspopularGL)

-  [官方 DEMO](http://lbsyun.baidu.com/jsdemo.htm)
-  [API类参考](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html)





### 个性化地图

用户可以通过[个性化地图样式编辑器](http://lbsyun.baidu.com/customv2/index.html)，按需编辑地图的底图样式，再按相应应用端的功能要求，将样式应用在JavaScript API和地图SDK中。



### 绘制覆盖物

所有叠加或覆盖到地图的内容，我们统称为地图覆盖物。覆盖物拥有自己的地理坐标，当您拖动或缩放地图时，它们会相应的移动。

可以使用`map.addOverlay`方法向地图添加覆盖物，使用`map.removeOverlay`方法移除覆盖物。

- 绘制图标
- 绘制线段
- 绘制文本
- 绘制弹窗

### 动画

[自定义视角动画](http://lbsyun.baidu.com/index.php?title=jspopularGL/guide/viewAnimation)

ViewAnimation：一个用来展示地图3D动画的类，您可以自定义动画的关键帧实例，并自由设置动画延迟开始时间、持续时间以及迭代次数等属性。

[轨迹动画](http://lbsyun.baidu.com/index.php?title=jspopularGL/guide/trackAnimation)





### 可视化

> 百度地图可视化通过mapv 和 mapvgl解决

[MapVGL文档](http://lbsyun.baidu.com/solutions/mapvdata)

https://mapv.baidu.com/gl/examples/static/common.js  官方封装的工具方法

[mapVGL官方案例](https://mapv.baidu.com/gl/examples/)





mapv 常用方法

- `mapv.utilCityCenter.getCenterByCityName`
  - 根据城市名来获取经纬度



mapvgl中方法



工具方法

- `Intensity`值域组件
  - 可以按照权重值的强度获取对应渐变色中的**颜色**或**半径大小**的值。用于根据properties中的值生成不同的样式

- `BezierCurve`
  - 通过传入起点和终点，生成带高度的贝塞尔曲线坐标集，可以用来生成飞线数据



#### 散点图



#### 飞线动画



#### 3D建筑





### 案例

#### [降低图可视化视觉混乱——Edge Bundling（边绑定）](https://zhuanlan.zhihu.com/p/94155959)

dependecies:

- vue3
- echarts