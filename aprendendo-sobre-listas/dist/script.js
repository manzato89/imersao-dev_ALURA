var listaFilmes = ["Yesterday","A Chegada","Escola de Rock","Harry Potter"];
//Elementos            1            2             3
//Indice               0            1             2

//adicionando novos elementos - indice 3
listaFilmes.push("Harry Potter a");
listaFilmes.push("Harry Potter b");
listaFilmes.push("Harry Potter c");

//    valor inicial.  condicao.    expressao final.
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}

//var filme1 = "Yesterday";
//var filme2 = "A Chegada";
//var filme3 = "Escola de Rock";

//document.write("<p>" + filme1 + "</p>")
//document.write("<p>" + filme2 + "</p>")
//document.write("<p>" + filme3 + "</p>")

//-----//

//var listafilmes = ["Yesterday","A Chegada","Escola de Rock","Harry Potter"];

//document.write("<p>" + listafilmes[0] + "</p>");
//document.write("<p>" + listafilmes[1] + "</p>");
//document.write("<p>" + listafilmes[2] + "</p>");
//document.write("<p>" + listafilmes[3] + "</p>");