import CryptoJs from 'crypto-js'
export const generateRandomIV = ()=>{
    return CryptoJs.lib.WordArray.random(16)
}

export const encrypt = (plainText:string)=>{
    const key  =  "b03ddf3ca2e714a6";// set to  config .env
    const keyWordArray = CryptoJs.enc.Utf8.parse(key)
    const getIv = generateRandomIV();
    const encrypted = CryptoJs.AES.encrypt(plainText,keyWordArray,{
        iv:getIv,
        mode:CryptoJs.mode.CBC,
        padding:CryptoJs.pad.Pkcs7,
    })
    const encryptedData = getIv.concat(encrypted.ciphertext).toString(CryptoJs.enc.Base64);
    return encryptedData;
}
