'use strict';

const AWS = require('aws-sdk');
const bluebird = require('bluebird');

class SpeciesDynamoDbRepository {

    constructor() {
        AWS.config.setPromisesDependency(bluebird);
        this.dataSource = new AWS.DynamoDB.DocumentClient();
        this.entityName = process.env.SPECIES_TABLE;
    }

    async store(species) {
        return await this.dataSource.put({
            TableName: this.entityName,
            Item: species,
        }).promise()
            .then(res => res);
    }

    async getAll() {
        return await this.dataSource.scan({
            TableName: this.entityName
        }).promise()
            .then(res => res.Items);
    }
}

module.exports = SpeciesDynamoDbRepository;
