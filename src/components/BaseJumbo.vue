<template>
  <div class="header">
    <div class="jumbotron">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-6 feature">
            <div class="feature-title">
              <h3>Vous en avez <br>du bowl</h3>
            </div>
            <div class="feature-description">
              <p>Saumon, avocat ou alors poulet ?</p>
              <p>Découvrez nos Dejbowl tendance et ultra frais !</p>
            </div>
            <div class="feature-details">
              <div class="feature-price">
                <p>À partir de <span class="price">8€</span></p>
              </div>
              <div class="feature-cta">
                <button>découvrir</button>
              </div>

            </div>
          </div>
        </div>


      </div>
      <div class="heart">
        <figure>
          <img src="~@/assets/heart-red.png" alt="">
        </figure>

      </div>
    </div>
    <div class="categories">
      <div class="container">
        <ul>
          <li v-for="category in categories" v-bind:key="category.id" > {{ category.name }} <span class="new" v-if="category.new">New</span></li>
          <li><figure style="max-width:20px"> <img src="~@/assets/filter-results-button.png" alt=""></figure> </li>
        </ul>
      </div>


    </div>
  </div>




</template>

<script>
export default {
  name: 'jumbo',
  data: function() {
    return {
      categories: [
        {
          name: "Incontournables",
          new: false,
          id:1
        },
        {
          name: "Bar à salades",
          new:false,
          id:2
        },
        {
          name: "Envies d'ailleurs",
          new:false,
          id:3
        },
        {
          name: "Dolce vita",
          new:false,
          id:4
        },
        {
          name: "Bar à pâtes",
          new:false,
          id:5
        },
        {
          name: "Sur le pouce",
          new:false,
          id:6
        },
        {
          name: "Dejbowl",
          new:true,
          id:7
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.header {

  .jumbotron {
    position:relative;
    background-image: url('~@/assets/jumbo-background.jpg');
    background-size:cover;
    background-position:center;
    overflow: hidden;

    .feature {
      display:flex;
      flex-direction: column;
      justify-content: center;
      min-height:450px;
      margin-top:30px;
      margin-bottom:20px;

      .feature-title {
        transform: rotate(-1deg);
        margin-bottom:20px;

        h3 {
          font-family: "Cocogoose-Narrow";
          font-size:80px;
          line-height:75px;
          color:#151515;
          text-shadow: 0 3px 6px #0000002e;
        }

      }

      .feature-description {
        color:#6C6B6B;
        font-size:22px;
        font-family: 'Galano Grotesque Bold';
      }

      .feature-details {
        display:flex;
        justify-content: flex-start;
        align-items: flex-end;
        margin: 20px 0 0 20px;

        .feature-price {
          margin-right:70px;

          p {
            font-family: 'Galano Grotesque Bold';
            font-size: 22px;
            color: #2C2C2C;

            span.price {
              font-size:80px;
              line-height:80px;
            }

          }

        }

        .feature-cta {

          button {
            background-color:#FFB600;
            border-radius:12px;
            width:161px;
            height:47px;
            padding-bottom:5px;
            border-style:none;
            cursor:pointer;

            font-family: 'Galano Grotesque Bold';
            font-size: 22px;
            color:white;

            &:focus {
              outline: none;
            }

          }

        }

      }

    }
    .heart {
      figure {
        max-width:100px;
        width:100px;
        position:absolute;
        top:20%;
        left:39%;
      }
    }
  }

  .categories {
    box-shadow: 0 3px 6px rgba(0,0,0,0.08);
    ul {
      display:flex;
      justify-content: space-between;
      padding:20px;
      li{
        text-transform:uppercase;
        display:flex;
        align-items: center;
        cursor:pointer;
        span.new {
          font-family: "LibreBaskerville-Regular";

          padding: 5px 18px 3px 15px;
          margin-left: 10px;

          border-radius: 25px;
          background-color: #FF5A4F;

          font-size: 0.7em;

          color: white;
        }
        figure {
          opacity:0.5;
        }
      }

    }
  }
}

@media only screen and (max-width: 767px) {
.header {
  .jumbotron {
    z-index:-2;
        background-image: url('~@/assets/background-mobile.jpg');
    .feature {
      justify-content: space-evenly;
      padding-top:30%;
      .feature-title {
        h3 {
          text-align: center;
          font-size:40px !important;
          line-height:40px;
        }
      }
      .feature-description {
        p {
          text-align: center;
          font-size:16px;
        }
      }
      .feature-details {
        margin:0;
        align-items: flex-end;
        justify-content: space-between;
        .feature-price {
          margin-right:0;
          p {
            font-size:14px;
            span.price {
              font-size:40px;
              line-height:30px;
            }
          }
        }
        .feature-cta {
          button {
            width:120px;
            height:34px;
            font-size:16px;
          }

        }
      }
    }
    .heart {
      figure {
        z-index:-1;
        transform:rotate(90deg);
        top:45%;
        left:60%;
      }
    }
  }
  .categories {
    display:none;
  }
}

}
</style>
