const { Keypair } = require('@solana/web3.js');

const kp = Keypair.generate();
console.log("Public Key:", kp.publicKey.toBase58());
console.log("Private Key Array for .env:", JSON.stringify(Array.from(kp.secretKey)));
