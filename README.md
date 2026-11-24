# Défense spatiale

Un jeu de défense de tourelles : des vagues d'ennemis suivent une route vers ta station, et tu places des tourelles le long du chemin pour les arrêter. 30 cartes, 9 tourelles à trois niveaux, 12 sortes d'ennemis et 4 difficultés ; tiens 50 vagues pour gagner la médaille.

*English version: [README.en.md](README.en.md)*

## Commandes

- **1 à 9** ou clic sur une tourelle de la liste : la choisir ; puis clic sur une case libre pour la construire.
- **Maj + clic** : en poser plusieurs à la suite.
- **Clic sur une tourelle posée** : voir ses dégâts et sa portée, l'**améliorer** (**U**, ou **U** / **I** pour choisir la spécialisation du niveau 3) ou la **vendre** (**V**, 70 % de ce qu'elle a coûté).
- **Clic droit** ou **Échap** : annuler ; **Espace** : pause ; **Vitesse ×2** accélère le jeu.
- **Entrée** : lancer la vague suivante ; **PLEIN ÉCRAN** : le jeu et ses tourelles sur tout l'écran.
- La route a des bords qui luisent et des flèches dorées qui avancent dans le sens des ennemis, jusqu'à la station.
- **Lancer la vague** : envoie la vague suivante sans attendre. Plus tu l'appelles tôt, plus tu gagnes de cristaux (2 par seconde d'avance).

## Les tourelles

- **Laser** : tire vite sur une seule cible.
- **Canon à plasma** : obus qui explosent sur une zone.
- **Givre** : ralentit tous les ennemis autour de lui.
- **Tesla** : un éclair qui rebondit d'un ennemi à l'autre.
- **Missiles** : longue portée, vise l'ennemi le plus solide.
- **Rail** : tir instantané qui traverse toute la ligne.
- **Acide** : un poison qui ignore l'armure.
- **Nova** : brûle tout ce qui passe autour de lui.
- **Relais** : ne tire pas, mais renforce les tourelles proches (+25 % de dégâts, jusqu'à plus au niveau 3).

Chaque tourelle s'améliore deux fois. Le niveau 2 donne plus de dégâts, de portée et de cadence ; au **niveau 3**, tu choisis **une des deux spécialisations**, et l'autre est perdue pour cette tourelle (bouton de gauche ou **U**, bouton de droite ou **I**) :

| Tourelle | Spécialisation 1 | Spécialisation 2 |
|---|---|---|
| Laser | Rayon perçant : touche les 3 ennemis de tête | Laser rapide : tire trois fois plus vite |
| Canon à plasma | Mortier lourd : énorme explosion, plus lente | Fragmentation : l'obus éclate en 4 petites bombes |
| Givre | Zéro absolu : une impulsion sur trois gèle sur place | Grêle : moins de froid, beaucoup de dégâts |
| Tesla | Tempête : l'éclair rebondit sur 10 ennemis | Surcharge : 3 cibles, dégâts énormes |
| Missiles | Salve : 3 missiles sur 3 cibles | Ogive : un missile qui explose sur une zone |
| Rail | Antimatière : tir dévastateur, plus lent | Rail jumeau : deux traits à chaque tir |
| Acide | Corrosion : les ennemis touchés prennent +30 % de dégâts | Nuage toxique : grande zone empoisonnée |
| Nova | Supernova : plus large et plus forte | Pulsar : brûle sans arrêt, de près |
| Relais | Amplificateur : +90 % de dégâts autour | Accélérateur : les tourelles proches tirent bien plus vite |

Une tourelle spécialisée porte un petit voyant (doré pour la 1re, cyan pour la 2e). Chaque tourelle compte les **dégâts qu'elle a infligés** (affichés quand on la clique), et la fin de partie dit quelle a été ta **meilleure tourelle**.

## Les ennemis

Drones, éclaireurs rapides, essaims, **grappes** et **ruches** qui éclatent en ennemis plus petits, **cuirassés** blindés qui libèrent des drones, **porte-boucliers**, **foreuses** très rapides, **méduses** qui se régénèrent, **fantômes** insensibles au ralentissement, et **titans**. Toutes les 10 vagues arrive un **vaisseau-mère**. Les ennemis deviennent plus résistants à chaque vague ; l'armure réduit les dégâts de chaque tir.

## Déroulement

- Tu commences avec des cristaux (♦) et des vies (selon la difficulté). Chaque ennemi détruit rapporte des cristaux, chaque vague finie aussi.
- Chaque ennemi qui atteint la station coûte une vie (plusieurs pour un titan ou un vaisseau-mère). À zéro : « La station est tombée ».
- Entre deux vagues, un compte à rebours de 15 secondes laisse le temps de construire.
- Au bout de la **vague 50**, tu gagnes la médaille de la difficulté choisie ; la partie continue ensuite pour battre ton record.

## Difficultés et cartes

- **Facile** (30 vies), **Normal** (20), **Difficile** (15) et **Cauchemar** (10) : ennemis plus solides et plus rapides, moins de cristaux.
- 30 cartes avec chacune sa route (spirale, zigzag, double flux, triple entrée, labyrinthe…). Toutes sont ouvertes d'emblée ; dans la liste, chaque étoile est une médaille gagnée sur la carte, et le record de vague est gardé par carte et par difficulté.

## Données et synchronisation

Tes records et tes médailles sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Défense spatiale → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
