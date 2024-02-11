import { Cipher } from "./Cipher";
import { CipherLeftShift } from "./CipherLeftShift";
import { CipherRightShift } from "./CipherRightShift";
import { displayCipherDecipher } from "./displayCipherDecipher";

const left: Cipher = new CipherLeftShift(1);
const right: Cipher = new CipherRightShift(1);

displayCipherDecipher(left, ' !~ASDasd ');
displayCipherDecipher(right, ' !~ASDasd ');
