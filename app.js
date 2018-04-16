var app = require("./config/server");

var server = app.listen(80, () => {
    console.log("Servidor ON");
})


var io = require("socket.io").listen(server);

app.set("io", io);

io.on("connection", (socket) => {
    console.log("Usuario conectou");

    socket.on("msgParaServidor", (dados) => {
        socket.emit("msgParaCliente", dados);
        socket.broadcast.emit("msgParaCliente", dados);

        //participantes
        if (dados.apelido_atualizado_nos_clientes == 0) {
            socket.emit("participantesParaCliente", { apelido: dados.apelido });

            socket.broadcast.emit("participantesParaCliente", { apelido: dados.apelido });
        }
    })


});






