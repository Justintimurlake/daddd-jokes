class DadJokeGenerator {
  constructor(btnId, jokeId) {
    this.btnEl = document.getElementById(btnId);
    this.jokeEl = document.getElementById(jokeId);

    this.apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
    this.options = {
      method: "GET",
      headers: {
        "X-Api-Key": this.apiKey,
      },
    };

    this.apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

    this.btnEl.addEventListener("click", () => this.getJoke());
  }

  async getJoke() {
    try {
      this.jokeEl.innerText = "Updating...";
      this.btnEl.disabled = true;
      this.btnEl.innerText = "Loading...";
      const response = await fetch(this.apiURL, this.options);
      const data = await response.json();

      this.btnEl.disabled = false;
      this.btnEl.innerText = "Tell me a joke";

      this.jokeEl.innerText = data[0].joke;
    } catch (error) {
      this.jokeEl.innerText = "An error happened, try again later";
      this.btnEl.disabled = false;
      this.btnEl.innerText = "Tell me a joke";
      console.log(error);
    }
  }
}

// Instantiate the DadJokeGenerator class and pass the element IDs
const dadJokeGenerator = new DadJokeGenerator("btn", "joke");
