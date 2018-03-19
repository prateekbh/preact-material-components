#!/bin/bash

SUBFOLDERS=("docs")
SUBFOLDER=$1

function test {
    set -ev
    npm install
    npm run build
    cd $TRAVIS_BUILD_DIR/$SUBFOLDER
    npm install
    
    if npm run | grep test:travis > /dev/null
    then
        npm run test:travis
    else
        npm test
    fi
    exit
}

if [ "$TRAVIS_PULL_REQUEST" != "false" ]
then
    TRAVIS_COMMIT_RANGE="FETCH_HEAD..$TRAVIS_BRANCH"
fi

CHANGES=$(git --no-pager diff --name-only $TRAVIS_COMMIT_RANGE)

# If .travis.yml or scripts/travis.sh changed, run all tests
if echo $"$CHANGES" | grep -qE "^(\.travis\.yml|scripts\/travis\.sh)$"
then
    test
fi

# If no subfolder, check if anything else than a subfolder has changed
if [ -z "$1" ]
then
    for DIR in ${SUBFOLDERS[@]}
    do
        CHANGES=$(echo "$CHANGES" | grep -v "^$DIR/")
    done

    if [ ! -z "$CHANGES" ]
    then
        test
    fi

# If there is a subfolder, only run tests if said folder has changes
elif echo "$CHANGES" | grep -q "^$SUBFOLDER/"
then
    test
fi

# always run tests for docs
if [ $1 == "docs" ]
then
    test
fi

echo "Nothing has changed, no need to run tests."
