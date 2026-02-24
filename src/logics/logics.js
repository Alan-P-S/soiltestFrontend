//Finding the Ph class from the PH value

const generalRecommend = [
    { Nitrogen: 128, Phosphorus: 128, Pottassium: 128 },
    { Nitrogen: 117, Phosphorus: 117, Pottassium: 117 },
    { Nitrogen: 106, Phosphorus: 106, Pottassium: 106 },
    { Nitrogen: 97, Phosphorus: 94, Pottassium: 94 },
    { Nitrogen: 91, Phosphorus: 83, Pottassium: 83 },
    { Nitrogen: 84, Phosphorus: 71, Pottassium: 71 },
    { Nitrogen: 78, Phosphorus: 60, Pottassium: 60 },
    { Nitrogen: 72, Phosphorus: 48, Pottassium: 48 },
    { Nitrogen: 63, Phosphorus: 37, Pottassium: 37 },
    { Nitrogen: 54, Phosphorus: 25, Pottassium: 25 },
  ];

const Crops = {
    COCONUT_WCT: {
      Nitrogen: 340,
      Phosphorus: 170,
      Pottassium: 870,
    },
    COCONUT_HYBIRD_WCT: {
      Nitrogen: 500,
      Phosphorus: 320,
      Pottassium: 1200,
    },
  };

