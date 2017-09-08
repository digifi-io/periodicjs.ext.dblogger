'use strict';
const periodic = require('periodicjs');

function getIndexTableFields() {
  const reactAppLocals = periodic.locals.extensions.get('periodicjs.ext.reactapp');
  const data_tables = reactAppLocals.manifest.table.data_tables;
  return {
    dblog_logger: [
      data_tables.tableField({
        title: 'ObjectId',
        link: true,
        field: '_id',
        headerStyle: {
          maxWidth: 150,
        },
        columnStyle: {
          maxWidth: 150,
        },
      })({ schemaName: 'dblog_logger', }),
      data_tables.tableCreatedDate({}),
      data_tables.tableField({
        title: 'Hostname',
        field: 'hostname',
        // headerStyle: {
        //   maxWidth: 150,
        // },
        // columnStyle: {
        //   maxWidth: 150,
        // },
      })({ schemaName: 'dblog_logger', }),
      data_tables.tableField({
        title: 'Level',
        field: 'level',
        
        // headerStyle: {
        //   maxWidth: 150,
        // },
        // columnStyle: {
        //   maxWidth: 150,
        // },
      })({ schemaName: 'dblog_logger', }),
      data_tables.tableField({
        title: 'Message',
        field: 'msg',
        headerStyle: {
          maxWidth: 150,
          // overflow: 'hidden',
          // textOverflow: 'ellipsis',
        },
        columnStyle: {
          maxWidth: 150,
          // overflow: 'hidden',
          // textOverflow: 'ellipsis',
        },
      })({ schemaName: 'dblog_logger', }),
      data_tables.tableOptions({ schemaName: 'dblog_logger', }),
    ],
  };
}

function setReactAppTable() {
  periodic.settings.extensions['periodicjs.ext.reactapp'].data_tables = Object.assign({},  periodic.settings.extensions['periodicjs.ext.reactapp'].data_tables, getIndexTableFields());
}

module.exports = {
  getIndexTableFields,
  setReactAppTable,
};