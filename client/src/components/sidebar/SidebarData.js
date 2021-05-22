import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Components',
        path: '/components',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        
        subNav: [
            {
                title: "Buttons",
                path: '/components/buttons',
                icon: <FaIcons.FaClipboardCheck />
            },
            {
                title: "Cards",
                path: '/components/cards',
                icon: <FaIcons.FaClipboardCheck />
            },
            {
                title: "Spinners",
                path: '/components/spinners',
                icon: <FaIcons.FaClipboardCheck />
            },
            {
                title: "Forms",
                path: '/components/buttons',
                icon: <FaIcons.FaClipboardCheck />
            }
        ]
    },

    {
        title: 'Code',
        path: '/code',
        icon: <AiIcons.AiFillHome />,
    },

    {
        title: 'Save',
        path: '/save',
        icon: <AiIcons.AiFillHome />,
    },

    {
        title: 'Notes',
        path: '/notes',
        icon: <AiIcons.AiFillHome />,
    },

    {
        title: 'Quiz',
        path: '/quiz',
        icon: <AiIcons.AiFillHome />,
    }
];