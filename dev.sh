#!/bin/sh

build() {
    npm run build
    echo "gitdir: $PWD/.git/worktrees/dist" > ./dist/.git
}

# __ Main __
case "$1" in
    build)
        build
        ;;
    *)
        echo "Utilizzo: $0 {build}

Comandi disponibili:
  build                      Compila il progetto utilizzando npm.

Esempi:
  $0 build                   # Esegue la compilazione del progetto.

Note:
- Assicurarsi di avere npm installato e le dipendenze configurate prima di eseguire il comando.
- Il comando 'build' genera la build e imposta la directory .git per la cartella dist."

        exit 1
        ;;
esac