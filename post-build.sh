#!bin/bash

# Output colors
###################

RED='\033[00;31m'
PURPLE='\033[00;35m'
GREEN='\033[00;49m'
BLUE='\033[00;34m'
YELLOW='\033[00;33m'

GRAY_BG='\033[00;40m'
RED_BG='\033[00;41m'
GREEN_BG='\033[00;42m'
YELLOW_BG='\033[00;43m'
BLUE_BG='\033[00;44m'
PURPLE_BG='\033[00;45m'

NC='\033[00;37m'
NOCOLOR=$(tput sgr0)

#---------------------

# Actual code
###################

ENV_ARG=${1:-prod}
TARGET_ENV_FILE=''

if [ $ENV_ARG = 'prod' ]
then
    printf "${NC}\n Replacing placeholder with ${BLUE}Production${NC} code"
    TARGET_ENV_FILE="src/environments/environment.ts"
elif [ $ENV_ARG = 'dev' ]
then
    printf "${NC}\n Replacing placeholder with ${RED}Development${NC} code"
    TARGET_ENV_FILE="src/environments/environment.prod.ts"
else
    printf "${RED}\n Unknown target environment: ${YELLOW}${ENV_ARG}${NC}"
    exit 1
fi

# 1. Getting the key from the ENV file
GTM_CODE=$(grep -Po "gtmCode: *\K'[^']*'" ${TARGET_ENV_FILE} | sed "s/'//g")

# 2. Replacing the key inside dist/index.html
sed -i "s/FAKE_GTM_CODE/"$GTM_CODE"/g" dist/index.html

printf "${GRAY_BG}\n${NC}"
printf "${YELLOW}\n 1. Google Tag Manager Code Replacement \n${NC}"
printf "${NC}\n     - Will replace the key ${GREEN}${GTM_CODE}${NC} inside ${BLUE_BG}dist/index.html${NC}"
printf "\n     - ..."
printf "${NC}\n     ${GREEN}- Done${NC}"
printf "${GRAY_BG}\n${NC}"

#---------------------

echo ${ENV}