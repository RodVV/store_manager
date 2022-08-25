const { expect } = require("chai");
const sinon = require("sinon");

const salesController = require("../../controllers/salesController");
const salesService = require("../../services/salesService");

describe("SalesController: Busca todos as sales no banco de dados", () => {
  describe("quando nao existe nenhuma sale", () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(salesService, "getAllSales").resolves([]);
    });
    after(() => {
      salesService.getAllSales.restore();
    });

    it("retorne um array", async () => {
      const result = await salesService.getAllSales();
      expect(result).to.be.an("array");
    });
    it("retorna status 200", async () => {
      await salesController.getAllSales(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it("array vazio", async () => {
      await salesController.getAllSales(request, response);
      expect(response.json.calledWith([])).to.be.equal(true);
    });
  });
  describe("quando existem sales", () => {
    const response = {};
    const request = {};
    const stubProduct = [{ 
    "productId": 3,
    "quantity": 15,
    "date": "2022-08-25T07:28:15.000Z"
   }];

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(salesService, "getAllSales").resolves(stubProduct);
    });
    after(() => {
      salesService.getAllSales.restore();
    });

    it("retorne um array", async () => {
      const result = await salesService.getAllSales();
      expect(result).to.be.an("array");
    });
    it("retorna status 200", async () => {
      await salesController.getAllSales(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it("retorna array com as sales", async () => {
      await salesController.getAllSales(request, response);
      expect(response.json.calledWith(stubProduct)).to.be.equal(true);
    });
  });
});
