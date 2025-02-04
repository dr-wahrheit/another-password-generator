export default class Password {
    constructor(availableChars, passwordLength) {
        this.availableChars = availableChars;
        this.passwordLength = passwordLength;
    }

    generate() {
        if (this.availableChars.size === 0) {
            throw new Error('No characters available to generate password');
        }

        const charsArray = Array.from(this.availableChars);
        const randomValues = crypto.getRandomValues(new Uint32Array(this.passwordLength));

        const password = Array.from({ length: this.passwordLength }, (_, i) => {
            return String.fromCharCode(charsArray[randomValues[i] % charsArray.length]);
        }).join('');

        return {
            password,
            strength: this.#calculateStrength(password),
        }

    }

    #calculateStrength(password) {
        const uniqueChars = new Set(password).size;
        const entropy = password.length * Math.log2(uniqueChars);
        return entropy.toFixed(2);

    }
}