import { Cipher } from "./Cipher";
import { CipherLeftShift } from "./CipherLeftShift";
import { CipherRightShift } from "./CipherRightShift";
import { displayCipherDecipher } from "./displayCipherDecipher";

const left: Cipher = new CipherLeftShift();
const right: Cipher = new CipherRightShift();

displayCipherDecipher(left, ' !~ASDasd ');
displayCipherDecipher(right, ' !~ASDasd ');
