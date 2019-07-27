cube(`Choices`, {
  sql: `SELECT * FROM public.choices`,
  
  joins: {
    Questions: {
      sql: `${CUBE}.question_id = ${Questions}.id`,
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
    correctChoice: {
      sql: `correct_choice`,
      type: `string`
    },
    
    choice4: {
      sql: `choice4`,
      type: `string`
    },
    
    choice3: {
      sql: `choice3`,
      type: `string`
    },
    
    choice1: {
      sql: `choice1`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    choice2: {
      sql: `choice2`,
      type: `string`
    }
  }
});
