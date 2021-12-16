# dir-file-lister

How to run the application
This application can be run in two ways

## 1. Running it locally on your computer

  # Pre-requisites
  Make sure you have [node](https://nodejs.org/en/download/) installed on your computer

  # Instructions
  1. Clone the repository unto your working directory
  2. Setup .env file if not available, edit the .env.default and save as .env in the root directory
  3. Run npm install to install all required packages
  4. Run npm start to spin up your application
  5. Your application is up and running! 

## 2. Running it using the containerized image

   # Pre-requisites
   Make sure you have [ docker ](https://docs.docker.com/get-docker/)  installed on your computer

  This docker image is a ubuntu build, hence the directory structure local to the app is ubuntu
  You can find the ubuntu directory structure [ here ](https://help.ubuntu.com/community/LinuxFilesystemTreeOverview)
  to help with testing some of the paths


  ## Instructions

  Run image: `docker run -p3000:3000 sansonroot/dir-lister`

  ## API Endpoint

  ```
  Method : GET
  Route : /api/dir
  ```

  Url Parameters : 
  | Parameter  | Type [ validation ] |
  | ------------- | ------------- |
  | path  | string [ required ]  |
  | paginate  | boolean [ optional ] |
  | start  | integer [ optional ] |
  | per_page  | integer [ optional ] |

  Here are some example api calls to make

  Call without Pagination
   > GET /api/dir?path=/root

  Call with Pagination
   > GET /api/dir?path=/root&paginate=true&per_page=2&start=0
