<template>
  <div class="aitectcare_welcome">
    <div id="double_container">
      <div class="move_container">
        <div class="school_icon"></div>
        <div class="ob_icon"></div>
        <div class="home_icon"></div>
        <div class="school_text">学校</div>
        <div class="ob_text">写字楼</div>
        <div class="home_text">家</div>
        <div class="yy_text">医院</div>
        <div class="yly_text">养老院</div>
        <div class="sc_text">商场</div>
        <div class="yzzx_text">月子中心</div>
        <div class="jd_text">酒店</div>
      </div>
    </div>
    <div class="xingxing_icon"></div>
    <div class="xingxing_icon xingxing_icon2"></div>
    <div class="xingxing_icon xingxing_icon3"></div>
    <div class="guangxiao"></div>
    <div class="bottom_cantainer">
      <div class="title">欢迎来到蛙鸣信息科技</div>
      <div class="sub_title"> 守护您的每一寸呼吸</div>
      <input type="button" value="进入" class="login_btn" @click="handlegoto" />
    </div>
  </div>
</template>
<script>
import "./index.scss";

export default {
  mounted() {
    this.playAnim();
  },
  methods: {
    handlegoto() {
      this.$router.push('home')
    },
    //播放动画
    playAnim() {
      let double_container = document.querySelector("#double_container");
      let move_container = document.querySelector(".move_container");
      let cloneElement = move_container.cloneNode(true);
      let x = 0;
      double_container.style.width = Math.ceil(move_container.clientWidth * 2) + 100 + 'px';
      double_container.appendChild(cloneElement);
      setTimeout(() => {
        move();
      }, 1000 * 3)

      function move() {
        double_container.style.left = x + 'px';
        x--;
        if (x == -move_container.clientWidth) {
          x = 0;
        }
        requestAnimationFrame(move);
      }
    }
  }
}
</script>