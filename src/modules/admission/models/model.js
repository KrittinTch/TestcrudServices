'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AdmissionSchema = new Schema({
    fullname: {
        type: String,
        required: 'Please fill a Admission name',
    },
    pid: {
        type: String,
        required: 'Please fill a Admission id',
    },
    telno: {
        type: String,
        required: 'Please fill a Admission telno',
    },
    
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

mongoose.model("Admission", AdmissionSchema);