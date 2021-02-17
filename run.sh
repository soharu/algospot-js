#!/usr/bin/env bash

upper() {
    echo $(echo ${@%.js} | tr '[:lower:]' '[:upper:]')
}

lower() {
    echo $(echo $1 | tr '[:upper:]' '[:lower:]')
}

run_js() {
    name=$(lower $1)
    printf "%s\n" "$(node source/$1.js < data/$1.in)"
}

if [[ $# == 0 ]]; then
    echo "Usage: $0 {problem_id}"
    exit 1
fi

if [[ $# == 2 ]] && [[ $2 == "--diff" ]]; then
    diff_enabled=true
fi

problem_ids="$(ls source | sed 's/\.js$//')"
problem_id=$(lower $1)

if [[ ${problem_id} == "all" ]]; then
    sources=${problem_ids}
else
    sources=($problem_id)
fi

for name in ${sources}; do
    echo -e "\n>>> Run $(upper $name)"
    if [[ ${diff_enabled} == true ]]; then
        echo $(run_js $name | diff data/${name}.out -)
    else
        run_js $name
    fi
done
