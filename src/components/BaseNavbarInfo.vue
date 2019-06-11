<template>
  <li class="info" v-bind:id="info.name">
    <figure>
      <img :src="info.img" alt="">
      <span class="notifications" v-if="info.notifications">{{ info.notifications.length }}</span>
    </figure>
    <span class="info-text">{{ info.text }}</span>

  </li>
</template>


<script>
export default {
  props: ['info'],
  name: "navbar-info"
}
</script>

<style media="screen" lang="scss">
.navbar {
  .navbar-right {
    ul {
      display: flex;
      justify-content: space-around;
      li.info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 25px;

        &:not(:last-child) {
          border-right: 1px solid #4e4e4e54;
        }
        &:last-child {
          padding-right:0px;
        }
        figure {
          cursor: pointer;
          margin:auto;
          margin-bottom:5px;
          position:relative;
          .notifications {
            position: absolute;
            right: -10px;
            width: 20px;
            bottom: 20%;
            height: 20px;
            background-color: #FF5A4F;
            text-align: center;
            line-height: 20px;
            border-radius: 50%;
            color: white;
            font-size: 12px;
            font-weight: bold;

          }
          img {
            height:32px;
            width:auto;
          }
        }
        .info-text {
          font-size:10px;
        }

      }
    }

  }
}


</style>
