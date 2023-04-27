jwplayer("container").setup({

		    controls: true,
		    displaytitle: true,
		    fullscreen: "false",
		    primary: 'html5',
		  
		    

		    skin: {
		    	name: 'ZonAnime',
		    },


		     
		    captions: {
		        color: '#FFF',
		         fontSize: 14,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },

		  playlist: [
        ,
        //Begin Movies Truyen Ky Ly Tieu Long Tap 1
       {        
		    title: "",
		    description: "  ",
		    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6zdMCYNTJZ2L3P3ui4BvqQUWge5liCqvH4KeAcWUzcRmF0HVW-YgvaWJQvg7c_QZL4wT--aBX92a0qcDtlOoX4pIdQu0EG3sh4mdiT8PaZvSeuhlKhglqA-SdMVjD77ypCMJ935_qe55vd0meKNcZQ3kdNo2udERXhsmaCx0Qxjm5LFYtGJxMvQ/s600/f2d934dd72a424c25f9c208439a931ee.3.jpg",
		    sources: [{
		    file: "https://files.catbox.moe/i0z494.mp4",
		      label: '720p',
		      'type': 'mp4',
		      primary: 'html5',

		    }],
		    
		    
		 
		  }//end of movies
      ]
		});
jwplayer("container").setCaptions({
  "back": true,
  "backgroundOpacity": "32",
  "edgeStyle": "dropshadow",
  "fontSize": 14,
  "fontOpacity": 100,
  "fontScale": 0.05,
  "windowOpacity": 0,
  "color": "#ffff00"
});