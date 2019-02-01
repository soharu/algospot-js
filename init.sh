#!/usr/bin/env bash
if [ $# == 0 ]; then
    echo "Usage: $0 {problem_id}"
    exit 1
else
    name="$(echo $1 | tr '[A-Z]' '[a-z]')"
    touch source/${name}.js
    touch data/${name}.in
    touch data/${name}.out
    touch test/${name}-test.js
    ls */${name}*
fi