#!/bin/bash
set -e

SUBFOLDER=$1

if [ "$TRAVIS_PULL_REQUEST" != "false" ]
then
    TRAVIS_COMMIT_RANGE="FETCH_HEAD..$TRAVIS_BRANCH"
fi

CHANGES=$(git --no-pager diff --name-only $TRAVIS_COMMIT_RANGE)

if echo "$CHANGES" | grep -q "^$SUBFOLDER/"
then
    echo "yes"
else
    echo "no"
fi
