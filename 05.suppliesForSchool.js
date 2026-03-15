function calculateMaterials(chemicalPacks, markerPacks, cleaningLiters, discountPercent) {
    const priceChemicalPack = 5.80;
    const priceMarkerPack = 7.20;
    const priceCleaningLiter = 1.20;

    let totalPrice = (chemicalPacks * priceChemicalPack) + (markerPacks * priceMarkerPack) +
    (cleaningLiters * priceCleaningLiter);

    let discountAmount = totalPrice * (discountPercent / 100);
    let finalPrice = totalPrice - discountAmount;

    console.log(finalPrice.toFixed(2));
}

calculateMaterials()