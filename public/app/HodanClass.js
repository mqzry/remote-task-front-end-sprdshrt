define(["js/core/Application", "js/data/DataSource", "app/data/XmlRestDataSource", "app/collection/Designs", "app/model/Design"], 
    function (Application, DataSource, RestDataSource, Designs, Design) {
        return Application.inherit({
            
            defaults: {
                appName: 'Hodan'
            },
            designs: null,
            
            initialize: function () {
                this.set('keyword', '');
                this.set('design', null);
                this.set('designs', null);
            },

            /***
             * Starts the application
             * @param parameter
             * @param callback
             */
            start: function (parameter, callback) {
                // false - disables autostart
                self = this;
                this.designs = this.$.api.createCollection(Designs);
                this.set('designs', this.designs);
                this.designs.fetch(function(err, designs){
                    if(!err){
                        // returns the fully fetched collection with user models
                    }
                });
                this.callBase(parameter, false);
                callback();
            },
            nextDesign: function (e) {
                this.set('design', this.designs.next());
            }
        });
    }
);