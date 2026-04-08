document.querySelector("#myform").onsubmit = function (e) {
  e.preventDefault();
  let t = document.querySelector("#taille").value;
  let p = document.querySelector("#poids").value;
  let genre = document.querySelector("input[name='genre']:checked");
  let mc = p / (t / 100) ** 2 + Number(genre.value);
  let result = document.querySelector("#result");
  result.innerHTML = `Vous êtes ${genre.id}, et votre IMC est: ${mc.toFixed(2)}`;
  result.classList.remove("d-none");
};
