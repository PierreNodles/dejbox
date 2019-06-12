<template>
  <div class="container menus-container">
    <div class="menus-title">
      <h2>{{ name }}</h2>
      <span class="title-background">{{ name }} </span>
    </div>

    <div class="columns menus">

      <div class="column" v-for="menu in menus" v-bind:key="menu.id">
        <div class="single-menu">
          <div class="menu-img">
            <figure class="main-img">
              <img :src="menu.img" alt=""><br>
            </figure>
            <figure class="heart">
              <img src="~@/assets/heart.png" alt=""><br>
            </figure>
          </div>
          <div class="single-menu-details">
            <div class="menu-name">
              <h3 v-html="menu.name"></h3>
            </div>
            <div class="single-menu-review">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="count-review">(20 avis)</span>
            </div>
            <div class="single-menu-footer">
              <span class="menu-price">{{menu.price}}</span>
              <div class="bubble" @click="menu.showModale = !menu.showModale">
                <p class="first fa fa-arrow-right"></p>
                <p class="second">Ajouter <span class="plus fa fa-arrow-right"></span></p>
              </div>
            </div>
          </div>

          <added-to-cart :menu="menu"></added-to-cart>
        </div>

      </div>
    </div>
  </div>



</template>

<script>
import AddedToCart from './BaseMenuModale.vue'

export default {
  name: "menus",
  props: ['menus', "name"],
  components: {
    'added-to-cart' : AddedToCart
  },
  data: function(){
    return {

    }
  }
}
</script>

<style lang="scss">
// Variables
$radius: 5px;
$red: #FF5A4F;

.menus-container {
  .menus-title {
    margin-bottom:35px;
    h2 {
      font-family: 'Galano Grotesque Bold';
      font-size:32px;
      color:#212121;
      opacity:0.84;
      padding-left:20px;
    }
    span.title-background {
      font-family: 'Galano Grotesque Bold';
      font-size: 125px;
      color: #727272;
      opacity: 0.04;

      position: absolute;
      top: -25px;
      z-index:-1;
      margin-left:-25px;
    }
  }
  .columns {
    margin:0 -33px;
    .column {
      margin: 0 20px;

      .single-menu {
        background-color:white;
        padding:25px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.08);
        border-radius: 10px;

        .menu-img {
          position:relative;
          .main-img {
            img {
              border-radius:14px;
            }
          }
          .heart {
            max-width:25px;
            width:25px;
            position:absolute;
            bottom:10%;
            right:5%;
          }
        }

        .single-menu-details {
          display:flex;
          flex-direction: column;
          justify-content: space-between;
          width:100%;

          min-height:150px;

          .menu-name {
            min-height:50px;
            h3 {
              color:#212121;
              font-size:19px;
              font-family: 'Galano Grotesque Bold';
            }
          }

          .single-menu-review {

            .fa {
              color:#D8D8D8;
              opacity:0.5;
              margin: 0 2px;
              &.checked {
                color:#FEB600;
                opacity:1;
              }

            }

            .count-review {
              font-size:12px;
              margin-left:5px;
              color:#707070;
            }

          }

          .single-menu-footer {
            display:flex;
            justify-content: space-between;
            align-items: center;

            .menu-price {
              font-family: "LibreBaskerville-Regular";
            }

            .bubble {
              font-family: 'Galano Grotesque Bold';
              width: 2em;
              height: 2em;
              background: $red;
              border-radius: 50%;
              color: #fff;

              text-align: center;
              cursor: pointer;
              transition: all .5s ease-in;
              .first {
                font-size: 100%;
                line-height: 2;
              }
              .second {
                display: none;
                transition: all .5s ease-in-out;
                font-family: 'Galano Grotesque Semi Bold';
              }
              &:focus, &:hover {
                width: 7em;
                height: 2em;
                border-radius: 60px;
                .first {
                  text-align: right;
                  font-family: 'Galano Grotesque Semi Bold';
                  display:none;
                  line-height:3;
                }
                .second {
                  font-family: 'Galano Grotesque Semi Bold';
                  display: inline-block;
                  transition: all .5s ease-in;
                  margin-top: 0.80px;
                  width: 100%;
                  text-align:left;
                  margin-left:15%;
                  display: flex;
                  justify-content: space-between;
                  align-items: baseline;
                  span.plus{
                    float:right;
                    margin-right:25%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .menus-container {
    .menus-title {
      h2 {
        font-size:24px;
        padding-left:0;
      }
    }
  }
}
</style>
