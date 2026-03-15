function repainting(nylonQty, paintQty, thinnerQty, workHours) {
    const nylonPrice = 1.50;
    const paintPrice = 14.50;
    const thinnerPrice = 5.00;
    const bagCost = 0.40;

    // Добавки по условие
    let totalNylon = nylonQty + 2;
    let totalPaint = paintQty * 1.10;

    // Разходи за материали
    let materialsCost = (totalNylon * nylonPrice) + (totalPaint * paintPrice) +
    (thinnerQty * thinnerPrice) + bagCost;

    // Заплащане за майстори (30% от стойността на материалите за всеки час)
    let laborCost = materialsCost * 0.30 * workHours;

    let totalCost = materialsCost + laborCost;

    console.log(totalCost.toFixed(2));
}
