<template>
  <div id="app">
    <b-navbar class="is-primary">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" class="is-size-10">
          <b-icon icon="book-open-page-variant mr-0 mb-0"></b-icon>
          &nbsp; BEC Books
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="router-link" :to="{ path: '/...' }">
          Search
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/...' }">
          Promo
        </b-navbar-item>

        <b-navbar-dropdown collapsible hoverable right>
          <template #label>
            <b-icon icon="cart"></b-icon>
            <p>5</p>
          </template>
          <b-navbar-item>
            <table>
              <tr v-for="book in cart" :key="book.isbn13">
                <img
                  :src="`/images/books/${book.isbn13}.jpg`"
                  :alt="book.title"
                />

                <p>
                  {{ book.title }}
                  <br />

                  {{ book.price.toLocaleString() }} THB
                </p>
              </tr>
            </table>
          </b-navbar-item>
          <b-button class="is-primary mr-3 mb-3" size="is-4" expanded>
            Checkout
          </b-button>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapGetters } from 'vuex'
@Component({
  computed: {
    ...mapGetters(['cart', 'cartTotal'])
  }
})
export default class BookCart extends Vue { }
</script>

<style scoped>
.navbar-item img {
  max-height: 3rem;
  vertical-align: top;
}

.navbar-item p {
  display: inline-block;
}
</style>
