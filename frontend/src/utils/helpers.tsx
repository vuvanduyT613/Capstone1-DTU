import React from 'react';
import { TAGS } from 'utils/constant.js';

export const loading = () => {
  return <div className="loading" />;
};

export const getOffsetByPageNumber = (page, PAGE_SIZE = 12) => (Number(page) - 1) * PAGE_SIZE;

export const formatDataTagList = tags => {
  return tags.map(item => {
    // using for TagList component
    switch (item) {
      case 1:
        return { id: TAGS.NEW, isNew: true, text: 'New' };
      case 2:
        return { id: TAGS.HOT, isHot: true, text: 'Hot' };
      default:
        return item;
    }
  });
};
