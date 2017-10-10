<template>
  <div>
    <img v-if="displayLinks.length <= 0" class="loader" src="/img/loader.gif">
    <transition-group v-else name="list" tag="p">
      <div v-if="showLinks" class="row" v-for="(group,groupKey) in displayLinks" :key="groupKey">
        <goo-link :class="calcColumnClass(group)" v-for="(link,linkKey) in group" :key="linkKey" v-model="group[linkKey]"></goo-link>
      </div>
      <img v-else class="loader" src="/img/loader.gif">
    </transition-group>
  </div>
</template>

<script>
  import axios from 'axios'
  import GooLink from '@/components/GooLink/GooLink'

  export default {
    name: 'dashboard',
    components: {
      GooLink
    },
    data () {
      return {
        apiUrl: 'https://us-central1-goodash-8856b.cloudfunctions.net/api/links',
        colChunkSize: 4,
        displayLinks: [],
        showLinks: false,
        structuredData: {}
      }
    },
    methods: {
      calcColumnClass (linkGroup) {
        return [
          'col',
          's12',
          `m${12 / linkGroup.length}`
        ]
      },

      prepLinks () {
        axios.get(this.apiUrl).then((response) => {
          for (let i = 0; i < response.data.length; i += this.colChunkSize) {
            const tempItems = response.data.slice()
            this.displayLinks.push(tempItems.splice(i, (this.colChunkSize)))
          }
          this.showLinks = true
        }).catch((error) => {
          console.log(error)
          // eslint-disable-next-line
          Materialize.toast('Oops, links could not be loaded, please refresh your page or try again later.', 10000)
        })
      }
    },
    created () {
      this.prepLinks()
    }
  }
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
