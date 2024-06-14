<template>
  <form @submit.prevent="createReview">
    <div>
      <label for="title" class="form-label">Review:</label>
      <textarea class="form-control" type="text" id="review" v-model="reviewData.review"></textarea>
    </div>
    <div>
      <label for="artist" class="form-label">Score (0-10): </label>
      <input class="form-control" type="number" id="score" v-model="reviewData.score" min="1" max="10">
    </div> <br />
    <button class="btn btn-primary">Aanmaken</button>
  </form> <br />
  <div v-if="postSuccess" class="alert alert-success" role="alert">
    Review Aangemaakt
  </div>
  <div v-if="postError" class="alert alert-danger" role="alert">
    Er is iets mis gegaan
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddReview",
  props: ['albumId'],
  data() {
    return {
      reviewData: {
        albumId: this.albumId,
        review: '',
        score: ''
      },
      postSuccess: false,
      postError: false
    };
  },
  methods: {
    createReview() {
      this.postSuccess = false;
      this.postError = false;

      if (this.reviewData.score > 10) {
        this.reviewData.score = 10
      }

      axios.post('http://localhost:8080/api/reviews', this.reviewData)
        .then(response => {
          console.log(response);
          this.postSuccess = true;
          this.$emit('review-added');
        })
        .catch(error => {
          console.error('Error: ', error)
          this.postError = true;
        })
    }
  }
}
</script>

<style scoped>

</style>
