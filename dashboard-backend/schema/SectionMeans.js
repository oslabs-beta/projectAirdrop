cube(`SectionMeans`, {
  sql: `SELECT * FROM public.section_means`,
  
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
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
