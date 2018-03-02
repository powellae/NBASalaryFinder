#Makefile for Project2: Parsing XML

USER = powellae

CC = g++

CFLAGS = -std=c++11

RM = /bin/rm -f

all: PutFiles

PutFiles:
		cp project2.html /var/www/html/class/softdev/$(USER)/Project2/
		cp project2.js  /var/www/html/class/softdev/$(USER)/Project2/
		cp project2.css  /var/www/html/class/softdev/$(USER)/Project2/
		cp project2.xml /var/www/html/class/softdev/$(USER)/Project2/
		
		echo "Current contents of your HTML directory"
		ls -l /var/www/html/class/softdev/$(USER)/Project2