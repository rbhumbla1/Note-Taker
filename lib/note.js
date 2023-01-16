//Note Class to store and access information about a note

class Note {
constructor(id, title, text) {
        //check for valid parameters
        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }

        if (typeof title !== "string" || !title.trim().length) {
            throw new Error("Expected parameter 'title' to be a non-empty string");
        }


        if (typeof text !== "string" || !text.trim().length) {
            throw new Error("Expected parameter 'text' to be a non-empty string");
        }

        this.id = id;
        this.title = title;
        this.text = text;
    }

    //getter methods
    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }

}

module.exports = Note;