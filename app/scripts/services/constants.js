'use strict';
/**
 * Created with JetBrains WebStorm.
 * User: nolan
 * Date: 11/6/13
 * Time: 11:08 PM
 * To change this template use File | Settings | File Templates.
 */
function ConstantsService() {

    this.couchdb = {
        url : 'http://localhost:5984/block_stats'
    };
    this.pageSize = 10;
}

angular.module('ultimate-crossword').service('constants', [ConstantsService]);