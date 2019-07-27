cube(`VpsResponses`, {
  sql: `SELECT * FROM public.vps_responses`,
  
  joins: {
    Assessments: {
      sql: `${CUBE}.assessment_id = ${Assessments}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
