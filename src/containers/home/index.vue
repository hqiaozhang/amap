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
   data() {
     return {
       map: null,
       posis: [
        [106.510179,29.537731],
        [106.410179,28.537731],
        [106.513101,29.547567],
        [106.507119,29.542603],
        [106.514575,29.544975],
        [106.511188,29.544409],
      ],
      markers: []
     }
   },
    mounted() {
      this.map = new AMap.Map('map', {
          pitch: 70,  // 地图俯仰角度，有效范围 0 度- 83 度 75
          zoom: 17,//级别
          // center: [116.397428, 39.90923],//中心点坐标
          viewMode:'3D', //使用3D视图
          // zooms: [4,18],//设置地图级别范围 3 - 20
          mapStyle: 'amap://styles/5549f146ba1a4e23d4ce43b97e9af901'
      });
       this.posis.map(item => {
          AMap.convertFrom(item, 'baidu',  (status, result) => {
              if (result.info === 'ok') {
                var resLnglat = result.locations[0];
                this.addMarkers(resLnglat)
              }
          })
       })
     console.log(this.markers)
       // 创建覆盖物群组，并将 marker 传给 OverlayGroup
    // var overlayGroups = new AMap.OverlayGroup(this.markers);
    //  this.map.add(overlayGroups);
    //  map.remove(overlayGroups);
   },
   addCircleMarker() {
      var circleMarker = new AMap.CircleMarker({
          center: [106.511134,29.537779],
          radius: 30,//3D视图下，CircleMarker半径不要超过64px
          strokeColor:'white',
          strokeWeight:2,
          strokeOpacity:0.5,
          fillColor:'rgba(0,0,255,1)',
          fillOpacity:0.5,
          zIndex:10,
          bubble:true,
          cursor:'pointer',
          clickable: true
        })
         circleMarker.setMap(this.map)
   },
   methods: {
     addMarkers(resLnglat) {
       console.log( [resLnglat.lng, resLnglat.lat])
      var Icon = new AMap.Icon({
        size: [28, 40],
        imageSize: [28, 40],
        image: "/static/images/marker.png",
      })
 
        var marker = new AMap.Marker({
          icon: Icon,
          position: [resLnglat.lng, resLnglat.lat],
        });
        
        marker.on('click', function(event) {
          console.log(event)
        })
        this.markers.push(marker)
        this.map.add(marker)
     },
     addElasticMarker() {
        // var zoomStyleMapping1 = {
        //           14:0,
        //           15:0,
        //           16:0,
        //           17:0,
        //           18:0,
        //           19:0,
        //           20:0    
        //   }
        //    var marker = new AMap.ElasticMarker({
        //       position: [106.510179,29.537731],
        //       zooms:[14,20],
        //       styles:[{
        //           icon:{
        //               img: "/static/images/marker.png",
        //               size: [28, 40],//可见区域的大小
        //               ancher:[8,16],//锚点
        //               fitZoom:14,//最合适的级别
        //               scaleFactor:2,//地图放大一级的缩放比例系数
        //               maxScale:1.4,//最大放大比例
        //               minScale:0.8//最小放大比例
        //           }
        //       }],
        //       zoomStyleMapping:zoomStyleMapping1
        //   })

     }
   },
  
 }
 </script>
 