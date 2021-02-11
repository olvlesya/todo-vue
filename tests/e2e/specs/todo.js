const todoText = "My new todo";
const additionalText = "additional text";

describe("Todo", () => {
  it("should add todo", () => {
    cy.visit("/");
    cy.get('[data-testid="add-todo"]').type(`${todoText}{enter}`);
    cy.contains(todoText).should("be.visible");
  });

  it("should modify todo", () => {
    cy.get('[data-test-id="edit-mode"]').click();
    cy.get('[data-test-id="edit-todo"]').type(`${additionalText}{enter}`);
    cy.contains(todoText + additionalText).should("be.visible");
  });

  it("should delete todo", () => {
    cy.get('[data-test-id="delete-todo"]').click();
    cy.get(".ant-modal-confirm-btns button")
      .contains("OK")
      .parent()
      .click();

    cy.contains(todoText + additionalText).should("not.be.visible");
  });
});
