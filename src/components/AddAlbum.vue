<template>
  <div>
    <section>
      <form @submit.prevent="createPost" data-cy="add-album-form">
        <div>
          <label for="title" class="form-label">Titel:</label>
          <input class="form-control" type="text" id="title" v-model="albumData.title" data-cy="album-title">
        </div>
        <div>
          <label for="artist" class="form-label">Artiest: </label>
          <input class="form-control" type="text" id="artist" v-model="albumData.artist" data-cy="album-artist">
        </div> <br />
        <button class="btn btn-primary" data-cy="add-album-btn">Aanmaken</button>
      </form>
      <br />
      <h5>Album maken met spotify api:</h5>
      <form @submit.prevent="createPostWithSpotifyAPI" data-cy="add-spotify-album-form">
        <div>
          <label for="title" class="form-label">Access token:</label>
          <input class="form-control" type="text" id="title" v-model="albumDataSpotifyAPI.accessToken" data-cy="spotify-access-token">
        </div>
        <div>
          <label for="artist" class="form-label">Artiest: </label>
          <input class="form-control" type="text" id="artist" v-model="albumDataSpotifyAPI.artist" data-cy="spotify-artist">
        </div> <br />
        <button class="btn btn-secondary" data-cy="add-spotify-album-btn">Aanmaken</button>
      </form>
    </section>
    <br />
    <div v-if="postSuccess" class="alert alert-success" role="alert">
      Album Aangemaakt
    </div>
    <div v-if="postError" class="alert alert-danger" role="alert">
      Er is iets mis gegaan
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "AddAlbum",
  data() {
    return {
      albumData: {
        title:  '',
        artist:   ''
      },
      albumDataSpotifyAPI: {
        accessToken:  '',
        artist:   ''
      },
      postSuccess: false,
      postError: false
    }
  },
  methods: {
    createPost() {
      this.postSuccess = false;
      this.postError = false;

      axios.post('http://localhost:8080/api/albums', this.albumData)
          .then(response => {
            console.log(response);
            this.clearForm();
            this.postSuccess = true;
          })
          .catch(error => {
            console.error('Error: ', error)
            this.postError = true;
          })
    },
    createPostWithSpotifyAPI() {
      this.postSuccess = false;
      this.postError = false;

      axios.post('http://localhost:8080/api/albums/save', this.albumDataSpotifyAPI)
          .then(response => {
            console.log(response);
            this.clearForm();
            this.postSuccess = true;
          })
          .catch(error => {
            console.error('Error: ', error)
            this.postError = true;
          })
    },
    clearForm() {
      this.albumData.title = "";
      this.albumData.artist = "";
    }
  }
}
</script>

<style scoped>

</style>