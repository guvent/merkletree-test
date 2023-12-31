class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;

        this.proofs = [leaves];
        this.root = this.getRoot(leaves);
    }

    getRoot(leaves) {
        const result = leaves
            .map((v, i, f) => {
                if (i % 2 === 1) return null;
                return [v, f[i + 1]];
            })
            .filter((v) => !!v)
            .map(([a, b]) => !b ? a : this.concat(a, b));

        if (result.length === 1) return result;
        this.proofs.push(result);
        return this.getRoot(result);
    }

    findRoot(pi) {
        const selected = this.proofs.map((v, i, f) => {
            if (pi % 2 === 0) {
                return {
                    data: v[pi],
                    left: true
                }
            } else {
                return {
                    data: i > 0 ? v[pi - 1] : v[pi],
                    left: false
                }
            }
        }).filter((v) => !!v.data);

        console.warn(selected)
        //console.warn("---")

        return selected;
    }

    getProof(i) {
        const root = this.getRoot(this.leaves);

        const result = this.findRoot(i);

        return result;
    }
}

module.exports = MerkleTree;
