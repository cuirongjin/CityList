<template>
  <ul class="list">
    <li 
      class="item"
       v-for="item  of letters" 
       :key="item"
       :ref="item"
       @click="handleClick"
       @touchstart="handleTocuchStart"
       @touchmove="handleTocuchMove"
       @touchend="handleTocuchEnd"
       >{{item}}
       </li>
    
  </ul>
</template>

<script>
export default {
  name: 'list',
  props:{
    cities:Object
  },
  data () {
    return {
      touchStatus:false,
      startY:0,
      tiemr:null
    }
  },
  computed:{
    letters () {
      const letters=[];
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    //获取A点距离最外层 (此时是#APP)的offsetTop值
    this.startY=this.$refs["A"][0].offsetTop +66
  },
  methods:{
    handleClick(e){
      this.$emit("change",e.target.innerText)
    },
    handleTocuchStart () {
      this.touchStatus=true; 
    },
    handleTocuchMove (e) {
      if(this.touchStatus) {
        if(this.tiemr) {
          clearTimeout(this.tiemr)
        }
        /**函数节流 */
        this.tiemr=setTimeout(() => {
          //此时是获取手指移动结束后,到达顶部的高度
          const touchY=e.touches[0].clientY;
          //向下取整,利用高度差除以每一个字母的高度来算出字母的下标
          const index=Math.floor((touchY-this.startY)/21);
         if(index>=0&&index<this.letters.length){
            this.$emit("change",this.letters[index])
          }
        }, 16);
      }
    },
    handleTocuchEnd () {
      this.touchStatus=false;  
    }
  }

}
</script>
<style scoped>
.list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top:50px;
  right: 0px;
  bottom: 0px;
  width: 30px;
  list-style: none;
  padding: 0px;
}
.item{
  text-align: center;
  color: brown;
}
</style>
