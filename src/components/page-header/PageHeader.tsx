import React from 'react';
import './PageHeader.scss';

export interface PageHeaderProps {
  title: string
}

class PageHeader extends React.Component<PageHeaderProps> {
  render() {
    return (
      <div className="page-header">
        <h2 className="page-header-title">{this.props.title}</h2>
      </div>
    );
  }
}

export default PageHeader;