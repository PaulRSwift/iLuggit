import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import PackAuthView from './pack-auth-view.js'
import LuggAuthView from './lugg-auth-view.js'
import HomeView from './home-page.js'
import LuggerAccepted from './display-lugger-accepted.js'
import AppController from './lugg-view-controller.js'
import CargoDisplay from './display-cargo-details.js'
import CreateLugg from './create-lugg.js'
import {LuggProfile, LuggView} from './lugg-list.js'
import LuggCreated from './display-created-lugg.js'
import Sandbox from './sandbox.js'

const AppRouter = Backbone.Router.extend({
   routes: {
       "sandbox" : "showSandbox",
   "lugg-created": "showLuggCreated",
    "user-login" : "showPackAuthView",
   "truck-login" : "showLuggAuthView",
      "luggAcpt" : "showLuggAccept",
         "cargo" : "showDisplayCargo",
     "lugg-list" : "showLuggList",
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
      ReactDOM.render(<AppController routedFrom = "LuggProfile" />, document.querySelector('#app-container'))

   },
   showHomeView: function(){
      ReactDOM.render(<AppController routedFrom = "HomeView" />, document.querySelector('#app-container'))

   },
   showLuggCreated: function(){
      ReactDOM.render(<AppController routedFrom = "LuggCreated" />, document.querySelector('#app-container'))

   },
   showSandbox: function(){
      ReactDOM.render(<AppController routedFrom = "Sandbox" />, document.querySelector('#app-container'))

   },

   initialize: function(){
   Backbone.history.start();

   }
})

const app = new AppRouter()
