#!/usr/bin/env bash
if [ $# == 0 ]; then
    echo "Usage: $0 {problem_id}"
    exit 1
elif [ $# == 1 ]; then
    name="$(echo $1 | tr '[A-Z]' '[a-z]')"
    node source/${name}.js < data/${name}.in
elif [ $# == 2 ] && [ $2 == "--diff" ]; then
    name="$(echo $1 | tr '[A-Z]' '[a-z]')"
    node source/${name}.js < data/${name}.in | diff data/${name}.out -
fi
