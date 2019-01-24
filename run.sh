#!/usr/bin/env bash
if [ $# == 0 ]; then
    echo "Usage: $0 {problem_id}"
    exit 1
else
    name="$(echo $1 | tr '[A-Z]' '[a-z]')"
    node source/${name}.js < data/${name}.in
fi
