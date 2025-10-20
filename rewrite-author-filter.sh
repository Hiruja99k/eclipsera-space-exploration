#!/bin/sh

OLD_EMAIL="224893989+orchids-app[bot]@users.noreply.github.com"
OLD_NAME="orchids-app[bot]"
CORRECT_NAME="Hiruja99k"
CORRECT_EMAIL="hiruja99k@gmail.com"

if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ] || [ "$GIT_AUTHOR_NAME" = "$OLD_NAME" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi

if [ "$GIT_COMMITTER_EMAIL" = "noreply@github.com" ] || [ "$GIT_COMMITTER_NAME" = "GitHub" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
