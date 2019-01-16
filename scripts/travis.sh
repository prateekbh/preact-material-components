#!/bin/bash

# Build sources
if [[ "${1}" == "build" ]]
then
    set -ev
    yarn build
    set +ev
fi

# Lint sources
if [[ "${1}" == "lint" ]]
then
    set -ev
    yarn lint
    set +ev
fi

# Tests for docs
if [[ "${1}" == "docs" ]]
then
    set -ev
    yarn build
    cd packages/docs
    yarn test:travis
    set +ev
fi
