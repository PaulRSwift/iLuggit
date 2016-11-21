import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'

const CreateLugg = React.createClass({
   _createLugg: function(){

      let createNewLugg = {
            pickup_address: this.ref.start_address.value,
            dropoff_address: this.ref.end_address.value,
            haul_description: this.ref.cargo_Description.value,
            haul_img: this.ref.cargo_img.value,
         }
         ACTIONS.createLugg(createnewLugg)

      },

   render: function(){
      return(
            <div className = "row text-center">
               <form className = "col-sm-offset-3 col-sm-6 " id="createLugg-form" onSubmit = {this._createLugg}>
                       <h2 className = "">Create a New Lugg </h2>
                  <div className = "form-group">
                       <label htmlFor = "startAddress"> </label>
                       <input type = "text" className="form-control" name = "s_address" ref="start_address" placeholder = "Enter Starting Address" />
                  </div>
                    <div className = "form-group">
                       <label htmlFor = "endAddress"> </label>
                       <input type = "text" className="form-control" name = "e_address" ref="end_address" placeholder = "Enter Destination" />
                    </div>
                    <div className = "form-group">
                       <label htmlFor = "cargoDescription"> </label>
                       <input type = "text" className="form-control" name = "cargo_description" ref="cargo_description" placeholder = "Enter Description of Lugg" />
                    </div>
                    <div className="form-group">
                       <label htmlFor = "cargoImg"></label>
                       <input type = "text" className="form-control" name = "cargo_img" ref="cargo_img" placeholder="Image of Lugg (Optional)"/>
                    </div>
                    <input type = "submit" className="btn btn-default" />

               </form>
            </div>

      )
   }
})
module.exports = CreateLugg
