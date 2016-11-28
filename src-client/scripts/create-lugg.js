import Backbone from 'backbone'
import $ from 'jquery'
import ACTIONS from './ACTIONS.js'
import SimpleMapPage from './map-api.js'
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import STORE from './STORE.js'


const CreateLugg = React.createClass({

   componentWillMount: function(){
        ACTIONS.fetchLuggData()
        console.log('cr-lugg view', this.props);

     },

   _createLugg: function(){
      let createNewLugg = {
            pickup_address: this.refs.start_address.value,
            dropoff_address: this.refs.end_address.value,
            haul_description: this.refs.cargo_description.value,
            haul_img: this.refs.cargo_img.value,
         }

         ACTIONS.createLugg(createNewLugg)

      },

   render: function(){
    console.log('props', this.props);
    let outstandingPacks = this.props.newLuggData.map(function(model, i){


         return (

                     <div key={i}>
                        {model.get('user').useruser}<br/>
                        {typeof model === 'object' && model.get('haul_description')}
                     </div>
               )
         })

      let CharlestonMap = {
         center: {lat: 32.784618, lng: -79.940918},
         zoom: 13,
      }
      return(
         <div className = "lugg-container">
            <div className="container-fluid text-center packer-container ">
                  <div className="container ">
                     <h1>iLuggit</h1>
                     <h3 className="lead">Tell us what you need moved, we'll find a Lugger!</h3>
                  </div>
            </div>

            <div>
               <h3>Oustanding Packs </h3>
                  <ul>
                     { outstandingPacks }
                  </ul>
            </div>

            <div className ="form-container">
               <div className ="row ">
                  <form className = "col-xs-12 col-md-6 " id="create-lugg-form" onSubmit = {this._createLugg}>
                        <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
                       <h2 className = "">Welcome back  Create a New Lugg </h2>
                  <div className = "col-xs-12 form-group">
                       <label htmlFor = "startAddress"> </label>
                       <input type = "text" className="form-control" id = "s_address" ref = "start_address" placeholder = "Enter Starting Address" />
                  </div>
                    <div className = "col-xs-12 form-group">
                       <label htmlFor = "endAddress"> </label>
                       <input type = "text" className="form-control" id = "e_address" ref = "end_address" placeholder = "Enter End Address" />
                    </div>
                    <div className = "col-xs-12 form-group">
                       <label htmlFor = "cargoDescription"> </label>
                       <input type = "text" className="form-control" id = "cargo_description" ref = "cargo_description" placeholder = "Enter Description of Lugg" />
                    </div>
                    <div className="col-xs-12 form-group">
                       <label htmlFor = "cargoImg"></label>
                       <input type = "text" className="form-control" id = "cargo_img" ref = "cargo_img" placeholder="Image of Lugg (Optional)"/>
                    </div>
                    <input type = "submit" className="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-lg" />

                    <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                        <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <h3>Please enter a lugg</h3>
                             <a href="/#create-lugg"><button type="button"  className="btn btn-default">Return</button></a>
                          </div>
                        </div>
                    </div>



               </form>
               <div className="map-container2">
                  <div id= "map2">
                     <SimpleMapPage {...CharlestonMap}/>
                  </div>
               </div>
              </div>
            </div>
         </div>
    );
   }
})

module.exports = CreateLugg
