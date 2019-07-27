cube(`LtvrResponses`, {
  sql: `SELECT * FROM public.ltvr_responses`,
  
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
    userWord: {
      sql: `user_word`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    isCorrect: {
      sql: `is_correct`,
      type: `string`
    }
  }
});
