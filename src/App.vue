<template>
  <div id="app">
    <Todolist/>
    <font-awesome-icon icon="fa-solid fa-user-secret" />
  </div>
</template>

<script>
    import Todolist from './Todo-list.vue';

    export default {
        name: 'App',
        components: {
            Todolist,
        },
    };
</script>

<style>
@import url('./style/reset.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
