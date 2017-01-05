<<<<<<< HEAD
Ext.define('Carto.sql.CartoTable', {
    extend: 'Carto.sql.CartoSql',
=======
Ext.define('CartoDb.sql.CartoTable', {
    extend: 'CartoDb.sql.CartoSql',
>>>>>>> a9c1ae3784a060adeb2dde7ac8146ea0d7c88ef2

    isCartoTable: true,

    config: {
        name: '',
        alias: ''
    },

    decode: function(config) {
        if (typeof config === 'string') {
            if (/\s/.test(this.stripEnds(config))) {
                config = {sql: config};
            } else {
                config = {name: config};
            }
        }
        return config;
    },

    createSql: function() {
        var name = this.getName(),
            alias = this.getAlias();
        this.setSql(name + (alias ? ' AS ' + alias : ''));
    },

    parseSql: function(sql) {
        var parseSql = this.stripEnds(sql).split(/\s/),
            len = parseSql.length;
        if (len > 1) {
            this.setAlias(parseSql[len-1]);
        } else {
            this.setName(parseSql[0]);
        }
    },

    getId: function() {
        return this.getAlias() || this.getName();
    }
});