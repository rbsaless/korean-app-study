// import express from 'express' traz a biblioteca instalada para dentro do arquivo.
import express from 'express';
// const app = express() cria a aplicação. const declara uma variável que não será reatribuída. app é onde você vai registrar as rotas.
const app = express();
// app.get('/health', ...) registra uma rota: “quando chegar um pedido do tipo GET para o caminho /health, execute esta função”. GET é o tipo de pedido que o navegador faz ao abrir um endereço.
// (req, res) => { ... } é a função executada a cada pedido. req é o pedido que chegou e res é a resposta que você devolve.
app.get('/health', (req, res) => { // /health é um nome convencional: rota para checar se o servidor está vivo. Servidores de produção usam isso o tempo todo.
  // res.json({ ok: true }) responde em formato JSON, o formato padrão de troca de dados entre front e back.
  res.json({ ok: true });
});
// app.listen(3000, ...) liga o servidor na porta 3000. A porta é a “porta de entrada” do seu computador para esse programa. A função de dentro roda quando o servidor termina de ligar.
app.listen(3000, () => {
  // console.log escreve a mensagem no terminal, para você saber que subiu.
  console.log('Servidor rodando em http://localhost:3000');
});