import Vue from 'vue'
import Navbar from './components/BaseNavbar.vue'
import Jumbo from './components/BaseJumbo'
import Menus from './components/BaseMenu'

Vue.config.productionTip = false


new Vue({
  el:'#navbar',
  template: '<navbar v-bind:infos="infos"></navbar>',
  components: { Navbar },
  data: function() {
    return {
      infos: [
        {
          name: "location",
          text: "Nocibé, Lille",
          notifications: false,
          img: "./assets/location.png"
        },
        {
          name: "notifications",
          text: "Notifications",
          notifications: ["Vous avez une modification"],
          img: './assets//notification.png'
        },
        {
          name:"user",
          text:"Ellen Degeneres",
          notifications: false,
          img: "./assets/user.png"
        },
        {
          name:"cart",
          text:"Mon panier",
          notifications: ["Une notification", "Deux notifications"],
          img: "./assets/cart.png"
        }
      ]
    }
  },
})
new Vue({
  el:"#incontournables",
  components: { Menus },
  template:'<menus v-bind:menus="menus" v-bind:name="name"></menus>',
  data: {
    name: "Les incontournables",
    menus: [
      {
        name:"Le boeuf fondant, sauce au vin & écrasé de pommes de terre",
        price:"7,50€",
        img: "./assets/boeuf-fondant.jpg",
        cookingNotice: "À réchauffer au micro-onde pendant environ 2 mins",
        weight:"420",
        showModale:false,
        tabs: {
          description: {
            title:"Description",
            content:"Le plat indien par excellence : goûtez à notre incroyable poulet tikka massala ! Cette sauce au yaourt et aux épices est littéralement à tomber ! On ne voudrait pas vous gâcher la surprise mais : vous allez adorer !",
            selected:true,
            isActive:true,
          },
          ingredient: {
            title:"Ingrédients",
            content:"Tomate",
            selected:false,
            isActive:false
          },
          nutrition: {
            title:"Valeurs nutrionnelles",
            content:"C'est bon pour vous",
            selected:false,
            isActive:false
          }
        }
      },
      {
        name:"Le bon parmentier de boeuf",
        price:"7,50€",
        img: "./assets/parmentier.jpg",
        cookingNotice: "À réchauffer au micro-onde pendant environ 2 mins",
        weight:"420",
        id:2,
        showModale:false,
        tabs: {
          description: {
            title:"Description",
            content:"Le plat indien par excellence : goûtez à notre incroyable poulet tikka massala ! Cette sauce au yaourt et aux épices est littéralement à tomber ! On ne voudrait pas vous gâcher la surprise mais : vous allez adorer !",
            selected:true,
            isActive:true
          },
          ingredient: {
            title:"Ingrédients",
            content:"Tomate 2",
            selected:false,
            isActive:false
          },
          nutrition: {
            title:"Valeurs nutrionnelles",
            content:"C'est bon pour vous",
            selected:false,
            isActive:false
          }
        }
      },
      {
        name:"Le poulet & pommes de terre rôties",
        price:"7,50€",
        img: "./assets/poulet.jpg",
        cookingNotice: "À réchauffer au micro-onde pendant environ 2 mins",
        weight:"420",
        id:3,
        showModale:false,
        tabs: {
          description: {
            title:"Description",
            content:"Le plat indien par excellence : goûtez à notre incroyable poulet tikka massala ! Cette sauce au yaourt et aux épices est littéralement à tomber ! On ne voudrait pas vous gâcher la surprise mais : vous allez adorer !",
            selected:true,
            isActive:true
          },
          ingredient: {
            title:"Ingrédients",
            content:"Tomate 3",
            selected:false,
            isActive:false
          },
          nutrition: {
            title:"Valeurs nutrionnelles",
            content:"C'est bon pour vous",
            selected:false,
            isActive:false
          }
        }
      }
    ]
  }
})

new Vue({
  el:"#jumbo",
  template: '<jumbo></jumbo>',
  components: { Jumbo },
  data:{}

});
