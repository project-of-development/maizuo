<template>
  <div id="app">
    <router-view></router-view>
    <Foot/>
  </div>
</template>
<script>
import Foot from "common/foot"
export default {
  name:'app',
  components:{
    Foot
  }
}
</script>

<style>

</style>
