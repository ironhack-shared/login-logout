const express = require('express');
const _ = require('lodash');
const simpleCrud = require('./genericCRUD');

const extendedCrud = (Model) => {
    return simpleCrud(Model, router => {
        router.delete('/:id',(req,res,next) => {
            //.....
        });
    });
}


module.exports = extendedCrud;


