/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.in");
    //  cy.wait(10000);
  });

  it("Best Sellers", () => {
    cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.get(
      "._p13n-zg-nav-tab-all_style_zg-tabs-li-selected-div__3tHnP > a"
    ).contains("Bestsellers");
    cy.get(
      ":nth-child(2) > ._p13n-zg-nav-tab-all_style_zg-tabs-li-div__1YdPR > a"
    ).contains("Hot New Releases");
    cy.get(
      ":nth-child(3) > ._p13n-zg-nav-tab-all_style_zg-tabs-li-div__1YdPR > a"
    ).contains("Movers and Shakers");
    cy.get(
      ":nth-child(4) > ._p13n-zg-nav-tab-all_style_zg-tabs-li-div__1YdPR > a"
    ).contains("Most Wished For");
    cy.get(
      ":nth-child(5) > ._p13n-zg-nav-tab-all_style_zg-tabs-li-div__1YdPR > a"
    ).contains("Most Gifted");
  });

  it("Mobile", () => {
    cy.get(
      '[href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"]'
    ).click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.get(
      '[href="/b/?_encoding=UTF8&node=1389401031&ref_=sv_top_elec_mega_1"] > .nav-a-content'
    ).contains("Mobiles & Accessories");
    cy.get(
      '[href="/b/?_encoding=UTF8&node=976392031&ref_=sv_top_elec_mega_2"] > .nav-a-content'
    ).contains("Laptops & Accessories");
    cy.get(
      '[href="/b/?_encoding=UTF8&node=1389375031&ref_=sv_top_elec_mega_3"] > .nav-a-content'
    ).contains("TV & Home Entertainment");
    cy.get(
      '[href="/b/?_encoding=UTF8&node=1389335031&ref_=sv_top_elec_mega_4"] > .nav-a-content'
    ).contains("Audio");
    cy.get(
      '[href="/b/?_encoding=UTF8&node=1388977031&ref_=sv_top_elec_mega_5"] > .nav-a-content'
    ).contains("Camera");
    cy.get(
      '[href="/b/?_encoding=UTF8&node=1375248031&ref_=sv_top_elec_mega_6"] > .nav-a-content'
    ).contains("Computer Peripherals");
    cy.get(
      '[href="/b/?_encoding=UTF8&node=13773797031&ref_=sv_top_elec_mega_7"] > .nav-a-content'
    ).contains("Smart Technology");
  });
  it("Today's Deals", () => {
    cy.get('[href="/deals?ref_=nav_cs_gb"]').click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Customer Service", () => {
    cy.get(
      '[href="/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help"]'
    ).click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it(" Electronics ", () => {
    cy.get(
      '[href="/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics"]'
    ).click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Prime", () => {
    cy.get("#nav-link-prime").click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("Fashion", () => {
    cy.get(
      '[href="/gp/browse.html?node=6648217031&ref_=nav_cs_fashion"]'
    ).click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
