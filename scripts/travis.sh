#!/bin/bash

set -ev
if [ "${TEST}" == "main" ]
then
    yarn install --frozen-lockfile
    yarn build
    yarn test
else
    yarn install --frozen-lockfile
    yarn build
    cd docs
    yarn install --frozen-lockfile
    yarn test:travis
fi
exit
