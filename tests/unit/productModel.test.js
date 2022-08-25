const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");
const connection = require('../../models/connection');
const productModel = require("../../models/productModel");

describe("ProductModel: Busca todos os produtos no banco de dados", () => {
  describe("quando nao existe nenhum produto", () => {
    before(function () {
      const resultadoExecute = [[], []]; 
      sinon.stub(connection, "execute").resolves(resultadoExecute); 
    });
    after(() => {
      connection.execute.restore();
    });

    it("retorna um array", async () => {
      const result = await productModel.getAllProducts();
      expect(result).to.be.an("array");
    });
    it("array vazio", async () => {
      const result = await productModel.getAllProducts();
      expect(result).to.be.empty; 
    });
  });

  describe("quando existem produtos", () => {
    before(function () {
      const resultadoExecute = [[{ id: 1, name: "Teclado do Rodrigo" }], []];
      sinon.stub(connection, "execute").resolves(resultadoExecute);
    });
    it("retorne um array", async () => {
      const resultado = await productModel.getAllProducts();
      expect(resultado).to.be.an("array"); 
    });
    it("o array nao esteja vazio", async () => {
      const result = await productModel.getAllProducts();
      expect(result).to.be.not.empty; 
    });
    it("array possua itens do tipo objeto", async () => {
      const result = await productModel.getAllProducts();
      expect(result[0]).to.be.an("object"); 
    });
    it('que os objetos tenham as propriedades: "id", "name"', async () => {
      const result = await productModel.getAllProducts();
      const item = result[0];
      expect(item).to.includes.all.keys("id", "name");
    });
  });
});