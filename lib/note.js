class Note {
constructor(title, text) {
        //check for valid parameters
        if (typeof title !== "string" || !title.trim().length) {
            throw new Error("Expected parameter 'title' to be a non-empty string");
        }


        if (typeof text !== "string" || !text.trim().length) {
            throw new Error("Expected parameter 'text' to be a non-empty string");
        }


        this.title = title;
        this.text = text;
    }

    //getter methods
    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }

}

module.exports = Note;