const purchases = await Promise.all(results.map(async i => {
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