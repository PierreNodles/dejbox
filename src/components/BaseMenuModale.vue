<template>
  <div class="modale-wrapper" v-if="menu.showModale" v-on:click.self="menu.showModale = !menu.showModale">
    <div class='addToCart'>
      <span class="mobileOnly trigger fa fa-chevron-left" v-on:click.self="menu.showModale = !menu.showModale"></span>

      <div class="columns">

        <div class="column menu-img">
          <figure>
            <img v-bind:src="menu.img" alt="">
          </figure>
        </div>
        <div class="column details">
          <div class="single-menu-details">
            <div class="menu-name">
              <h3 v-html="menu.name"></h3>
            </div>
            <div class="menu-infos">
              <div class="single-menu-review">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="count-review">(20 avis)</span>
              </div>
              <div class="menu-weight">
                <p>+/- {{menu.weight}} g</p>
              </div>
            </div>
            <div class="mobileOnly">
              {{ menu.tabs.description.content}}
            </div>
            <div class="menu-cooking-notice">
              <p>{{menu.cookingNotice}}</p>
            </div>

            <div class="single-menu-footer">
              <span class="menu-price">{{menu.price}}</span>
              <div class="bubble">
                <p class="first fa fa-arrow-right"></p>
                <p class="second">Ajouter <span class="plus fa fa-arrow-right"></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns tab-column">
        <tab :tabs="menu.tabs"></tab>
      </div>



      <div class="upsales">
        <div class="columns">
          <div class="upsales-title column">
            <h4>Vous aimerez aussi !</h4>
          </div>
        </div>


        <div class="columns">


          <div class="column">
            <div class="single-menu">
              <div class="menu-img">
                <figure class="main-img">
                  <img :src="menu.img" alt=""><br>
                </figure>
              </div>
              <div class="single-menu-details">
                <div class="menu-name">
                  <h3>Chips</h3>
                </div>
                <div class="single-menu-footer">
                  <span class="menu-price">1,00€</span>
                  <div class="bubble">
                    <p class="first fa fa-arrow-right"></p>
                    <p class="second">Ajouter <span class="plus fa fa-arrow-right"></span></p>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div class="column">
            <div class="single-menu">
              <div class="menu-img">
                <figure class="main-img">
                  <img :src="menu.img" alt=""><br>
                </figure>
              </div>
              <div class="single-menu-details">
                <div class="menu-name">
                  <h3>Chips</h3>
                </div>
                <div class="single-menu-footer">
                  <span class="menu-price">1,00€</span>
                  <div class="bubble">
                    <p class="first fa fa-arrow-right"></p>
                    <p class="second">Ajouter <span class="plus fa fa-arrow-right"></span></p>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div class="column">
            <div class="single-menu">
              <div class="menu-img">
                <figure class="main-img">
                  <img :src="menu.img" alt=""><br>
                </figure>
              </div>
              <div class="single-menu-details">
                <div class="menu-name">
                  <h3>Chips</h3>
                </div>
                <div class="single-menu-footer">
                  <span class="menu-price">1,00€</span>
                  <div class="bubble">
                    <p class="first fa fa-arrow-right"></p>
                    <p class="second">Ajouter <span class="plus fa fa-arrow-right"></span></p>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div class="column">
            <div class="single-menu">
              <div class="menu-img">
                <figure class="main-img">
                  <img :src="menu.img" alt=""><br>
                </figure>
              </div>
              <div class="single-menu-details">
                <div class="menu-name">
                  <h3>Chips</h3>
                </div>
                <div class="single-menu-footer">
                  <span class="menu-price">1,00€</span>
                  <div class="bubble">
                    <p class="first fa fa-arrow-right"></p>
                    <p class="second">Ajouter <span class="plus fa fa-arrow-right"></span></p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


    </div>
  </div>


</template>

<script>
import Tab from './BaseMenuModaleTab.vue'

export default {
  props: ['menu'],
  name: "modale",
  components: {
    'tab' : Tab
  },
}

</script>

<style media="screen" lang="scss">
.modale-wrapper {
  position:fixed;
  overflow-y: scroll;
  background-color:rgba(0,0,0,0.21);
  width:100%;
  height:100%;
  top:0;
  left:0;
  z-index:98;



  .addToCart {
    position:absolute;
    top:10%;
    left:10%;
    width:80%;
    min-height:80vh;
    margin-bottom:80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color:#FAFAFA;
    border-radius:6px;

    padding: 40px;

    .columns {
      margin:0;
      .column {
        margin:0;
      }
    }

    .menu-img {
      figure {
        border-radius:14px;
        overflow:hidden;
      }
    }
    .details {
      display:flex;
      padding-left:40px;
      .single-menu-details {
        .menu-name {
          flex-grow: 1;
          h3 {
            font-size:32px !important;
          }
        }
        .menu-infos {
          flex-grow: 1;
          display:flex;
          justify-content: space-between;
        }
        .menu-cooking-notice {
          flex-grow: 1;
          p {
            color : #0083AD;
            font-size:16px;
            font-family: 'Galano Grotesque Bold';
          }
        }
        .single-menu-footer {
          flex-grow:2;
          span.menu-price {
            font-size:30px;
          }
          .bubble {
            width:3em;
            height:3em;
            .first {
              line-height:3;
            }
            &:hover, &:focus {
              height:3em;
              .second {

              }
            }
          }
        }

      }
    }
  }
  .upsales {
    h4 {
      font-size:20px;
      font-family: 'Galano Grotesque Bold';
    }
    .single-menu-details {
      min-height:70px !important;
    }
  }
}

@media only screen and (max-width: 767px) {
  .modale-wrapper {
    .addToCart {
      top:0;
      left:0;
      width:100%;
      padding:20px 10px 10px 10px;
      .trigger {
        color:#616161;
        padding : 0 0 10px 5px;
        font-size:20px;

      }
      .details {
        padding: 10px;
        .single-menu-details {
          >* {
            margin-top:10px;
            margin-bottom:10px;
          }
          .menu-name {
            h3 {
              font-size:20px !important;
            }
          }
          .menu-infos {
            .menu-weight {
              display:none;
            }
          }
          .menu-cooking-notice {
            display:none;
          }
          
        }
      }
      .tab-column {
        display:none;
      }
      .upsales {
        display:none;
      }
    }
  }
}


</style>
