/*
 * @Author: zhanghongqiao 
 * @Date: 2018-10-29 11:40:45 
 * @Email: 991034150@qq.com 
 * @Description: 头部 
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-11-05 10:31:01
 */

 <template>
   <div class="header-layout">
     <div class="left-logo" @click="handleLogo"></div>
     <div class="menus-icon" @click="handleOpen($event)" v-show="!isShow"></div>
     <transition name="fade">
      <ul class="menus-list" v-if="isShow">
        <i class="logo" @click="handleLogo"></i>
        <i class="close-btn" @click="handleClose"></i>
        <!-- 无二级菜单 -->
        <div v-for="(item, i) in menus" :key="i">
        <router-link 
          v-if="!item.children" 
          :to="`${routerPath}/${item.path}`">
          <li @click="isShow = false; isClickClose = false">{{item.name}}
            <ul v-if="item.children">
              <li v-for="(itemSub, j) in item.children" :key="j">{{itemSub.name}}</li>
            </ul>
          </li>
        </router-link>
        <!-- 有二级菜单 -->
        <li @click="isShowSub = !isShowSub" v-if="item.children">
            {{item.name}}
            <ul v-if="item.children" v-show="isShowSub">
              <li v-for="(itemSub, j) in item.children" @click="handleSubMenu(j)" 
                :key="j">{{itemSub.name}}</li>
            </ul>
          </li>
        </div>
      </ul>
     </transition>
   </div>
 </template>
 
<script>
import "./index.scss";
import config from "@/config/base.config";
export default {
  data() {
    return {
      isShow: false,
      isShowSub: false,
      routerPath: config.routerPath,
      body: document.querySelector('body'),
      isClickClose: true,
      menus: [
        {
          name: "关于我们",
          path: "aboutUs"
        },
        {
          name: "产品与服务",
          path: "productsServices"
        },
        {
          name: "经典案例",
          path: "classicCase",
          children: [
            {
              name: "企业案例",
              path: "enterprise"
            },
            {
              name: "装修案例",
              path: "enterprise"
            },
            {
              name: "家庭案例",
              path: "enterprise"
            }
          ]
        },
        {
          name: "加入我们",
          path: "joinUs"
        },
        {
          name: "联系我们",
          path: "contactUs"
        }
      ]
    };
  }, 
  methods: {
    // 点击哇鸣信息logo
    handleLogo() {
      this.isShow = false;
      this.isClickClose = false
      this.$router.push("home");
    },
    // 点击二级菜单
    handleSubMenu(index) {
      this.isShow = false;
      this.isClickClose = false
      this.$store.commit("setCaseType", index);
      this.$router.push("classicCase");
    },
    // 点击关闭
    handleClose() {
      this.isShow = false; 
      this.isShowSub = false
      this.isClickClose = true
    },
    // 点击展开按钮
    handleOpen(event) {
      this.isShow = !this.isShow
      event.preventDefault()
    }
  },
  watch: {
    isShow: function() {
      if(!this.isShow) {
        this.isShowSub = false
      }
    }
  }
};
</script>
