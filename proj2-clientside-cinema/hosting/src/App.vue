<template>
  <div
    id="app"
    class="has-background-light"
  >
    <!-- ADD NAVBAR HERE -->
    <div id="app">
    <b-navbar type="is-dark " wrapper-class="container">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" class="is-5">
          <p class="is-size-3 has-text-weight-bold">BECinema</p>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/cinemas' }" class="is-size-8">
          <p>Cinemas</p>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/films' }" class="is-size-8">
          <p>Films</p>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-dropdown collapsible hoverable right>
          <template #label>
            <b-icon icon="map-marker-radius-outline mr-4 mdi-24px"></b-icon>
            <p>Phisanulok</p>
          </template>
          <b-navbar-item>
            <p>Bankok</p>
          </b-navbar-item>
          <b-navbar-item>
            <p>Chiang Mai</p>
          </b-navbar-item>
          <b-navbar-item>
            <p>Phisanulok</p>
          </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-dropdown>
          <template #label>
            <img src="/images/accounts/chaz.jpg" alt="Chaz" class="is rounded mr-4" />
          <span class="is-size-6">Chaz</span>
          </template>
          <b-navbar-item tag="router-link" :to="{ name: 'Tickets' }">My Tickets</b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
    <router-view />
  </div>

    <div class="layout-footer has-text-light has-background-dark py-5">
      <div class="container">
        <ol>
          <li>
            <router-link :to="{ name: 'CinemaList' }">
              Cinema List
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'CinemaDetails',
                params: { slug: 'phitsanulok-bec-auditorium' },
              }"
            >
              Cinema Details
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'FilmList' }">
              Film List
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'FilmDetails',
                params: { slug: 'black-pink-movie' },
              }"
            >
              Film Details
            </router-link>
          </li>
          <li>
            <router-link
              :to="{
                name: 'Book',
                params: {
                  slug: 'phitsanulok-bec-auditorium,1,1628863200',
                },
              }"
            >
              Booking Form
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Tickets' }">
              My Tickets
            </router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  min-height: 100%;
}
</style>

<style lang="scss" scoped>
@import './main.scss';

.image {
  display: inline-block;
  vertical-align: bottom;
}

.layout-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.layout-footer ol {
  margin: 0;
  padding: 0 0 0 1rem;
  column-count: 3;
  column-gap: 2rem;
}

.layout-footer li {
  padding-left: 0.5rem;
  padding-top: 0.25rem;
}

.layout-footer ol a,
.layout-footer ol a:hover {
  background: inherit;
  color: $light;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  margin: 0;
  padding: 0;
  border: 0;
}
img {
    border-radius: 50%;
}
</style>
