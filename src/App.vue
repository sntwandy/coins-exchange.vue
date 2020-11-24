<template>
  <main>
    <px-header />
    <px-assets-table />
  </main>
</template>

<script>
// Components
import PxHeader from '@/components/PxHeader'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'App',
  components: { PxHeader, PxAssetsTable }
}
</script>
