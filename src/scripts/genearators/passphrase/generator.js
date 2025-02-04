export default class Passphrase {
    constructor(wordList, wordCount = 4, separator = '-', includeNumbers = false, capitalize = false) {
        this.wordList = wordList;
        this.wordCount = wordCount;
        this.separator = separator;
        this.includeNumbers = includeNumbers;
        this.capitalize = capitalize;
    }

    generate() {
        let passphrase = [];
        for (let i = 0; i < this.wordCount; i++) {
            let word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
            if (this.capitalize) {
                word = this.#randomCapitalize(word);
            }
            passphrase.push(word);
        }

        if (this.includeNumbers) {
            passphrase.push(Math.floor(Math.random() * 100));
        }

        return {
            passphrase: passphrase.join(this.separator),
            strength: this.#getStrength(),
        }
    }

    #randomCapitalize(word) {
        return word
            .split('')
            .map(char => (Math.random() < 0.5 ? char.toUpperCase() : char))
            .join('');
    }

    #getStrength() {
        let entropy = this.wordCount * Math.log2(this.wordList.length);
        if (this.includeNumbers) entropy += Math.log2(100);
        if (this.capitalize) entropy += this.wordCount * 1.5; // Approximate extra entropy from capitalization
        return entropy;
    }
}
