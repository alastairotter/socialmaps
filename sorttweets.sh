#!/bin/bash

sort -u -t',' -k2,2 test.csv >> testnew.csv

rm test.csv

mv testnew.csv test.csv 
