import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
/** Has to be  a class component because this has to store the state value of the menu items that we want to pass and create menu items with. */

class Directory extends React.Component{

    constructor(){
        super();

        this.state = {
            section: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    /** this.state.section.map(section=>(   we can do this or destructure it so that we do not have to use 'section.' to call every element of section
                        <MenuItem title={section.title}/>
                    ))*/

                    // this.state.section.map(({title, imageUrl, id, size, linkUrl}) => 
                    // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}  />
                    // )
                    //Other way of doing the above statement is using otherSectionProps since the names of parameters are same as state section params
                    // for eg title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}

                    this.state.section.map(({id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;