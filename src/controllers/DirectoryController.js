'use strict'

const service = require('../services/DirectoryService');

module.exports = class DirectoryController{

    static getListing(req,res){

        const params = req.query;
        const path = params.path;

        if (path === undefined || path === '')
            return res.status(422).send({message: 'Please provide a valid directory path'})

        try{

            const listing = service.getFiles(path,
                params.paginate !== undefined ? params.paginate : false,
                params.start !== undefined && params.start > 0 ? params.start : 0,
                params.per_page !== undefined && params.per_page > 0 ? params.per_page : 0,
            );

            return res.status(200).json(listing);

        }catch (e) {
            return res.status(500).send({message: 'Error listing files, please check the path and try again'});
        }

    }

}