cube(`Sections`, {
  sql: `SELECT * FROM public.sections`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [sectionDisplayName, sectionName, id]
    }
  },
  
  dimensions: {
    sectionDisplayName: {
      sql: `section_display_name`,
      type: `string`
    },
    
    sectionName: {
      sql: `section_name`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
