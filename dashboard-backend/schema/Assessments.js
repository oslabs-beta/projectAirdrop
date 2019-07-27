cube(`Assessments`, {
  sql: `SELECT * FROM public.assessments`,
  
  joins: {
    Users: {
      sql: `${CUBE}.user_id = ${Users}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstName, id, lastName, middleInitial, dateNow, lastDeployedDate]
    }
  },
  
  dimensions: {
    mos: {
      sql: `mos`,
      type: `string`
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    rank: {
      sql: `rank`,
      type: `string`
    },
    
    middleInitial: {
      sql: `middle_initial`,
      type: `string`
    },
    
    dateNow: {
      sql: `date_now`,
      type: `string`
    },
    
    yearsInSpecialOps: {
      sql: `years_in_special_ops`,
      type: `string`
    },
    
    yearsInService: {
      sql: `years_in_service`,
      type: `string`
    },
    
    lastDeployedDate: {
      sql: `last_deployed_date`,
      type: `string`
    }
  }
});
