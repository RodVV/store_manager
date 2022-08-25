const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");

const salesService = require("../../services/salesService");
const salesModel = require("../../models/salesModel");

describe("SalesService: Busca todas as sales no banco de dados", () => {
  describe("quando nao existe nenhuma sale", () => {
    before(() => {
      sinon.stub(salesModel, "getAllSales").resolves([]);
    });
    after(() => {
      salesModel.getAllSales.restore();
    });

    it("retorna um array", async function () {
      const result = await salesService.getAllSales();
      expect(result).to.be.an("array");
    });
    it("array vazio", async function () {
      const result = await salesService.getAllSales();
      expect(result).to.empty;
    });
  });

  describe("quando existem sales", () => {
    before(() => {
      sinon
        .stub(salesModel, "getAllSales")
        .resolves([
          { productId: 3, quantity: 15, date: "2022-08-25T07:28:15.000Z" },
        ]);
    });
    after(() => {
      salesModel.getAllSales.restore();
    });

    it("retorne um array", async function () {
      const result = await salesService.getAllSales();
      expect(result).to.be.an("array");
    });
    it("o array nao esteja vazio", async function () {
      const result = await salesService.getAllSales();
      expect(result).to.not.empty;
    });
    it("array possua itens do tipo objeto", async function () {
      const result = await salesService.getAllSales();
      expect(result[0]).to.be.an("object");
    });
    it('que os objetos tenham as propriedades: "productId", "quantity","date"', async function () {
      const result = await salesService.getAllSales();
      expect(result[0]).to.all.keys("productId", "quantity", "date");
    });
  });
});
