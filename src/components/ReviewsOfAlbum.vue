<template>
  <div v-for="review in reviews" :key="review.id">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Score: {{review.score}}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Review id: {{ review.id }}</h6>
        <p class="card-text">{{ review.review }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ReviewsOfAlbum',
  props: ['albumId'],
  data() {
    return {
      reviews: [],
    };
  },
  async mounted() {
    await this.fetchReviews();
  },
  methods: {
    async fetchReviews() {
      try {
        const response = await axios.get(`http://localhost:8080/api/reviews/${this.albumId}`);
        this.reviews = response.data;
      } catch (error) {
        console.error('Error: ', error);
      }
    },
  },
};
</script>

<style scoped>

</style>