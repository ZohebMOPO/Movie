<template>
  <div>{{ (title, minutes, genre) }}</div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`
      query Movie($title: String!) {
        movies {
          id
          title: $title
          minutes
          genre
        }
      }
    `,
    variables: {
      title: "",
    },
  },
  data() {
    return {
      movies: "",
    };
  },
};
</script>
