const cardnum = 1155;
const amount = '10,00,000';
const otp = (
    "" + Math.floor(Math.random() * 1000000)
)
const msg = `Your OTP for Amount ${amount} and Card Number ending with XX${cardnum} is ${otp}`;
console.log(msg);
/*Output :
Your OTP for Amount 10,00,000 and Card Number ending with XX1155 is 883851
*/