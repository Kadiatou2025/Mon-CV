// function telechargermoncv() {
//     const element = document.querySelector('.cv'); // Sélectionne l'élément à télécharger
//     const opt = {
//         margin: 0,
//         filename: 'mon_cv.pdf',
//         image: { type: 'jpeg', quality: 1 },
//         html2canvas: { scale: 2, useCORS: true },
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };

//     // Crée le PDF à partir de l'élément
//     html2pdf().set(opt).from(element).save().then(() => {
//         // Après le téléchargement, on peut rajouter un retour visuel si besoin
//         console.log("Le CV a été téléchargé !");
//     });
// }
function telechargermoncv(){
var element = document.getElementById('element-to-print');
var opt = {
  margin:       0,
  filename:     'mon cv.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2,scrollY:0, },
  jsPDF:        { unit: 'px', format:[595,842], orientation: 'portrait' }
};

// New Promise-based usage:
html2pdf().set(opt).from(element).save();

}

function changeColor(){
  const color = document.getElementById("col")
  document.documentElement.style.setProperty("--bgcolor",color.value);
  console.log(color);
}