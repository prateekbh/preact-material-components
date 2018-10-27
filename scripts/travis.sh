#!/bin/bash

# Tests for main sources
if [ "${TEST}" == "main" ]
then
    set -ev
    yarn build
    yarn test
fi

# Tests for docs
if [ "${TEST}" == "docs" ]
then
    set -ev
    yarn build
    cd packages/docs
    yarn test:travis
fi
exit
