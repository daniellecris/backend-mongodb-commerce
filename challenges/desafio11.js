db.produtos.find(
  { nome: { $nin: ["McChicken", "Big Mac"] } },
  { nome: true, curtidas: true, vendidos: true, _id: false },
);