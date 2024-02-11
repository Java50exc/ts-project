import { CipherImpl } from "./CipherDecipher";
export class CipherLeftShift extends CipherImpl {

    constructor(key: number) {
        super(n => this.CODE_END -((key + this.CODE_END - n) % this.ALPH_LEN), 
            n => (n + key) % this.ALPH_LEN)
    }
}