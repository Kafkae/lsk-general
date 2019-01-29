import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Badge } from 'antd';
import TuneIcon from 'react-icons2/mdi/tune';
import { contextToProps } from './ListContext';

@contextToProps('List')
@inject('listStore')
@observer
class FilterButton extends Component {
  render() {
    const {
      List, listStore,
    } = this.props;

    return (
      <React.Fragment>
        <Badge count={listStore.hasFilter ? 1 : 0}>
          {/* <Badge count={Object.keys(listStore.filter).length}> */}
          <List.Button
            icon={<TuneIcon />}
            paint="primary"
            view="text"
            size="large"
            bordered={listStore.showFilter}
            onClick={listStore.toggleFilter}
          >
            Фильтр
          </List.Button>
        </Badge>
      </React.Fragment>
    );
  }
}

export default FilterButton;
