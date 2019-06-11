<template>
  <layout>
    <router-view></router-view>
  </layout>
</template>

<script>
import Layout from './components/Layout'
export default {
  name: 'App',
  components: { Layout },
}
require('./styles/base.css')
</script>
