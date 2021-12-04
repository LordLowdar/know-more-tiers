const initialData = {
    interests: {
        'interest-1': { id: 'interest-1', content: 'Sports' },
        'interest-2': { id: 'interest-2', content: 'Video Games' },
        'interest-3': { id: 'interest-3', content: 'Crafting' },
        'interest-4': { id: 'interest-4', content: 'Outdoor Activities' },
        'interest-5': { id: 'interest-5', content: 'Anime' },
        'interest-6': { id: 'interest-6', content: 'K-Dramas' },
        'interest-7': { id: 'interest-7', content: 'Writing' },
        'interest-8': { id: 'interest-8', content: 'K-Pop' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Choose Your Interests',
            interestId: ['interest-1', 'interest-2', 'interest-3', 'interest-4', 'interest-5', 'interest-6', 'interest-7', 'interest-8'],
            rows: [],
        },
        'column-2': {
            id: 'column-2',
            title: 'Create Your Tier List',
            interestId: [],
            rows: [
                {
                    id: 's-tier',
                    interestId: []
                },
                {
                    id: 'a-tier',
                    interestId: []
                },
                {
                    id: 'b-tier',
                    interestId: []
                },
                {
                    id: 'c-tier',
                    interestId: []
                },
                {
                    id: 'd-tier',
                    interestId: []
                },
            ]
        },
    },
    columnOrder: ['column-1', 'column-2'],
}

export default initialData;
