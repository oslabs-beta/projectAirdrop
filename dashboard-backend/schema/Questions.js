cube(`Questions`, {
  sql: `SELECT * FROM public.questions`,
  
  joins: {
    Images: {
      sql: `${CUBE}.image_id = ${Images}.id`,
      relationship: `belongsTo`
    },
    
    Sections: {
      sql: `${CUBE}.section_id = ${Sections}.id`,
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
    },
    
    questionText: {
      sql: `question_text`,
      type: `string`
    }
  }
});
