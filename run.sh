#!/bin/env bash

tags_input=$2

if [[ -z "$tags_input" ]]; then
    tags_set='~@ignore'
else
    tags_set=$tags_input
fi

 mocha src/ --no-timeouts --reporter mochawesome -g $tags_set