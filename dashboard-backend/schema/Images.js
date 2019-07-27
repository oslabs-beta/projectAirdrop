cube(`Images`, {
  sql: `SELECT * FROM public.images`,
  
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
    imageUrl: {
      sql: `image_url`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
