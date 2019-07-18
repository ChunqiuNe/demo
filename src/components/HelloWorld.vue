<template>
  <div class="hello">
    你好啊,Hello World
    <a href="Demo">{{msg}}</a>
    <p>{{adc}},数据为{{mvp}}</p>
  </div>

</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    debugger
    return {
      msg: 'aaa',
      adc: '我点击的列是' + this.$route.query.cq,
      mvp: '数据为' + this.$route.query.id
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
