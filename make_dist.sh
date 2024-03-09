#!/bin/sh
npm run build
echo "gitdir: $PWD/.git/worktrees/dist" > ./dist/.git