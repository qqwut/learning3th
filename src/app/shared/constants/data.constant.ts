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
                routerLink: '/admin/run-keyword-if'
            },
            {
                label: 'Other'
            }
        ]
    },
    {
        label: 'Example',
        routerLink: '/admin/example'
    }
];

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
                routerLink: '/general/run-keyword-if'
            },
            {
                label: 'Other'
            }
        ]
    },
    {
        label: 'Example',
        routerLink: '/general/example'
    }
];

export var MENU_USER = [
    { label: 'บทความของคุณ', routerLink: '/general/content/by-user' },
    { label: 'แก้ไขข้อมูลส่วนตัว', routerLink: '' },
    {
        label: 'Sign Out', routerLink: ['/login'],
        // command: (event: any) => {
        // }
    }
];