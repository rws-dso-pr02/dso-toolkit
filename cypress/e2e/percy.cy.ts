describe("Percy", () => {
  before(() => {
    cy.visit("http://localhost:45000/?path=/story/html-css-accordion--default")
      .get<HTMLIFrameElement>("#storybook-preview-iframe")
      .then(($iframe) =>
        $iframe[0].contentDocument.readyState === "loading"
          ? new Cypress.Promise((resolve) => $iframe.on("load", () => resolve()))
          : Cypress.Promise.resolve()
      )
      .get('button[title="Shortcuts"]')
      .and("be.visible")
      .click()
      .get("#collapse")
      .click()
      .get("button.sidebar-subheading-action")
      .click({ multiple: true })
      .get("#storybook-explorer-menu a.sidebar-item")
      .then((a) => Array.from(a).map((e) => e.id))
      .as("stories");

    cy.task("getAllComponentsWithSpecs").as("componentsWithSpecs");
  });

  it("take screenshot of all components without cypress tests", () => {
    cy.get<string[]>("@stories").then((stories) => {
      cy.get<string[]>("@componentsWithSpecs").then((componentsWithSpecs) => {
        const filteredStories = stories.filter((s) => !componentsWithSpecs.some((c) => s.includes(`${c}--`)));

        for (const story of filteredStories) {
          cy.visit(`http://localhost:45000/iframe.html?id=${story}`);

          cy.percySnapshot(story);
        }
      });
    });
  });
});
