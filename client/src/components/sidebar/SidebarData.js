import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as CgIcons from 'react-icons/cg'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Components',
        // path: '/components',
        icon: <CgIcons.CgComponents />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        
        subNav: [
            {
                title: "Buttons",
                path: '/components/buttons',
                icon: <RiIcons.RiRadioButtonLine />
            },
            {
                title: "Cards",
                path: '/components/cards',
                icon: <IoIcons.IoMdCard />
            },
            {
                title: "Spinners",
                path: '/components/spinners',
                icon: <FaIcons.FaSpinner />
            },
            {
                title: "Badges",
                path: '/components/badges',
                icon: <FaIcons.FaWpforms />
            }
        ]
    },

    {
        title: 'Code',
        path: '/code',
        icon: <AiIcons.AiOutlineCode />,
    },

    {
        title: 'Save',
        path: '/save',
        icon: <GiIcons.GiSaveArrow />,
    }
];