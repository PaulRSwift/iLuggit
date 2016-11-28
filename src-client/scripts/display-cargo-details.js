import Backbone from 'backbone'
import React from 'react'
import ACTIONS from './ACTIONS.js'
import LuggAuthView from './lugg-auth-view.js'

const CargoDisplay = React.createClass({
   // componentWillMount: function(){
   //
   //      console.log('props', this.props);
   //   },

     _acceptLugg: function(){

      let userid = this.refs.id.dataset.id
      // console.log('id', userid);

         ACTIONS._acceptLugg(userid)
     },

   render: function (){
      // console.log('username', existingUserData);
      let id = this.props.id
      // console.log('id', id);
      let model = this.props.newLuggData.find(function(model){
         // console.log('model', model)
         return Number(model.get('id')) === Number(id)
      })

      return(
         <div>
            <div className="container-fluid text-center lugger-container">
               <div className="container">
                  <a href = "#"><i className="fa fa-home fa-2x " aria-hidden="true"></i></a>
                  <h1 className="display-3">One Lugg</h1>
                  <h3 className="lead">Bridges the gap between someone with a truck and someone who needs a truck!</h3>
               </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-offset-3 col-sm-6 text-center pack-description ">
                  <div>
                     <p>Details Of Pack</p>
                     <p>Cargo Img: {typeof model === 'object'  &&  model.get('haul_img')}</p>
                     <p>Haul Description: {typeof model === 'object' && model.get('haul_description')}</p>
                     <p>Pickup address: {typeof model === 'object' && model.get('pickup_address')}</p>
                     <p>Drop off address: {typeof model === 'object' && model.get('dropoff_address')}</p>
                     <p>Job Price: ${typeof model === 'object' && model.get('job_price')}</p>

                  <div className="btn-group">
                     <button type="button" onClick = {this._acceptLugg}  ref={'id'} data-id = {typeof model === 'object' && model.get('id')} className="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">Accept Lugg</button>
                     <a href="/#lugg-list"><button type="button"  className="btn btn-default">Return</button></a>

                     <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                         <div className="modal-dialog modal-lg" role="document">
                         <div className="modal-content">
                           <h3>Thanks you for accepting this job</h3>
                           <p>Please be in contact with packer</p>
                              <a href="/#lugg-list"><button type="button"  className="btn btn-default">Return</button></a>
                           </div>
                         </div>
                     </div>
                  </div>
               </div>
             </div>
             </div>
          </div>
      </div>
    );
    }
});



module.exports = CargoDisplay
