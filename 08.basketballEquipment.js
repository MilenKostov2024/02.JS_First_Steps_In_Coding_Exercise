function basketballEquipment(annualFee) {
    let sneakers = annualFee * 0.60;        // 40% по-малко → остават 60%
    let outfit = sneakers * 0.80;           // 20% по-малко → остават 80%
    let ball = outfit / 4;
    let accessories = ball / 5;

    let totalCost = annualFee + sneakers + outfit + ball + accessories;

    console.log(totalCost.toFixed(2));
}

basketballEquipment()