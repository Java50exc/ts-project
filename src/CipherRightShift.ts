import { CipherImpl } from "./CipherDecipher";
export class CipherRightShift extends CipherImpl {

    constructor(key: number) {
        super(n => (n + key) % this.ALPH_LEN, 
            n => this.CODE_END -((key + this.CODE_END - n) % this.ALPH_LEN))
    }
}