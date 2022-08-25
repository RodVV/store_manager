const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");

const productService = require('../../services/productService');
const productModel = require('../../models/productModel');

describe("ProductService: Busca todos os produtos no banco de dados", () => {
  describe("quando nao existe nenhum produto", () => {
    before(() => {
      sinon.stub(productModel, "getAllProducts").resolves([]);
    });
    after(() => {
      productModel.getAllProducts.restore();
    });

    it("retorna um array", async function () {
      const result = await productService.getAllProducts();
      expect(result).to.be.an("array");
    });
    it("array vazio", async function () {
      const result = await productService.getAllProducts();
      expect(result).to.empty;
    });
  });

  describe("quando existem produtos", () => {
    before(() => {
      sinon
        .stub(productModel, "getAllProducts")
        .resolves([{ id: 1, name: "Teclado do Rodrigo" }]);
    });
    after(() => {
      productModel.getAllProducts.restore();
    });

    it("retorne um array", async function () {
      const result = await productService.getAllProducts();
      expect(result).to.be.an("array");
    });
    it("o array nao esteja vazio", async function () {
      const result = await productService.getAllProducts();
      expect(result).to.not.empty;
    });
    it("array possua itens do tipo objeto", async function () {
      const result = await productService.getAllProducts();
      expect(result[0]).to.be.an("object");
    });
    it('que os objetos tenham as propriedades: "id", "name"', async function () {
      const result = await productService.getAllProducts();
      expect(result[0]).to.all.keys("id", "name");
    });
  });
});