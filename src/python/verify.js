import { ethers } from "ethers"
import MarketplaceAbi from '../../src/frontend/contractsData/Marketplace.json'  assert {type: 'json'};
import MarketplaceAddress from '../../src/frontend/contractsData/Marketplace-address.json'  assert {type: 'json'};
import NFTAddress from '../frontend/contractsData/NFT-address.json' assert {type: 'json'};
import NFTAbi from '../frontend/contractsData/NFT.json' assert {type: 'json'};


// const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8546")
// console.log(provider)
const signer = provider.getSigner()
// console.log(signer)
const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
const account= "0x5FbDB2315678afecb367f032d93F642f64180aa3"
// console.log(marketplace)
const renderItems = async () => {
    const filter =  marketplace.filters.Bought(null,null,null,null,null,account)
    let results = await marketplace.queryFilter(filter)
    // const purchases = await Promise.all(results.map(async i => {
    //     i = i.args
    //     const uri = await nft.tokenURI(i.tokenId)
    //     const response = await fetch(uri)
    //     const metadata = await response.json()
    //     const totalPrice = await marketplace.getTotalPrice(i.itemId)
    //     let purchasedItem = {
    //     totalPrice,
    //     price: i.price,
    //     itemId: i.itemId,
    //     name: await metadata.name,
    //     description: await metadata.description,
    //     image: await metadata.image,
    //     torrent : await metadata.torrent
    //     }
    //     return purchasedItem
    // }))
    return 0;
}
let items = await renderItems()
// console.log(purchases)
// ws://localhost:8546