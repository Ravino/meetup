const Vue = require ("vue");
const Vuex = require ("vuex");
const VueRouter = require ("vue-router");
const axios = require ("axios");


const index = require ("./index.vue"). default;
const configRouter = require ("./configRouter.js");


Vue. config. debug = true;
Vue. config. devtools = true;

Vue. prototype. $http = axios;


Vue. use (VueRouter);
Vue. use (Vuex);


const router = new VueRouter (configRouter ());

let countPath = 1;


(new Vue ({
  "el": ".page",
  "router": router,
  "render": h => h (index),

  "created": function () {

    //    alert ("1");

    const poll = () => {

      this. $http. get ("http://localhost:3000/poll"). then ((res) => {

        //        alert (JSON. stringify (res));
        if (res. data === "fist") {

          if (countPath === configRouter (). routes. length - 1) countPath = 0;
          countPath += 1;
          this. $router. push (configRouter (). routes [countPath]. path);

        }


        if (res. data === "waveout") {

          if (countPath === 1) countPath = configRouter (). routes. length;
          countPath -= 1;
          this. $router. push (configRouter (). routes [countPath]. path);

        }


        poll ();

      },

      () => {

        //        alert (JSON. stringify (err));
        poll ();

      });

    };

    poll ();

  },
}));
