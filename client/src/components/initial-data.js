const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Sports' },
        'task-2': { id: 'task-2', content: 'Video Games' },
        'task-3': { id: 'task-3', content: 'Crafting' },
        'task-4': { id: 'task-4', content: 'Outdoor Activities' },
        'task-5': { id: 'task-5', content: 'Sports' },
        'task-6': { id: 'task-6', content: 'Video Games' },
        'task-7': { id: 'task-7', content: 'Crafting' },
        'task-8': { id: 'task-8', content: 'Outdoor Activities' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Choose Your Interests',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8']
        },
        'column-2': {
            id: 'column-2',
            title: 'Create Your Tier List',
            taskIds: [],
        },
    },
    columnOrder: ['column-1', 'column-2'],
}

export default initialData;
