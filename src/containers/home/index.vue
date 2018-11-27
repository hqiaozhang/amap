/*
* @Author: zhanghongqia
* @email: 991034150@qq.com
* @Date: 2018-06-08 21:31:55
* @Description: 首页入口组件
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-11-27 17:12:11
*/

 <template>
  <div class="aitectcare_home">
    
     <div id="map" class="map"></div> 
  </div>
</template>
 
 <script>
 import './index.scss'
 export default {
   mounted() {
      var map = new AMap.Map('map', {
          pitch: 70,  // 地图俯仰角度，有效范围 0 度- 83 度 75
          zoom: 17,//级别
          // center: [116.397428, 39.90923],//中心点坐标
          viewMode:'3D', //使用3D视图
          // zooms: [4,18],//设置地图级别范围 3 - 20
          mapStyle: 'amap://styles/5549f146ba1a4e23d4ce43b97e9af901'
      });
      var marker = new AMap.Marker({
        icon: "/static/images/marker.png",
        position: [106.510179,29.537731]
      });
      map.add(marker)
   }
 }
 </script>
 