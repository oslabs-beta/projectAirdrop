cube(`PracticeImages`, {
  sql: `SELECT * FROM public.practice_images`,
  
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
    choice3: {
      sql: `choice3`,
      type: `string`
    },
    
    choice2: {
      sql: `choice2`,
      type: `string`
    },
    
    choice4: {
      sql: `choice4`,
      type: `string`
    },
    
    correctChoice: {
      sql: `correct_choice`,
      type: `string`
    },
    
    imageUrl: {
      sql: `image_url`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    questionText: {
      sql: `question_text`,
      type: `string`
    },
    
    choice1: {
      sql: `choice1`,
      type: `string`
    }
  }
});
