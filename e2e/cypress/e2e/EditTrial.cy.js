describe('Edit Trial', () => {
    it('get token and visit EditTrials', () => {
        cy.visit("/#/login")
        cy.get("[id=Username]").type("TestUser")
        cy.get("[id=Password]").type("test")
        cy.contains("Log in").click()
        cy.wait(1000)
    })

    it('EditTrials loads correctly', () => {

        cy.contains("My Trials")
        cy.contains("Create Trial")
    })

    it("Create Trials button opens modal & Delete should be disabled & Cancel button closes modal", () => {
        cy.contains("Create Trial").click()
        cy.contains("Edit Trial")
        cy.get('[id=Create]')
        cy.contains("Delete").should("be.disabled")
        cy.contains("Cancel").click()
        cy.wait(500)
    })

    it("Can Create Trial", () => {
        cy.contains("Create Trial").click()
        cy.contains("Edit Trial")
        cy.contains("Header").click().type("test")
        cy.contains("Country").click().type("test")
        cy.contains("Title").click().type("test")
        cy.contains("City").click().type("test")
        cy.get('[id=Create]').click()
    })

    it("Edit trial opens trialModal & Check Trial was created correctly & Edit Trial button has update button", () => {
        cy.contains("test")
        cy.contains("Edit").click()
        cy.contains("Edit Trial")
        cy.get("[id=Header]").should("have.value", "test");
        cy.get("[id=Country]").should("have.value", "test");
        cy.get("[id=Title]").should("have.value", "test");
        cy.get("[id=City]").should("have.value", "test");
        cy.get('[id=Update]')
        cy.contains("Cancel").click()
        cy.wait(500)
    })

    it("Can open A Trial and Delete Trial", () => {
        cy.contains("test")
        cy.contains("Edit").click()
        cy.contains("Edit Trial")
        cy.contains("Delete").click()
    })

    it("Trial was deleted and no existing testTrials", () => {
        cy.visit("/#/login")
        cy.get("[id=Username]").type("TestUser")
        cy.get("[id=Password]").type("test")
        cy.contains("Log in").click()
        cy.wait(1000)
        cy.contains("test").should("not.exist")
        }
    )
})