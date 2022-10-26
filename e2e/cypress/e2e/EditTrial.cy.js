describe('Edit Trial', () => {
    it('Page loads correctly', () => {
        cy.visit('https://joecthomsen.dk/#/edittrials')
        cy.contains("My Trials")
        cy.contains("Create Trial")
    })

    it("Create Trial Open Modal", () => {
        cy.visit('https://joecthomsen.dk/#/edittrials')
        cy.contains("Create Trial").click()
        cy.contains("Edit Trial")
    })

    it("Create Trial delete button disabled right button = Create", () => {
        cy.visit('https://joecthomsen.dk/#/edittrials')
        cy.contains("Create Trial").click()
        cy.contains("Edit Trial")
        cy.get('[id=Create]')
        cy.contains("Delete").should("be.disabled")
    })

    it("Can Create Trial", () => {
        cy.visit('https://joecthomsen.dk/#/edittrials')
        cy.contains("Create Trial").click()
        cy.contains("Edit Trial")
        cy.contains("Header").click().type("test")
        cy.contains("Country").click().type("test")
        cy.contains("Title").click().type("test")
        cy.contains("City").click().type("test")
        cy.get('[id=Create]').click()
        cy.contains("test")
    })

    it("Check is Trial was created correctly", () =>{
        cy.visit('https://joecthomsen.dk/#/edittrials')
        cy.contains("test")
        cy.contains("Edit").click()
        cy.contains("Edit Trial")
        cy.get("[id=Header]").should("have.value","test");
        cy.get("[id=Country]").should("have.value","test");
        cy.get("[id=Title]").should("have.value","test");
        cy.get("[id=City]").should("have.value","test");
    })

    it("Edit Trial delete button not disabled right button = update", () => {
        cy.visit('https://joecthomsen.dk/#/edittrials')
        cy.contains("Edit").click()
        cy.contains("Edit Trial")
        cy.get('[id=Update]')
        cy.contains("Delete")
    })

    it("Can open A Trial and Cancel", () => {
        cy.visit('https://joecthomsen.dk/#/edittrials')
        cy.contains("Edit").click()
        cy.contains("Edit Trial")
        cy.contains("Cancel").click()
        cy.wait(500)
        cy.contains("Edit Trial").should("not.exist")
    })

    it("Can open A Trial and Delete", () => {
        cy.visit('https://joecthomsen.dk/#/edittrials')
        cy.contains("test")
        cy.contains("Edit").click()
        cy.contains("Edit Trial")
        cy.contains("Delete").click()
        cy.wait(500)
        cy.contains("test").should("not.exist")
    })
})