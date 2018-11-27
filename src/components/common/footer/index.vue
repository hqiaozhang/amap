/*
 * @Author: zhanghongqiao 
 * @Date: 2018-10-29 11:21:22 
 * @Email: 991034150@qq.com 
 * @Description: 底部
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-10-30 15:19:09
 */

 <template>
   <div class="footer-layout">
     地址：北京市朝阳区东三环北路甲2号京信大厦2421 <br/>
    电话：010-80699913 <br/>
    邮编：100027<br/>
    邮箱：{{mail ? mail : 'service@wamingtech.com‬'}} <br/>
   </div>
 </template>
 
<script>
import './index.scss'
export default {
  props: {
    mail: String,
  }
}
</script>
