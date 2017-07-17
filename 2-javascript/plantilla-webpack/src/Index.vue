<template>
<div>
  <h2>{{title}}</h2>
</div>
</template>
<script>
export default{
  data(){
    return{
      title:'Index'
    }
  },
  mounted:function(){
    console.log('Index.vue')
  }
}
</script>
