const MerkleTree = require("./MerkleTree");

const { hashProof, sha256, concatHash, concatLetters } = require('./testUtil');

const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const root = 'eb100814abc896ab18bcf6c37b6550eeadeae0c312532286a4cf4be132ace526';
const hashTree = new MerkleTree(leaves.map(sha256), concatHash);
const lettersTree = new MerkleTree(leaves, concatLetters);


leaves.forEach((leaf, i) => {
    const proof = hashTree.getProof(i);

    // console.log(proof);
    // const hashedProof = hashProof(leaf, proof).toString('hex');
    // if (hashedProof !== root) {
    //     const lettersProof = lettersTree.getProof(i);
    //     console.log(
    //         "The resulting hash of your proof is wrong. \n" +
    //         `We were expecting: ${root} \n` +
    //         `We received: ${hashedProof} \n` +
    //         `In ${leaves.join('')} Merkle tree, the proof of ${leaves[i]} you gave us is: \n` +
    //         `${JSON.stringify(lettersProof, null, 2)}`
    //     );
    // }
});