cube(`ImageAndQuestionnaireResponses`, {
  sql: `SELECT * FROM public.image_and_questionnaire_responses`,
  
  joins: {
    Questions: {
      sql: `${CUBE}.question_id = ${Questions}.id`,
      relationship: `belongsTo`
    },
    
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
    userAnswer: {
      sql: `user_answer`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
