#!/usr/bin/env bash

channel=$1

if [[ "${channel}" == "rewrite" ]]; then
    version=$(curl -sX GET "https://api.github.com/repos/g0ldyy/comet/commits/rewrite" --header "Authorization: Bearer ${TOKEN}" | jq --raw-output '.sha')
else
    version=$(curl -sX GET "https://api.github.com/repos/g0ldyy/comet/releases/latest" --header "Authorization: Bearer ${TOKEN}" | jq --raw-output '. | .tag_name')
fi
printf "%s" "${version}"