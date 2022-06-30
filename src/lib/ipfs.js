import { create } from 'ipfs-core'

export const createIPFS = async () => {
    ipfs = await create({
        repo: String(Math.random() + Date.now()),
        init: { alogorithm: 'ed25519' }
    })
    return ipfs
}

