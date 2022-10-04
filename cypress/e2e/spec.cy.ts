import { Singleton } from "../classes/singleton";
import { ExoStatic } from "../classes/static";

describe("check singleton", () => {
  it("singleton - local - pass", () => {
    const local = Singleton.getInstance();
    const local2 = Singleton.getInstance();
    cy.visit("https://example.cypress.io").then(() => {
      expect(local).to.eq(local2);
    });
  });
  
  it("singleton - command - fail", () => {
    cy.visit("https://example.cypress.io");
    const local = Singleton.getInstance();
    cy.getSingleton().then((command) => {
      expect(local).to.eq(command);
    });
  });

  it("singleton - task - fail", () => {
    cy.visit("https://example.cypress.io");
    const local = Singleton.getInstance();
    const task = cy.task("getSingleton").then((task) => {
      expect(local).to.eq(task);
    });
  });
  it("static - local - pass", () => {
    const local = ExoStatic.First;
    const local2 = ExoStatic.First;
    cy.visit("https://example.cypress.io").then(() => {
      expect(local).to.eq(local2);
    });
  });

  it("static - command - fail", () => {
    cy.visit("https://example.cypress.io");
    const local = ExoStatic.First;
    cy.getStatic().then((command) => {
      expect(local).to.eq(command);
    });
  });

  it("static - task - fail", () => {
    cy.visit("https://example.cypress.io");
    const local = ExoStatic.First;
    const task = cy.task("getStatic").then((task) => {
      expect(local).to.eq(task);
    });
  });
});
