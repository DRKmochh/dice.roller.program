function tiradado(){

    let dadofinale;
    const max = 6;
    const min = 1; 

    dadofinale = Math.floor(Math.random()* max - min + 2);

    console.log(dadofinale);

    const imgElement = document.getElementById("dado");
    const textElement = document.getElementById("input");
  
    switch (dadofinale) {
      case 1:
        imgElement.src = "faccia1.jpg";
        textElement.textContent = `1`;
        break;
      case 2:
        imgElement.src = "faccia2.jpg";
        textElement.textContent = `2`;
        break;
      case 3:
        imgElement.src = "faccia3.jpg";
        textElement.textContent = `3`;
        break;
      case 4:
        imgElement.src = "faccia4.jpg";
        textElement.textContent = `4`;
        break;
      case 5:
        imgElement.src = "faccia5.jpg";
        textElement.textContent = `5`;
        break;
      case 6:
        imgElement.src = "faccia6.jpg";
        textElement.textContent = `6`;
        break;
    }
  }