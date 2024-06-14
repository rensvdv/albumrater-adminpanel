<template>
  <div class="container mt-5">
    <h1 class="text-center">WebSocket</h1>
    <div class="card">
      <div class="card-body">
        <div v-for="(message, index) in messages" :key="index" class="alert alert-light">
          {{ message }}
        </div>
      </div>
      <div class="card-footer">
        <input v-model="input" @keyup.enter="sendMessage" class="form-control" placeholder="Plaats hier je bericht" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebsocketChat",
  data() {
    return {
      ws: null,
      messages: [],
      input: ''
    };
  },
  mounted() {
    this.ws = new WebSocket('ws://localhost:8080/ws');
    this.ws.onmessage = (event) => {
      this.messages.push(event.data);
      console.log("Websocket bericht binnen");
    };
    this.ws.onclose = () => {
      console.log('WebSocket connectie gesloten');
    };
    this.ws.onerror = (error) => {
      console.error('WebSocket error', error);
    };
  },
  methods: {
    sendMessage() {
      if (this.input) {
        this.ws.send(this.input);
        this.input = '';
      }
    }
  },
  beforeUnmount() {
    if (this.ws) {
      this.ws.close();
    }
  }
};
</script>

<style scoped>

</style>
