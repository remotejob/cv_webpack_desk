module.exports = {
		  path: 'contacts.html',
				
//		  getChildRoutes(location, cb) {
//		    require.ensure([], (require) => {
//		      cb(null, [
//		        require('./routes/MoreDetails')
//	
//		      ])
//		    })
//		  },

		  getComponents(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, 
		    		  require('./components/Contacts')
		    		  
		      )
//		        cb(null,{
//		        	chat: require('./components/Chat'),
//		        	main: require('./components/Details'),
//		        	objlist: require('./components/ObjList')
//		        })
		    })
		  }
		}