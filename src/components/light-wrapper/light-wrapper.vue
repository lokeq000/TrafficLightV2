<template >
  <div id="light-wrapper">
    <div class="light">
      <light-elem :colorP='"red"' :path="'/red'" :time='timeChange'  />
      <light-elem :colorP='"yellow"' :path="'/yellow'" :time='timeChange' />
      <light-elem :colorP='"green"' :path="'/green'" :time='timeChange' />
    </div>
    timer: {{timeChange}}
  </div>
</template>
<script>
import lightElem from "../light-elem/light-elem.vue";
class LightElem{
  constructor(path,time,nextLight){
    this.path = path;
    this.time = time;
    this.nextLight = nextLight
  }
}
export default {
  components: { lightElem },
  name: "light-wrapper",
  data(){
    return{
      timeChange:0,
      noActive:false
    }
  },
  methods:{
    begin(lightElem,callback){
     
      callback(lightElem)
      this.timeChange=lightElem.time
      setTimeout(()=>{
        this.begin(lightElem.nextLight,callback)
      },lightElem.time*1000)
      
    }
  },
  created(){
    let red = new LightElem ("/red",10)
   let yellow1 = new LightElem('/yellow', 3)
    let yellow2 = new LightElem('/yellow', 3)
    let green = new LightElem('/green',15)
    red.nextLight = yellow1
    yellow1.nextLight = green
    green.nextLight = yellow2
    yellow2.nextLight = red
    let firstLite = red
    if (this.$route.path === '/yellow') firstLite = yellow1
     if (this.$route.path === '/green') firstLite = green
     this.begin(firstLite,(light)=>{
       this.$router.push({ path: light.path, component: lightElem })
     })
  },
  mounted() {
    setInterval(()=>{
      this.timeChange--
    },1000)
  },
}
</script>
<style lang="scss" src="./light-wrapper.scss">
</style>