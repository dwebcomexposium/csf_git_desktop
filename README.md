# Thème / Framework minimal version Desktop

Ces fichiers constituent le thème par défaut de nos sites. 

Il servent à habiller un minimum le code HTML généré par le CMS, mais également à génrérer le fonctionnement javascript de nos modules .

## Qu'est ce que c'est ?

Ces fichiers de ressources (css / images / javascript / favicon...) sont les fichiers du thème minimal. Ils sont utilisé pour styliser et permettre le fonctionnement des composants intégrés au CMS.

#### Le CMS embarque tous les fichiers de ce dépôt.

## Dans quel ordre le CMS charge-t-il les fichiers ?

Le CMS charge les fichiers dans l'ordre du dépôt, de haut en bas. 

```
Exemple, dans le dossier CSS du dépôt actuel, le premier fichier css chargé sera :

'common-add-calendar.css' 
          |
'common-langswitcher.css'
          |
         ...
          |
         ...
          |
'styles-base-corporate.css'
          |
    'surcharge.css'

```

## loading.lst

Dans le dossiers JS, il y a un fichier "loading.lst".

Il est utilisé par le CMS pour charger les fichiers javascript dans l'ordre indiqué dans ce fichier.

Pour que le fichier javascript soit inclus et chargé dans le site, il faut donc : 

1 - Le rajouter dans le dossier JS

2 - Le rajouter à la fin dans le fichier "loading.lst"

**SI VOUS NE LISTEZ PAS VOS FICHIERS JS DANS LE LOADING.LST, ILS NE SERONT PAS CHARGES**

## Surcharger le thème initial

### Pour rajouter du code CSS

Vous devez rajouter votre code CSS dans le fichier à cet effet "surcharge.css" qui se trouve dans le dossier CSS. Libre à vous de rajouter vos fichiers dans le dossier. Ils seront également chargés dans l'ordre indiqué ci-dessus.

### Pour rajouter du code javascript

Vous devrez rajouter directement vos fichiers dans le dossier JS et les inscrire dans le fichier loading.lst pour qu'ils soient chargés comme indiqué ci-dessus.
