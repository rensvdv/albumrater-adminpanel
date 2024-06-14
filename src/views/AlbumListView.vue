<template>
  <div class="container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10 gy-2">
        <AlbumList />
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import AlbumList from "@/components/AlbumList.vue";

export default {
  name: "AlbumListView",
  components: {AlbumList}
}
</script>

<style scoped>

</style>