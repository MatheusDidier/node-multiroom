module.exports.iniciaChat = function (application, req, res) {
    var dadosForm = req.body;

    req.assert("apelido", "Escreva o apelido!").notEmpty();
    req.assert("apelido", "O apelido precisa ter entre 3 a 15 caracteres").len(3, 15);

    var erros = req.validationErrors();
    if(erros){
        res.render("home/index", {validacao: erros});
        return;
    }
    console.log(dadosForm);
    res.render("chat/chat");
}