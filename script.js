function lengthConverter(source, valNum) {
  valNum = parseFloat(valNum);
  const inputCm = document.getElementById("inputCm");
  const inputInches = document.getElementById("inputInches");
  const inputFeet = document.getElementById("inputFeet");
  const inputMiles = document.getElementById("inputMiles");
  const inputMeters = document.getElementById("inputMeters");
  const inputYards = document.getElementById("inputYards");
  const Kilometers = document.getElementById("Kilometers");

  if (source == "inputCm") {
    inputInches.value = (valNum * 0.3937).toFixed(2);
    inputFeet.value = (valNum * 0.032808).toFixed(2);
    inputMiles.value = (valNum * 0.0000062137).toFixed(2);
    inputMeters.value = valNum / 100;
    inputYards.value = (valNum * 0.010936).toFixed(2);
    Kilometers.value = valNum / 100000;
  }
  if (source == "inputInches") {
    inputCm.value = (valNum / 0.3937).toFixed(2);
    inputFeet.value = (valNum * 0.083333).toFixed(2);
    inputMiles.value = (valNum * 0.000015783).toFixed(2);
    inputMeters.value = valNum / 39.37;
    inputYards.value = (valNum * 0.027778).toFixed(2);
    Kilometers.value = valNum / 39370;
  }
  if (source == "inputFeet") {
    inputCm.value = (valNum / 0.032808).toFixed(2);
    inputInches.value = (valNum * 12).toFixed(2);
    inputMiles.value = (valNum * 0.00018939).toFixed(2);
    inputMeters.value = valNum / 3.2808;
    inputYards.value = (valNum * 0.33333).toFixed(2);
    Kilometers.value = valNum / 3280.8;
  }
  if (source == "inputMiles") {
    inputCm.value = (valNum / 0.0000062137).toFixed(2);
    inputInches.value = (valNum * 63360).toFixed(2);
    inputFeet.value = (valNum * 5280).toFixed(2);
    inputMeters.value = valNum / 0.00062137;
    inputYards.value = (valNum * 1760).toFixed(2);
    Kilometers.value = valNum / 0.62137;
  }
  if (source == "inputMeters") {
    inputCm.value = (valNum / 0.01).toFixed(2);
    inputInches.value = (valNum * 39.37).toFixed(2);
    inputFeet.value = (valNum * 3.2808).toFixed(2);
    inputMiles.value = valNum * 0.00062137;
    inputYards.value = (valNum * 1.0936).toFixed(2);
    Kilometers.value = valNum / 1000;
  }
  if (source == "inputYards") {
    inputCm.value = (valNum / 0.010936).toFixed(2);
    inputInches.value = (valNum * 36).toFixed(2);
    inputFeet.value = (valNum * 3).toFixed(2);
    inputMiles.value = valNum * 0.00056818;
    inputMeters.value = (valNum / 1.0936).toFixed(2);
    Kilometers.value = valNum / 1093.6;
  }
  if (source == "Kilometers") {
    inputCm.value = (valNum * 100000).toFixed(2);
    inputInches.value = (valNum * 39370).toFixed(2);
    inputFeet.value = (valNum * 3280.8).toFixed(2);
    inputMiles.value = valNum * 0.62137;
    inputMeters.value = (valNum * 1000).toFixed(2);
    inputYards.value = valNum * 1093.6;
  }
}

function clear() {
  let clearBtn = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", () => {
    inputCm.value = "";
    inputInches.value = "";
    inputFeet.value = "";
    inputMiles.value = "";
    inputMeters.value = "";
    inputYards.value = "";
    Kilometers.value = "";
    console.log("object");
  });
}

clear();
