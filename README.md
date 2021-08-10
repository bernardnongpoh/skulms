## Open Source School Management System 

[![SkulMS CI](https://github.com/bernardnongpoh/skulms/actions/workflows/staging.yml/badge.svg?branch=staging)](https://github.com/bernardnongpoh/skulms/actions/workflows/staging.yml)



### Technology Stack
- KeyStoneJS 6 
- Postgres
- Docker

Step 1: Create a Development Environment with Docker and CI/CD deployment for AWS EC2 Instance. 
Step 2: Push your first changes to the the github and test CI/CD
Step 3: Create Admin user having the following capability
- Role (CRUD)
- Create User of Specific Role
- User can have multiple roles
- Admin can assign role to user. 
- Login page different for user role.


BrainStrom, the examination Section and Academic Year concept. We need to have a state based system, where student transition to next state if promoted.



1. Docker The Application 

 Create a DockerFile which will take care the keystone project.


- KeyStone Dockerfile 
    Working now with this file 
- Docker-Compose 
    Configure Database with postgres

    

- Installing docker-compose 


Then to launch dev environment :

docker-compose  -f docker-compose.yml -f docker-compose.dev.yml up    



For prod environment :

docker-compose  -f docker-compose.yml -f docker-compose.prod.yml up  


Hot reloading not working for KeyStoneJS, I am not sure how to do it. 

- Cleaning and CI/CD for amazon server. EC instance. 


- 


Development on Container, Currently Watching file is not working for keystone, I need to restart the server. 

OK file.

- Everypush to the repo the staging branch, deploy it to stage machine. 
- 


Github Actions 

- When ever I push code to Github, The action will trigger to build the image and push to dockerhub. 
- Github Action will notify aws to pull new image and restart the server with the new one. 

Two branch in the repo 
- prod branch - Push to docker hub from pull request from staging. 
- dev branch - No need to push to docker hub
- staging - Testing for Carl


Workflow: 
- Development under dev branch and then pull request to the staging and finally pulling request to the production branch
- Github actions for building docker images on merge staging which will psuh to dockerhub with tag :staging. Similarly for production merged, the action will create an image and push to production tag. 


# Script for Staging


1. Pull Repo for staging branch
2. Build docker image
3. Push to dockerhub
4. Login to ec2 instance
5. Stop the docker instance
6. Pull the latest one 
7. Restart the docker 


## In the server 

docker-compose stop
docker-compose rm -f
docker-compose -f docker-compose.yml up -d


# Production Server Will not have database, we to run migration for this


# Sync Data From Production to Dev By Pulling for server. 
1. Expose port in server 
2. Script to Sync Data from Staging and Production Server. 
3. Run Migration and Deploy new image to server. 


