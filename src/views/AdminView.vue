<template>
  <div class="container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-4 gy-2">
        <AddAlbum />
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import AddAlbum from "@/components/AddAlbum.vue";

export default {
  name: "AdminView",
  components: {AddAlbum}
}
</script>

<style scoped>

</style>