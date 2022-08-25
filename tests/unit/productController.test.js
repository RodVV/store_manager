const { expect } = require('chai');
const sinon = require('sinon');

const productController = require('../../controllers/productController');
const productService = require('../../services/productService');

describe("Busca todos os produtos no banco de dados", () => {
  describe("quando nao existe nenhum produto", () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, 'getAllProducts').resolves([]);
    });
    after(() => {
      productService.getAllProducts.restore();
    });

    it("retorne um array", async () => {
      const result = await productService.getAllProducts();
      expect(result).to.be.an("array");
    });
    it("retorna status 200", async () => {
      await productController.getAllProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it("array vazio", async () => {
      await productController.getAllProducts(request, response);
      expect(response.json.calledWith([])).to.be.equal(true);
    });
  });
  describe("quando existem produtos", () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, "getAllProducts").resolves([{ id: 1, name: "Teclado do Rodrigo" }]);
    });
    after(() => {
      productService.getAllProducts.restore();
    });

    it("retorne um array", async () => {
      const result = await productService.getAllProducts();
      expect(result).to.be.an('array');
    });
    it("retorna status 200", async () => {
      await productController.getAllProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it("o array nao esteja vazio", async () => {
      const result = await productController.getAllProducts(request, response);
      expect(result).to.not.empty;
    });
    it("array possua itens do tipo objeto", async () => {
      const result = await productController.getAllProducts(request, response);
      expect(result[0]).to.be.an('object');
    });
    it('que os objetos tenham as propriedades: "id", "name"', async () => {
      const result = await productController.getAllProducts(request, response);
      expect(result[0]).to.includes.all.keys('id', 'name');
    });
  });
});
