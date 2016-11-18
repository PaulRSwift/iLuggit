import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import LuggAuthView from './lugg-auth-view.js'
import HomeView from './home-page.js'
import LuggerAccepted from './display-lugger-accepted.js'
import AppController from './lugg-view-controller.js'
import CargoDisplay from './display-cargo-details.js'
import CreateLugg from './create-lugg.js'
const AppRouter = Backbone.Router.extend({
   routes: {
    "user-login" : "showPackAuthView",
   "truck-login" : "showLuggAuthView",
      "luggAcpt" : "showLuggAccept",
         "cargo" : "showDisplayCargo",
      "luggList" : "showLuggList",
   "create-lugg" : "showCreateLugg",
       "packPro" : "showPackProfile",
       "luggPro" : "showLuggProfile",
              "" : "showHomeView"
   },
   showCreateLugg: function(){
      ReactDOM.render(<AppController routedFrom = "CreateLugg" />, document.querySelector('#app-container'))
   },
   showPackAuthView: function(){
      ReactDOM.render(<AppController routedFrom = "PackAuthView" />, document.querySelector('#app-container'))
   },
   showLuggAuthView: function(){
      ReactDOM.render(<AppController routedFrom = "LuggAuthView" />, document.querySelector('#app-container'))

   },
   showLuggAccept: function(){
      ReactDOM.render(<AppController routedFrom = "LuggAccept" />, document.querySelector('#app-container'))

   },
   showDisplayCargo: function(){
      ReactDOM.render(<AppController routedFrom = "CargoDisplay" />, document.querySelector('#app-container'))

   },

   showLuggList: function(){
      ReactDOM.render(<AppController routedFrom = "LuggList" />, document.querySelector('#app-container'))

   },
   showHomeView: function(){
      ReactDOM.render(<AppController routedFrom = "HomeView" />, document.querySelector('#app-container'))

   },

   initialize: function(){
   Backbone.history.start();

   }
})

const app = new AppRouter()
