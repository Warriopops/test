Alors : 

D'habitude tu as juste des fichier html/js/css a la 
racine comme tu fait d'habitude

Mais vu que c'est chiant, on a fait un système ou tu ecris ton code de maniere plus simple, et derriere le programme récupere ton code et genere un index.html, index.css, etc...

Avec en plus le rechargement automatique, le decoupage de fichie
cegenre de chose


Le vue.config.js, c'est les paramètre pour configurer vue.js

vue .js ça ressemble a ça

C'est comme ce que tu connais, mais la diff c'est que le html, css et js est rasssemblé en un fichier
C'est plus pratique


package.json: C'est pour rajouter des librairies que d'autres personne on fait
Comme ça sa accelere un peu ton dev, vu que t'as pas besoin de tout reinventer
Pour installer une librairie tu fait npm install ...
si tu installe une librairie, il la telecharge et le met dans ton package.json

C'est en soi une liste de tout ce que ton projet a besoin, comme ça quand quelqu'un recupere ton code t'as pas besoin de lui dire quoi telecharger

package-lock.json => tu peux l'ignorer
jsconfig/babel.config => quand tu veut transformer ton code en index.html/js.html, faut dire au système comment tu veut que ce soit compilé, mais on peut passer pour l'instant, on verrras ce soir


.eslintrc.js => c'est un fichier de configuration pour la correction automatique
En gros si ton code est moche, ça vas te le mettre en rouge, si tu veux rajouter ou enlever des règles c'est ici que ça se passe

Des questions ? oui donc si j'ai bien compris je met le html/css/js au meme 
endroit mais ca va etre melanger non et me perdre? et comment je look en direct apres sur mon local comme avant

Ton html/css/js tu as plus a y toucher, c'est le programme qui vas le faire pour toi avec npm run serve (ou yarn serve)
mais pour toi l'equivalent du index.html c'est tout ce qui y'a dans le dossier src (pour source)

App.vue c'estle point d'entrée, comme index.html
Et pour voir les changements...

Tu clique sur le lien qu'il te donne, la seule diff c'est que c'est sur le port 8081

Oui, mais faut que t'aprenne le vuejs, vu qu'il y a des differences entre les deux
Mais je te laisse mater des tutos pour ça
Ju
sdonc dabord j'apprend le vuejs et APRES je fais la todolist alors ?
Comme tu veux, tu peut d'abord apprendre, ou alors t'essaye de faire les deux en meme temps
Perso j'ai plus de facilité pour apprendre quand j'ai un projet derriere ca marche merci ! donc je peut supprimer tout ca ?

Attend je vais le faire, t'as besoin d'un minimum


Juste quelques règles :  
- Pour l'instant fait tout dans un seul fichier (sauf si tu te sent chaud)
- PAS de jquery =( mdrr ouai jquery c'est pas fou en soi, mais vu comment ça vas plus vite en vue à mon avis tu vas preferer
ca marche je look tout ca merci tkt! 
- c'est tout =()




LISTE DE TACHES :

1. FAIRE UN EXEMPLE DE TODOLIST
2. QUAND TU ECRIS UNE TACHE CA LE RENTRE DANS LES TACHES
3.AJOUTER L ICONES POUBELLE ET CHECK