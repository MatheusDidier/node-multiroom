module.exports = function(application, req, res){

    application.get("/", (req, res) => {
        console.log("INDO PARA A INDEX");
        application.app.controllers.index.index(application, req, res);
    })

}