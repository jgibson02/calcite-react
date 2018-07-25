import PropTypes from 'prop-types';
import React from 'react';
import { StyledCrumb, StyledSpanCrumb } from './Breadcrumbs-styled';
import { BreadcrumbsContext } from './Breadcrumbs';

const Crumb = ({ children, href, hasLink, ...other }) => {
  let Crumb = StyledSpanCrumb;

  if (href || hasLink) {
    Crumb = StyledCrumb;
  }

  return (
    <BreadcrumbsContext.Consumer>
      {({ breadcrumbsContext }) => (
        <Crumb {...breadcrumbsContext} {...other} href={href}>
          {children}
        </Crumb>
      )}
    </BreadcrumbsContext.Consumer>
  );
};

Crumb.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  white: PropTypes.bool,
  /** Description TBD */
  href: PropTypes.string
};

Crumb.defaultProps = {};

export default Crumb;
