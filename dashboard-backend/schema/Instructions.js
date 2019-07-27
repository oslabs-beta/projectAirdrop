cube(`Instructions`, {
  sql: `SELECT * FROM public.instructions`,
  
  joins: {
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
    instructionText: {
      sql: `instruction_text`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    isPractice: {
      sql: `is_practice`,
      type: `string`
    }
  }
});
