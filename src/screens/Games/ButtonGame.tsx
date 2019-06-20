/**
 * Il y a 7 cas possibles: 
 * - 4 où il faut garder le bouton appuyer avant une autre étape
 * - 3 où il faut juste appuyer et relacher immédiatement
 * 
 * Il faut d'abord essayer de voir s'il s'agit d'un des trois cas rapides:
 * - 1 pile + Detonate
 * - 2 piles + FRK
 * - Hold + rouge
 * 
 * Si ce n'est pas le cas alors il faut garder le bouton appuyer.
 * En fonction de la couleur, il faut relacher quand un numéro est présent dans le décompte:
 * - bleu -> 4
 * - jaune -> 5
 * - reste -> 1
 * 
 */