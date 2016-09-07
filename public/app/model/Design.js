define(["js/data/Model"], function (Model) {
 
    return Model.inherit("app.model.Design", {
        schema: {
            id: Number,
            name: String,
            href: String,
            resource: String,
        }
        //,
        // setCompleted: function (completed) {
        //     this.set("completed", completed);
        // },
        // isCompleted: function () {
        //     return this.$.completed;
        // },
        // status: function () {
        //     return this.$.completed ? "completed" : '';
        // }.onChange("completed"),
        // hasTitle: function () {
        //     return this.$.title.trim().length;
        // }.onChange("title")
    });
});