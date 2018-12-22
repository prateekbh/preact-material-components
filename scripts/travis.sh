#!/bin/bash

# Build sources
if [[ "${1}" == "build" ]]
then
    set -ev
    yarn build
    set
fi

# Lint sources
if [[ "${1}" == "lint" ]]
then
    set -ev
    yarn lint
    set
fi

# Tests for docs
if [[ "${1}" == "docs" ]]
then
    set -ev
    yarn build
    cd packages/docs
    yarn install --frozen-lockfile --non-interactive --emoji
    yarn test:travis
    set
fi
