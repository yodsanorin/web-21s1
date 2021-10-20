<template>
  <div class="BookDetails">
    <div class="hero-body has-text-centered-mobile">
      <div class="container.is-widescreen">
        <div class="columns">
          <div class="column is-one-quarter">
            <img :alt="book.title" :src="`/images/books/${book.isbn13}.jpg`" />
          </div>
          <div class="column">
            <p class="is-size-3 mb-3">{{ book.title }}</p>
            <p class="is-size-5 is-size-5-mobile mb-4 has-text-weight-light">
              {{ book.authors.toLocaleString() }}
            </p>
            <p class="subtitle">
              <b-button
                class="mr-3 mb-3 is-primary"
                size="is-medium"
                is-narrow
                outlined
              >
                Add to Cart
              </b-button>
              <b-button class="mr-3 mb-3 is-primary" size="is-medium" is-narrow>
                Buy Now
              </b-button>
              <br />
            </p>
            <p class="has-text-left-mobile">
              {{ book.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Book } from '@/store'
import Vue from 'vue'
export default class BookDetails extends Vue {
  get book (): Book {
    return this.$store.getters.bookByIsbn13(this.$route.params.isbn13)
  }
}
</script>
