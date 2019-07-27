cube(`Users`, {
  sql: `SELECT * FROM public.users`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, username]
    }
  },
  
  dimensions: {
    isAdmin: {
      sql: `is_admin`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    pw: {
      sql: `pw`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    }
  }
});
