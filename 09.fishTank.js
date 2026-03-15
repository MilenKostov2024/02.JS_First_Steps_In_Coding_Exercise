function aquarium(length, width, height, percent) {

    // 1 куб. дециметър = 1 литър, а 1 дм = 10 см
    let volumeInCm = length * width * height;
    let volumeInLiters = volumeInCm / 1000; // 1000 куб. см = 1 литър

    let occupiedFraction = percent / 100;
    let neededLiters = volumeInLiters * (1 - occupiedFraction);

    console.log(neededLiters.toFixed(3));
}

aquarium()