function generateExcuse() {
    //write your code here
    let who = ["The dog", "Jaden", "Enrique"];
    let action = ["broke", "3D printed"];
    let what = ["my homework", "Visual Studio Code"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];
  
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);
  
    document.getElementById(
      "excuse"
    ).innerHTML = `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}!`;
  }