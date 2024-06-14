<template>
  <div>
    <div v-for="album in albums" :key="album.id" @click="viewAlbum(album)" class="album-container" data-cy="album-item">
      <div class="p-3 border border-black border-opacity-10 rounded">
        <h3>{{ album.title }}</h3>
        <p>{{ album.artist }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "AlbumList",
  data() {
    return {
      albums: []
    }
  },
  methods: {
    getAlbums() {
      axios.get('http://localhost:8080/api/albums')
        .then((response) => {
          this.albums = response.data;
        })
        .catch(error => {
          console.error('Error: ', error);
        })
    },
    viewAlbum(album) {
      router.push({ name: 'album', params: { id: album.id } });
    }
  },
  mounted() {
    this.getAlbums();
  }
}
</script>

<style scoped>
.album-container {
  cursor: pointer;
  transition: background-color 0.3s;
}

.album-container:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>