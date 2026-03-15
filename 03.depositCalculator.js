function depositCalculator(depositedSum, depositPeriod, annualInterestPercent) {
    let annualInteresttDecimal = annualInterestPercent / 100;
    let sum = depositedSum + depositPeriod * ((depositedSum * annualInteresttDecimal) / 12);
    console.log(sum);
}

depositCalculator()