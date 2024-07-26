
import React from 'react';
import { Menubar } from 'primereact/menubar'
import { Badge } from 'primereact/badge'
import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Collections',
        },
        {
            label: 'Men',
        },
        {
            label: 'Women',
        },
        {
            label: 'About',
        },
        {
            label: 'Contact',
            badge: 3,
            template: itemRenderer
        }
    ];

    const start = <img alt="logo" src="./logo.svg" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2 pt-8 pb-12">
            <Button icon="pi pi-shopping-cart" rounded text severity="secondary" aria-label="Bookmark" />
            <Avatar image="./image-avatar.png" shape="circle" className='size-12 ' />
        </div>
    );

    return (
        <div className="card bg-white">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        