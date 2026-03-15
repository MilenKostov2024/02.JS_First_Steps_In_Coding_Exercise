function foodDelivery(chickenMenus, fishMenus, vegMenus) {
    const chickenPrice = 10.35;
    const fishPrice = 12.40;
    const vegPrice = 8.15;
    const deliveryFee = 2.50;

    // Сума за основни менюта
    let baseTotal = (chickenMenus * chickenPrice) + (fishMenus * fishPrice) + (vegMenus * vegPrice);

    // Десерт – 20% от основната сума
    let dessert = baseTotal * 0.20;

    // Обща сума
    let total = baseTotal + dessert + deliveryFee;

    console.log(total.toFixed(2));
}

foodDelivery()