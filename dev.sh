#!/bin/sh

get_version() {
    grep '"version"' package.json | awk -F '"' '{print $4}'
}

update_version() {
    # VERSION=$(get_version)
    # NEW_VERSION=$(echo $VERSION | awk -F. -v OFS=. '{$NF++; print}')
    # sed -i "s/\"version\": \"$VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json
    # echo "Version updated to $NEW_VERSION"
     npm version patch
}

build() {
    echo "Building..."
    npm run build
    echo "gitdir: $PWD/.git/worktrees/dist" > ./dist/.git
}

deploy() {
    echo "Deploying..."
    VERSION=$(get_version)
    cd dist || exit 1
    git add .
    git commit -m "v$VERSION"
    git push
    cd .. || exit 1
}

# __ Main __
case "$1" in
    build)
        build
        ;;
    deploy)
        deploy
        ;;
    update-version)
        update_version
        ;;
    all)
        update_version
        build
        deploy
        ;;
    *)
        echo "Utilizzo: $0 {build|deploy|update-version|all}

Comandi disponibili:
  build                      Compila il progetto utilizzando npm.
  deploy                     Legge la versione dal package.json e la usa per il commit e il push.
  update-version             Incrementa la versione nel package.json.
  all                        Esegue tutti i comandi in sequenza.

Esempi:
  $0 build                   # Esegue la compilazione del progetto.
  $0 deploy                  # Esegue il deploy con il commit della versione corrente.
  $0 update-version          # Incrementa la versione nel package.json.
  $0 all                     # Esegue tutti i comandi in sequenza.

Note:
- Assicurarsi di avere npm installato e le dipendenze configurate prima di eseguire il comando.
- Il comando 'build' genera la build e imposta la directory .git per la cartella dist.
- Il comando 'deploy' legge la versione dal package.json e la usa per il commit.
- Il comando 'update-version' incrementa l'ultima cifra della versione nel package.json.
- Il comando 'all' esegue tutti i comandi in sequenza."
        exit 1
        ;;
esac
