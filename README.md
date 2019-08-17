# KATA WeManity #

## Introduction ##
Here is the KATA asked by Wemanity in order to perform recruitment process for Houtekiet Yves.

[KATA Instruction file](https://github.com/hktsme/kata-wemanity/blob/master/katawemanity.pdf)

****
## Prerequisites ##

Please be sure all needed prerequisites are installed on your machine :

* [NodeJS v10.16.2](https://nodejs.org) 
* NPM v6.9.0 (which will be installed with NodeJS)
* [MySQL v8.0.13](https://downloads.mysql.com/archives/get/file/mysql-8.0.13-winx64.zip)
* [Git SCM](https://github.com/git-for-windows/git/releases/download/v2.22.0.windows.1/Git-2.22.0-64-bit.exe)

****
## Clone repository ##
Clone the repository in the desired folder

```
git clone https://github.com/hktsme/kata-wemanity.git <myfolder>
```

****
## Installation ##
Now we need to install all dependencies for API and Application to do so open a terminal in the folder where repository has been cloned and then :

```
cd server
npm i
cd ../app
npm i
```

** !! NOTE : Make sure all development dependencies are installed too **

****
## Initialize Database ##

We need to initialize two database 'katawemanity' and 'katawemanity_test' (last one is for test purposes). 
There is a SQL script @ [server/db.sql](https://github.com/hktsme/kata-wemanity/blob/master/server/db.sql) you need to perform in order to launch API.

** !! NOTE : Make sure you don't have any databases with the same name ! The script will drop them ! **

****
## Run ##
First we need to start API :

```
cd server
npm run watch
```

With this command we build our TS code into JS and it will automatically rebuild when there is change on our TS code

```
npm run serve
```

Then we start our API with Node.

Now our API is listening on port 3000.

After that we can simply start our Angular application 

```
npm run start
```

Our Angular application is available @ http://localhost:4200

** !! NOTE : Don't start Angular application with 'ng serve' because we need proxy configuration to be effective ! **

****