export class logics{
  PhClassFind(ph){
    let phclass=null;
    if(ph<=4.0){
        phclass=0;
        return phclass;
    }
    else if(ph>=4.1 && ph<=4.5){
        phclass=1;
        return phclass;
    }
    else if(ph>=4.6 && ph<=5.0){
        phclass=2;
        return phclass;
    }
    else if(ph>=5.1 && ph<=5.5){
        phclass=3;
        return phclass;
    }
    else if(ph>=5.6 && ph<=6){
        phclass=4;
        return phclass;
    }
    else if(ph>=6.1 && ph<=6.5){
        phclass=5;
        return phclass;
    }
    else if(ph>=6.6 && ph<=7){
        phclass=6;
        return phclass;
    }
    else if(ph>=7.1 && ph<=7.5){
        phclass=7;
        return phclass;
    }
    else if(ph>=7.6 && ph<=8){
        phclass=8;
        return phclass;
    }
    else if(ph>=8.1 && ph<=10){
        phclass=9;
        return phclass;
    }
    else{
        phclass=9;
        return phclass;
    }
}

TssClassFind(tss){
    let tssclass=null;
    if(tss<0.8){
        tssclass=0;
        return tssclass;
    }
    else if(tss>=0.9 && tss<=1.6){
        tssclass=1;
        return tssclass;
    }
    else if(tss>=1.7 && tss<=3.2){
        tssclass=2;
        return tssclass;
    }
    else if(tss>=3.3 && tss<=4){
        tssclass=3;
        return tssclass;
    }
    else if(tss>=4.1 && tss<=4.9){
        tssclass=4;
        return tssclass;
    }
    else if(tss>=5.0 && tss<=5.6){
        tssclass=5;
        return tssclass;
    }
    else if(tss>=5.7 && tss<=6.4){
        tssclass=6;
        return tssclass;
    }
    else if(tss>=6.5 && tss<=7.2){
        tssclass=7;
        return tssclass;
    }
    else if(tss>7.3 && tss<=8){
        tssclass=8;
        return tssclass;
    }
    else{
        tssclass=9;
        return tssclass;
    }
}

PhosphorousClassFind(phosphoros){
    let phosphorosClass=0;
    if(phosphoros>=0 && phosphoros<=3.0){
        phosphorosClass=0;
        return phosphorosClass;
    }
    else if(phosphoros>=3.1 && phosphoros<=6.5){
        phosphorosClass=1;
        return phosphorosClass;
    }
    else if(phosphoros>=6.6 && phosphoros<=10){
        phosphorosClass=2;
        return phosphorosClass;
    }
    else if(phosphoros>=10.1 && phosphoros<=13.5){
        phosphorosClass=3;
        return phosphorosClass;
    }
    else if(phosphoros>=10.1 && phosphoros<=13.5){
        phosphorosClass=3;
        return phosphorosClass;
    }
    else if(phosphoros>=13.6 && phosphoros<=17){
        phosphorosClass=4;
        return phosphorosClass;
    }
    else if(phosphoros>=17.1 && phosphoros<=20.5){
        phosphorosClass=5;
        return phosphorosClass;
    }
    else if(phosphoros>=20.6 && phosphoros<=24){
        phosphorosClass=6;
        return phosphorosClass;
    }
    else if(phosphoros>=24.1 && phosphoros<=27.5){
        phosphorosClass=7;
        return phosphorosClass;
    }
    else if(phosphoros>=27.6 && phosphoros<=31){
        phosphorosClass=8;
        return phosphorosClass;
    }
    else if(phosphoros>=31.1 && phosphoros<=34.6){
        phosphorosClass=9;
        return phosphorosClass;
    }
    else{
        phosphorosClass=9;
        return phosphorosClass;
    }
};

OrganicCarbonClassFind(carbon,soilType){
    let carbonClass=0;
    if(soilType=='sandy'){
        if (carbon >= 0.0 && carbon <= 0.1) {
            carbonClass=0;
            return carbonClass;
      } else if (carbon >= 0.11 && carbon <= 0.2) {
            carbonClass=1;
            return carbonClass;
      } else if (carbon >= 0.21 && carbon <= 0.3) {
            carbonClass=2;
            return carbonClass;
      } else if (carbon >= 0.31 && carbon <= 0.45) {
            carbonClass=3;
            return carbonClass;
      } else if (carbon >= 0.46 && carbon <= 0.6) {
            carbonClass=4;
            return carbonClass;
      } else if (carbon >= 0.61 && carbon <= 0.75) {
            carbonClass=5;
            return carbonClass;
      } else if (carbon >= 0.76 && carbon <= 0.9) {
            carbonClass=6;
            return carbonClass;
      } else if (carbon >= 0.91 && carbon <= 1.1) {
            carbonClass=7;
            return carbonClass;
      } else if (carbon >= 1.11 && carbon <= 1.3) {
            carbonClass=8;
            return carbonClass;
      } else if (carbon >= 1.31 && carbon <= 1.5) {
            carbonClass=9;
            return carbonClass;
      } else {
            carbonClass=9;
            return carbonClass;
      }
    }
    else{
        if (carbon >= 0.0 && carbon <= 0.16) {
        carbonClass=0;
        return carbonClass;
      } else if (carbon >= 0.17 && carbon <= 0.33) {
        carbonClass=1;
        return carbonClass;
      } else if (carbon >= 0.34 && carbon <= 0.5) {
        carbonClass=2;
        return carbonClass;
      } else if (carbon >= 0.51 && carbon <= 0.75) {
        carbonClass=3;
        return carbonClass;
      } else if (carbon >= 0.76 && carbon <= 1) {
        carbonClass=4;
        return carbonClass;
      } else if (carbon >= 1.01 && carbon <= 1.25) {
        carbonClass=5;
        return carbonClass;
      } else if (carbon >= 1.26 && carbon <= 1.5) {
        carbonClass=6;
        return carbonClass;
      } else if (carbon >= 1.51 && carbon <= 1.83) {
        carbonClass=7;
        return carbonClass;
      } else if (carbon >= 1.84 && carbon <= 2.16) {
        carbonClass=8;
        return carbonClass;
      } else if (carbon >= 2.17 && carbon <= 2.5) {
        carbonClass=9;
        return carbonClass;
      } else {
        carbonClass=9;
        return carbonClass;
      }
    }
};

pottassiumClassFind(pottasium){
    let pottasiumClass=0;
    if (pottasium >= 0 && pottasium <= 35) {
      pottasiumClass=0;
      return pottasiumClass;
    } else if (pottasium >= 36 && pottasium <= 75) {
      pottasiumClass=1;
      return pottasiumClass;
    } else if (pottasium >= 76 && pottasium <= 115) {
      pottasiumClass=2;
      return pottasiumClass;
    } else if (pottasium >= 116 && pottasium <= 155) {
      pottasiumClass=3;
      return pottasiumClass;
    } else if (pottasium >= 156 && pottasium <= 195) {
      pottasiumClass=4;
      return pottasiumClass;
    } else if (pottasium >= 196 && pottasium <= 235) {
      pottasiumClass=5;
      return pottasiumClass;
    } else if (pottasium >= 236 && pottasium <= 275) {
      pottasiumClass=6;
      return pottasiumClass;
    } else if (pottasium >= 276 && pottasium <= 315) {
      pottasiumClass=7;
      return pottasiumClass;
    } else if (pottasium >= 316 && pottasium <= 355) {
      pottasiumClass=8;
      return pottasiumClass;
    } else if (pottasium >= 356 && pottasium <= 395) {
      pottasiumClass=9;
      return pottasiumClass;
    } else {
      pottasiumClass=9;
      return pottasiumClass;
    }
};

CropNutrientCalculator(carbonClass,phosphorosClass,pottassiumClass,cropname){
    let nitrogen =
    (generalRecommend[carbonClass].Nitrogen / 100) * Crops[cropname].Nitrogen;
    let phosphoros =
    (generalRecommend[phosphorosClass].Phosphorus / 100) *
    Crops[cropname].Phosphorus;
     let pottassium =
    (generalRecommend[pottassiumClass].Pottassium / 100) *
    Crops[cropname].Pottassium;
    return {nitrogen,phosphoros,pottassium};
};
}
