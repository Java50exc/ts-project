import { Cipher } from "./Cipher";
export class CipherImpl implements Cipher {
    private LET_START: string = 'a';
    private LET_END: string = 'z';
    CODE_START: number = this.LET_START.charCodeAt(0);
    CODE_END: number = this.LET_END.charCodeAt(0);
    ALPH_LEN: number = this.CODE_END - this.CODE_START + 1;
    
    constructor(private cipherFn: (c: number) => number, 
        private decipherFn: (c: number) => number) {}

    cipher(plainText: string): string {
        return this.shiftString(plainText, this.cipherFn);
    }

    decipher(cipherText: string): string {
        return this.shiftString(cipherText, this.decipherFn);
    }

    private shiftString(str: string, fn: (c: number) => number): string {
        return Array.from(str)
            .map(c => {
                if (c < this.LET_START || c > this.LET_END) {
                    return c;
                }
                return String.fromCharCode(fn(c.charCodeAt(0) - this.CODE_START) + this.CODE_START);
            })
            .join('');
    }
    
}



