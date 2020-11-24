<template>
  <main>
    <px-header />
    <router-view class="container px-5 py-20 flex justify-center sm:px-20" />
  </main>
</template>

<script>
// Components
import PxHeader from '@/components/PxHeader'

export default {
  name: 'App',
  components: { PxHeader }
}
</script>
