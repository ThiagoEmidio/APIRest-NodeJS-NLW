import express from "express";
//@types/express
const app = express();

/*
Get = buscar info
Post = inserir info
Put = modificar/alterar info
Delete = remover
Patch = Alterar informação específica
*/
app.get("/test",(request,response)=>{
    //request = tudo que está entrando
    // response = tudo que está saíndo
    return response.send("olá nlw get")
});

app.post("/test-post", (request,response)=>{
    return response.send("olá nlw post")
});
// localhost:3000
app.listen(3000, ()=> console.log("Server is now running NLW"));