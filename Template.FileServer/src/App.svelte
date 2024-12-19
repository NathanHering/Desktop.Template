<script>
  let message = "";
  async function fetchMessage() {
    const response = await fetch("http://localhost:5000/api/main");
    const data = await response.json();
    message = data.message;
  }
  fetchMessage();
</script>

<main class="text-center p-4">
  <h1 class="text-4xl font-bold">{message}!</h1>
</main>

<style>
  main {
    padding: 1rem;
    text-align: center;
  }
</style>
