#!/bin/bash

sort -u -t',' -k2,2 /home/socialmaps_logs/tweets.txt >> /home/socialmaps_logs/tweets_new.txt

rm /home/socialmaps_logs/tweets.txt

mv /home/socialmaps_logs/tweets_new.txt /home/socialmaps_logs/tweets.txt

echo "`date`" >> /home/socialmaps_logs/log_sort.txt
