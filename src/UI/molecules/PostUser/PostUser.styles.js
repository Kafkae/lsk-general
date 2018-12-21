import styled from 'react-emotion';
import { Avatar as AntAvatar, Icon as AntIcon } from 'antd';

import removeProps from '../../../utils/removeProps';
import createDynamicTag from '../../../utils/createDynamicTag';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const dynamicTagTitle = createDynamicTag('a');
export const Title = styled(dynamicTagTitle)`
  line-height: 1.625rem;
  font-size: 14px;
  margin: 5px 5px 5px 0;
  font-weight: 500;
  color: ${p => p.theme.ui.colors.darkGrey};
`;

export const Avatar = styled(AntAvatar)`
  margin-right: 12px;
`;

export const Subtitle = styled('span')`
  line-height: 1.625rem;
  font-size: 14px;
  margin: 5px 5px 5px 0;
  font-weight: 300;
  color: ${p => p.theme.ui.colors.grey600};
`;

const dynamicTagCategory = createDynamicTag('a');

const removedList = ['color'];

const filteredIcon = removeProps(AntIcon, removedList);
export const Icon = styled(filteredIcon)`
  color: ${p => (p.color || p.theme.ui.colors.grey600)};
  font-size: 12px;
`;

const filteredCategory = removeProps(dynamicTagCategory, removedList);
export const Category = styled(filteredCategory)`
  line-height: 1.625rem;
  font-size: 14px;
  margin: 5px 0 5px 5px;
  font-weight: 400;
  color: ${p => (p.color || p.theme.ui.colors.grey600)};
`;