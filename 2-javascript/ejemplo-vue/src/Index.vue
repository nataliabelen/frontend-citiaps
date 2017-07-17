<template>
<div>
  <h2>{{title}}</h2>
  <ul>
    <li v-for="p in lista">
      {{p.first_name}} {{p.last_name}}
    </li>
  </ul>
</div>
</template>
<script>
export default{
  data(){
    return{
      title:'Index',
      lista:[]
    }
  },
  mounted:function(){
    console.log('Index.vue');
    // GET /someUrl
    this.$http.get('http://127.0.0.1:8090/data.json').then(response => {

      // get body data
      this.lista = response.body;
      console.log('lista',this.lista)

    }, response => {
      // error callback
      console.log('error cargando lista');
    });
  }
}
</script>
