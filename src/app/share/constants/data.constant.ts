export var MENU_GENERAL = [
    {
        label: 'HOME',
        command: (event: any) => {
        }
    },
    {
        label: 'Learning'
    },
    {
        label: 'SeleniumLibrary',
        items: [
            {
                label: 'Open Browser'
            },
            {
                label: 'Open Browser2'
            },
            {
                label: 'Open Browser3'
            }
        ]
    },
    {
        label: 'BuiltIn',
        items: [
            {
                label: 'Convert To String'
            },
            {
                label: 'Run Keyword If',
                url: '/admin/run-keyword-if'
            },
            {
                label: 'Other'
            }
        ]
    },
    {
        label: 'Example',
        url: '/admin/example'
    }
];

export var MENU_ADMIN = [
    {
        label: 'HOME',
        command: (event: any) => {
        }
    },
    {
        label: 'Learning'
    },
    {
        label: 'SeleniumLibrary',
        items: [
            {
                label: 'Open Browser'
            },
            {
                label: 'Open Browser2'
            },
            {
                label: 'Open Browser3'
            }
        ]
    },
    {
        label: 'BuiltIn',
        items: [
            {
                label: 'Convert To String'
            },
            {
                label: 'Run Keyword If',
                url: '/admin/run-keyword-if'
            },
            {
                label: 'Other'
            }
        ]
    },
    {
        label: 'Example',
        url: '/admin/example'
    }
];

export var MENU_USER = [
    { label: 'View', icon: '' },
    { label: 'Edit', icon: '' },
    {
        label: 'Sign Out', routerLink: ['/login'],
        // command: (event: any) => {
        // }
    }
];