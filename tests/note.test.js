const Note = require("../lib/note");

describe("Note", () => {
    describe("Initialization", () => {
        it("should create an object with an id, title and text if provided valid arguments", () => {
            const note = new Note("id1", "Travel", "Buy the tickets.");

            expect(note.id).toEqual("id1");
            expect(note.title).toEqual("Travel");
            expect(note.text).toEqual("Buy the tickets.");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Note();

            expect(cb).toThrow();
        });

        it("should throw an error if not provided an id", () => {

            const cb = () =>  new Note("", "Travel", "Buy the tickets.");
            const err = new Error("Expected parameter 'id' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided a title", () => {

            const cb = () => new Note("id1", "", "Buy the tickets.");
            const err = new Error("Expected parameter 'title' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if not provided some text", () => {

            const cb = () => new Note("id1", "Travel", "");
            const err = new Error("Expected parameter 'text' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a string", () => {
            const cb = () => new Note(3, "", "Buy the tickets.");
            const err = new Error("Expected parameter 'id' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'title' is not a string", () => {
            const cb = () => new Note("id1", 3, "Buy the tickets.");
            const err = new Error("Expected parameter 'title' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'text' is not a string", () => {
            const cb = () => new Note("id1", "Travel", 3);
            const err = new Error("Expected parameter 'text' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        
    });

    describe("getId", () => {
        it("should return the id of the note", () => {
            const note = new Note("id1", "Travel", "Buy the tickets.");

            const res = note.getId();

            expect(res).toEqual("id1");
        });
    });

    describe("getTitle", () => {
        it("should return the title of the note", () => {
            const note = new Note("id1", "Travel", "Buy the tickets.");

            const res = note.getTitle();

            expect(res).toEqual("Travel");
        });
    });

    describe("getText", () => {
        it("should return the text of the note", () => {
            const note = new Note("id1", "Travel", "Buy the tickets.");

            const res = note.getText();

            expect(res).toEqual("Buy the tickets.");
        });
    });

});
