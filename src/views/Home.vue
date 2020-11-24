<template>
  <div>
    <px-assets-table :assets="assets" />
  </div>
</template>

<script>
// Views
import PxAssetsTable from '@/components/PxAssetsTable'

// API
import { getAssets } from '@/api'

export default {
  name: 'Home',
  components: { PxAssetsTable },
  data() {
    return {
      assets: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      this.assets = await getAssets()
    }
  }
}
</script>
