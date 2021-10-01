<template >
    <div id="light-elem">
        <div class="elem" :style='{"background-color":colorP}' :class="{active:isActive,noActive:isNoActive}" >
         
        </div>
    </div>
</template>
<script>


export default {
    name:'light-elem',
    props:{
        time:0,
        path:"",
        colorP:""
    },
    data(){
        return{
            isNoActive:false
        }
    },
  computed: {
    isActive: function () {
      return this.$route.path === this.path
    }
  },
  mounted() {
      this.isNoActive===false
  setInterval(()=>{
      if(this.$route.path === this.path){
       if(this.time<4){
           this.isNoActive =!this.isNoActive
       }
   }
  },1000) 
  },
}
</script>
<style lang="scss" src="./light-elem.scss"></style>