<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-left">
        <div class="logo">
          <figure>
            <img src="~@/assets/logo.png" alt="">
          </figure>
        </div>
        <div class="calendar">
          <div class="calendar-item unavailable" id="monday">
            <span class="date"><span class="date-text">15</span></span>
            <span class="day">Lundi</span>
          </div>
          <div class="calendar-item unavailable" id="tuesday">
            <span class="date"><span class="date-text">16</span></span>
            <span class="day">Mardi</span>
          </div>
          <div class="calendar-item unavailable" id="wednesday">
            <span class="date"><span class="date-text">17</span></span>
            <span class="day">Mercredi</span>
          </div>
          <div class="calendar-item current" id="thursday">
            <span class="date"><span class="date-text">18</span></span>
            <span class="day">Jeudi</span>
          </div>
          <div class="calendar-item" id="friday">
            <span class="date"><span class="date-text">19</span></span>
            <span class="day">Vendredi</span>
          </div>

          <div class="calendar-item" id="friday">
            <span class="date">
              <figure>
                <img src="~@/assets/icon_calendar.png" alt="">
              </figure>
            </span>
            <span class="day">Calendrier</span>
          </div>

        </div>

      </div>
      <div class="navbar-right">
        <ul>
          <nav-bar-info v-for="info in infos" v-bind:info="info" v-bind:key="info.id"></nav-bar-info>
        </ul>

      </div>
    </div>

  </nav>
</template>


<script>
import NavBarInfo from './BaseNavbarInfo.vue'

export default {
  name: "navbar",
  props: ['infos'],
  methods: {

  },
  components: {
    'nav-bar-info': NavBarInfo

  }
}
</script>

<style media="screen" lang="scss">
.navbar {
  padding:10px 0px 5px;
  .container {
    display:flex;
    justify-content: space-between;
    align-items: center;

    .navbar-left {
      display:flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        max-width:37px;
      }
      .calendar {
        display:flex;
        justify-content: space-around;
        margin:0 20px;
        .calendar-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin:0 15px;
          span {
            display:flex;
            justify-content: center;
            &.date {
              align-items:center;
              width:32px;
              height:32px;
              margin:auto;
              border-radius:50%;
              color:#4E4E4E;
              border:1px solid #4E4E4E;
              font-size:13px;
              cursor:pointer;
              figure {
                max-width:50%;
                img {
                  vertical-align: sub;
                }
              }
            }
            &.day {
              font-size:11px;
            }
          }
          &.unavailable {
            opacity:0.6;
            span {
              &.date {
                background-color:#5C5C5C;
                border-color: #5C5C5C;
                color:#FFFFFF;
                opacity:0.7;
                cursor: not-allowed;
                span {
                  opacity:0.7;
                }
              }
              &.day {
                opacity:0.8;
              }
            }
          }
          &.current {
            span.date {
              background-color: #0083AD;
              border-color:#0083AD;
              color:white;
            }
            span.day {
              color: #0083AD;
            }
          }
        }
      }
    }


  }

}
</style>
