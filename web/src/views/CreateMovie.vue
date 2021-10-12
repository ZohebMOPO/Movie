<ApolloMutation
  :mutation="
    (gql) => gql`
      mutation createMovie($title: String!, $minutes: Int!, $genre: String!) {
        createMovie(
          options: { title: $title, minutes: $minutes, genre: $genre }
        ) {
          id
          title
          minutes
          genre
        }
      }
    `
  "
  :variables="{
    title,
    minutes,
    genre,
  }"
  @done="onDone"
>
  <template v-slot="{ mutate, loading, error }">
    <button :disabled="loading" @click="mutate()">Click me</button>
    <p v-if="error">An error occurred: {{ error }}</p>
  </template>
</ApolloMutation>

<script>
export default {
  layout: "create",
  apollo: {
    variables() {
      return {
        title: this.title,
        minutes: this.minutes,
        genre: this.genre,
      };
    },
  },
};
</script>
