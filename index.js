import express from "express";
const app = express();
//const times={ id: 1, nome: "Grêmio", estadio: "Arena", cidade: "Porto Alegre" };
const times = [
    { id: 1, nome: "Grêmio", estadio: "Arena", cidade: "Porto Alegre" }, 
    { id: 2, nome: "Interacional", estadio: "Beira-Rio", cidade: "Porto Alegre" }, 
    { id: 3, nome: "São josé", estadio: "Zequinha", cidade: "Porto Alegre" }];
const PORT=3000;

// Configura o EJS como motor de views
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views");
app.get("/exemplosimples", (req, res) => {
res.render("simples");
});

app.get("/", (req, res) => {
res.render("index", { nome: "Marcelo", idade: 2 });
});

app.get("/times", (req, res) => {
    res.render("times", { times });
});

app.get("/times/:id", (req, res) => {
    const timeId = req.params.id;
    const timeEncontrado = times.find(t => t.id == timeId);
    res.render("detalhe", { time: timeEncontrado });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));