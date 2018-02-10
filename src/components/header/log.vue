<template>
    <div class="logo">
        <span></span>
        <b>网易云音乐</b>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/variable"
 .logo
    padding-left:40%;
    background:#C20C0C
    line-height:65px
   // height:100px
   span
     display: inline-block
     position:relative
     width:50px
     height:50px
     top:13px
     background: url('../../assets/image/personal.svg')no-repeat;
     background-size:contain
   b
     display:inline-block
     font-size:$font-size-nav
     color:white
</style>