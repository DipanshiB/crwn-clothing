import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections : [
                {
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80.jpg',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg',
                    id: 2,
                    linkUrl: 'jackets'
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80.jpg',
                    id: 3,
                    linkUrl: 'shoes'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'mens'
                }]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                )}
            </div>
        )
    }
}

export default Directory;