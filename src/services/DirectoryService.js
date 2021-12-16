'use strict'

require('dotenv').config({path:'.env'})
const fs = require('fs');

module.exports = class DirectoryService {

    static getFiles (dir,paginate = false,start = 0,per_page = 0){

        let files_ = [];
        let files = fs.readdirSync(dir);
        let end = files.length;

        //apply default pagination to data if no pagination parameters are passed
        if (files.length > process.env.DEFAULT_THRESHOLD_LENGTH && !paginate){
            paginate = true;
            per_page = process.env.DEFAULT_PAGINATION_PER_PAGE;

        }else if (paginate && paginate.per_page > 0){
            //check if next chunk is still not the end of files
            end = start+per_page>files.length ? files.length : start+per_page;
        }


        for (let i = start; i <end; i++){

            let name = dir + '/' + files[i];

            const stat = fs.statSync(name);

            //only read files, leave out sub-directories
            if (stat !== undefined && stat.isFile()){

                files_.push({
                    path: name,
                    size: stat.size+' bytes',
                    properties: stat
                });

            }
        }

        if (paginate && per_page > 0){

            return {
                data: files_,
                pagination: {
                    current_page:start+1,
                    per_page: per_page,
                    next_page: end === files.length ? 0 : end,
                    last_page: files.length/per_page
                }
            }
        }

        return {
            data: files_
        }
    }

}