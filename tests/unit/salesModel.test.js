const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");
const connection = require("../../models/connection");
const salesModel = require("../../models/salesModel");

describe("SalesModel: Busca todos as sales no banco de dados", () => {
  describe("quando nao existe nenhuma sale", () => {
    before(function () {
      const resultadoExecute = [[], []];
      sinon.stub(connection, "execute").resolves(resultadoExecute);
    });
    after(() => {
      connection.execute.restore();
    });

    it("retorna um array", async () => {
      const result = await salesModel.getAllSales();
      expect(result).to.be.an("array");
    });
    it("array vazio", async () => {
      const result = await salesModel.getAllSales();
      expect(result).to.be.empty;
    });
  });

  describe("quando existem sales", () => {
    before(function () {
      const resultadoExecute = [
        [{ productId: 3, quantity: 15, date: "2022-08-25T07:28:15.000Z" }], [],
      ];
      sinon.stub(connection, "execute").resolves(resultadoExecute);
    });
    after(() => {
      connection.execute.restore();
    });
    it("retorne um array", async () => {
      const resultado = await salesModel.getAllSales();
      expect(resultado).to.be.an("array");
    });
    it("o array nao esteja vazio", async () => {
      const result = await salesModel.getAllSales();
      expect(result).to.be.not.empty;
    });
    it("array possua itens do tipo objeto", async () => {
      const result = await salesModel.getAllSales();
      expect(result[0]).to.be.an("object");
    });
    it('que os objetos tenham as propriedades: "productId", "quantity","date"', async () => {
      const result = await salesModel.getAllSales();
      const item = result[0];
      expect(item).to.includes.all.keys("productId", "quantity", "date");
    });
  });
});
