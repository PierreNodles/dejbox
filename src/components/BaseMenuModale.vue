<template>
  <div class="modale-wrapper" v-if="menu.showModale" v-on:click.self="menu.showModale = !menu.showModale">
    <div class='addToCart'>
      <div class="addedToCart" >

        <div class="columns">

          <div class="column menu-img">
            <figure>
              <img v-bind:src="menu.img" alt="">
            </figure>
          </div>
          <div class="column modale">
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
        <div class="columns">
          <div class="tabs">
            <ul>
              <li class="is-active"><a>Description</a></li>
              <li><a>Music</a></li>
              <li><a>Videos</a></li>
              <li><a>Documents</a></li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  </div>


</template>

<script>
export default {
  props: ['menu'],
  name: "modale",
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

    background-color:white;
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
    .modale {
      display:flex;
      .single-menu-details {
        .menu-name {
          flex-grow: 1;
          h2 {
            font-size:36px;
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
}


</style>
