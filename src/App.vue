<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>
<style lang="scss">
    @import "assets/styles/reset";
    @import "assets/styles/helper";
    body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: $font-hei;
        line-height: 1.5;
        color: #333;
        font-size: 16px;
        background:#f5f5f5;
    }
</style>
