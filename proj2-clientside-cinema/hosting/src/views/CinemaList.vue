<template>
  <div class="Cinemas">
    <h1>Cinemas</h1>
    <li>
    <router-link
              :to="{
                name: 'BECinema @ Siam Paragon',
                params: { slug: 'bangkok-paragon' },
              }"
            >
              BECinema @ Siam Paragon
            </router-link><p>- BANGKOK</p>
     </li>
  </div>
</template>
