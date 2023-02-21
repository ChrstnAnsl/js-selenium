#!/bin/sh

test_tag=$1

if [[ $test_tag == '' ]]; then
    tags_set=$tags_set
    printf "No test tag is set.\nRunning all test.."
else
    tags_set=$tags_set
fi

mocha -g "${tags_set}" --no-timeouts 'src/' -R xunit | grep "<" > reports/mocha.xml
