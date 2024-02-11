import { Cipher } from "./Cipher";
import { CipherLeftShift } from "./CipherLeftShift";
import { displayCipherDecipher } from "./displayCipherDecipher";

const left: Cipher = new CipherLeftShift(5);

displayCipherDecipher(left, 'abcde');
