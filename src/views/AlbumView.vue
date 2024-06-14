<template>
  <div v-if="album" class="container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-6 gy-2">
        <div class="p-3 border border-black border-opacity-10 rounded">
          <img :src="album.albumArt" alt="Album Art" class="border border-black border-opacity-25 rounded">
          <h3>{{ this.album.title }}</h3>
          <h5>{{ this.album.artist }}</h5>
          <p>Album ID: {{ this.album.id }} <br />
            Release Datum: {{ this.album.releaseDate }} <br />
            Aantal nummers: {{ this.album.totalTracks }}
          </p>
          <a :href="album.albumLink" class="btn btn-outline-secondary">Luister album</a>
        </div> <br />
        <h4>Reviews: </h4>
        <div class="p-3 border-top border-black border-opacity-10 rounded">
          <ReviewsOfAlbum :key="refreshKey" :albumId="album.id" />
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-4 gy-2">
        <div class="p-3 border border-black border-opacity-10 rounded">
          <h6>Schrijf een review:</h6>
          <AddReview :albumId="album.id" @review-added="refreshReviews" /> <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AddReview from "@/components/AddReview.vue";
import ReviewsOfAlbum from "@/components/ReviewsOfAlbum.vue";

export default {
  name: "AlbumView",
  components: { ReviewsOfAlbum, AddReview },
  props: ['id'],
  data() {
    return {
      album: null,
      refreshKey: 0,
    };
  },
  mounted() {
    this.getAlbum(this.id);
  },
  methods: {
    getAlbum(id) {
      axios.get(`http://localhost:8080/api/albums/${id}`)
        .then((response) => {
          this.album = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error: ', error);
        });
    },
    refreshReviews() {
      this.refreshKey += 1;
    }
  }
};
</script>

<style scoped>

</style>
