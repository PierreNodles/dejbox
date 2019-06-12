<template>

  <div class="tabs-wrapper">

    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" v-bind:class="{'is-active': tab.isActive}">
          <a @click="selectTab(tab)">
            <span class="tab-title">{{ tab.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="tab-details" v-for="tab in tabs" v-show="tab.isActive">
        <p>{{ tab.content }}</p>
    </div>
  </div>

</template>


<script>

export default {
  props: ['tabs'],
  name: "menu-tab",
  methods: {
    selectTab(selectedTab) {
      var tabs = Object.values(this.tabs)
      tabs.forEach(
        function(tab) {
        tab.isActive = (selectedTab.title == tab.title)
      }
     )

    }
  }
}

</script>

<style media="screen" lang="scss">
.tabs-wrapper {
  min-height:120px;
  margin-top:30px;
  margin-bottom:30px;
  .tabs {
    margin-bottom:0px;
    ul {
      border:none;
      li {
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        a {
          color:black;
          opacity:0.44;
          border:none;
        }
        &.is-active {
          background-color:white;
          a {
            opacity:1;
          }
        }

      }
    }
  }
  .tab-details {
    width:100%;
    padding:40px 25% 40px 40px;
    background-color:white;
    min-height:128px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius:5px;
    p {
      font-size:18px;
    }

  }
}

</style>
