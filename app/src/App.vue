<template>
<router-view></router-view>
</template>

<script>
import { getData } from './http/api';

export default {
  name: 'APP',
  setup() {
    getData.then(res=>{
      console.log(res)
    })
  }
}
</script>

<style>
#app{
  padding: 0px;
  margin: 0px;
}
</style>
