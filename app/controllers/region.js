    import Ember from 'ember';

    const {
        Controller,
        inject: {service},
    } = Ember;


export default Ember.Controller.extend({
  regioninfos: service(),
  storage: service(),
  sessionStorage: service(),

  hostInfos:   [ Ember.Object.create({
    regionName: '',
    compute: '',
    storage: '',
    }) ],

  storeData(data, storage) {
    return storage.setItem('megdc.hostinfos', JSON.stringify(data));
  },
 actions: {
      stepThree() {
          alert('Thanks');
          this.transitionToRoute('step3');
              },

      popup() {
          this.toggleProperty('enabled');
              },
      print() {
          this.set('name', this.get('print'));
          this.toggleProperty('enabled');
              },
      close() {
        //  this.toggleProperty('enabled');
        alert(this.get('print'));
             },

             addhost() {
              // alert("1");
                 this.get('hostInfos').pushObject(Ember.Object.create({
                       regionName: '',
                       compute: '',
                       storage: '',
                 }));
            },


            regionData() {

              return this.get('ajax').request('/region/content', {
                method: 'POST',
                param:{
                        regionName:this.get('print'),
                        cost:
                           {
                             compute: this.get('compute'),
                             storage: this.get('storage'),
                           }

                     }
              });
            },

            }
});
