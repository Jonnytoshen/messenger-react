import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/icon';
import Input from '../../components/input';
import PageHeader from '../../components/page-header';
import Avatar from '../../components/avatar';
import { Friend } from '../../models/Friend';
import './Chats.scss';

export interface ChatsState {
  favourites: Friend[];
}

class Chats extends React.Component<{}, ChatsState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      favourites: [
        {
          id: '1111',
          name: 'William',
          avatar: 'https://themes.2the.me/Messenger-1.1/demo-light/assets/images/avatars/2.jpg',
          status: 'online'
        },
        {
          id: '2222',
          name: 'Simon',
          avatar: 'https://themes.2the.me/Messenger-1.1/demo-light/assets/images/avatars/3.jpg',
          status: 'online'
        },
        {
          id: '3333',
          name: 'Thomas',
          avatar: 'https://themes.2the.me/Messenger-1.1/demo-light/assets/images/avatars/4.jpg',
          status: 'online'
        },
        {
          id: '4444',
          name: 'Zane',
          avatar: 'https://themes.2the.me/Messenger-1.1/demo-light/assets/images/avatars/5.jpg',
          status: 'online'
        },
        {
          id: '5555',
          name: 'Thomas',
          avatar: 'https://themes.2the.me/Messenger-1.1/demo-light/assets/images/avatars/6.jpg',
        }
      ]
    };
  }

  render() {
    const suffix = <Icon type="search" size="small" />
    return (
      <div className="chats">
        <PageHeader title="Chats" />
        <Input placeholder="Search for messages or users..." size="large" suffix={suffix} />

        {this.renderFavourites()}
      </div>
    );
  }

  private chatLinkBuilder(id?: string): string {
    return `/chats/${id}`;
  }

  private renderFavourites(): React.ReactNode {
    const { favourites } = this.state;
    const favouriteItmes = favourites.map(({ id, name, avatar, status }) => 
      <Link 
      className="chats-favourites-item"
      to={this.chatLinkBuilder(id)}
      key={id}
      >
        <Avatar 
        className="chats-favourites-item-avatar"
        src={avatar}
        title={name}
        status={status}
        showDot={ status === 'offline' || status === 'online' }
        size="small"
        ></Avatar>
        <span className="chats-favourites-item-title">{name}</span>
      </Link>
    );
    return favourites.length > 0
      ? (
        <div className="chats-favourites">
          {favouriteItmes}
        </div>
      )
      : null;
  }
}

export default Chats;