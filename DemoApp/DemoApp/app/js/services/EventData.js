eventsApp.factory('eventData', function(){
    return{
        event: {
            name: 'Angular Title',
            date: '1/1/2015',
            time: '10:30',
            location:{
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directive Masterclass',
                    creatorName:'John Rambo',
                    duration: 1,
                    level:'Introductory',
                    abstract:'Description of the sesion',
                    upVoteCount:0
                },
                {
                    name: 'Scopes and Other Stuff',
                    creatorName:'John Rambo',
                    duration: 2,
                    level:'Introductory',
                    abstract:'Description of the sesion',
                    upVoteCount:0
                },
                {
                    name: 'Controllers Classes',
                    creatorName:'John Rambo',
                    duration: 3,
                    level:'Introductory',
                    abstract:'Description of the sesion',
                    upVoteCount:0
                }
            ]
        }
    };
});