const Note = require("../lib/note");

describe("Note", () => {
    describe("Initialization", () => {
        it("should create an object with an id, title and text if provided valid arguments", () => {
            const note = new Note(1, "Travel", "Buy the tickets.");

            expect(emp.id).toEqual(1);
            expect(note.title).toEqual("Travel");
            expect(note.text).toEqual("Buy the tickets.");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Note();

            expect(cb).toThrow();
        });

        it("should throw an error if not provided an id", () => {

            const cb = () =>  new Note("Travel", "Buy the tickets.");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided a title", () => {

            const cb = () => new Note(1, "", "Buy the tickets.");
            const err = new Error("Expected parameter 'title' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided some text", () => {

            const cb = () => new Note(1, "Travel", "");
            const err = new Error("Expected parameter 'text' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Note("note", "Travel", "Buy the tickets.");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Note(-1, "Travel", "Buy the tickets.");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'title' is not a string", () => {
            const cb = () => new Note(3, "Buy the tickets.");
            const err = new Error("Expected parameter 'title' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'text' is not a string", () => {
            const cb = () => new Note("Travel", 3);
            const err = new Error("Expected parameter 'text' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        
    });

    describe("getId", () => {
        it("should return the id of the note", () => {
            const emp = new Note(1, "Travel", "Buy the tickets.");

            const res = emp.getTitle();

            expect(res).toEqual(1);
        });
    });

    describe("getTitle", () => {
        it("should return the title of the note", () => {
            const emp = new Note(1, "Travel", "Buy the tickets.");

            const res = emp.getTitle();

            expect(res).toEqual("Travel");
        });
    });

    describe("getText", () => {
        it("should return the text of the note", () => {
            const emp = new Note(1, "Travel", "Buy the tickets.");

            const res = emp.getText();

            expect(res).toEqual("Buy the tickets.");
        });
    });

});
