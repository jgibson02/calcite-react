import PropTypes from 'prop-types';
import React, { createContext } from 'react';
import { StyledTable } from './Table-styled';

const TableContext = createContext({
  tableContext: {
    blue: undefined,
    striped: undefined,
    plain: undefined,
    noTable: undefined,
    justified: undefined,
    noCol: undefined,
    noRow: undefined
  }
});

const Table = ({
  children,
  blue,
  striped,
  plain,
  noTable,
  justified,
  noCol,
  noRow,
  ...other
}) => {
  const tableContext = {
    blue,
    striped,
    plain,
    noTable,
    justified,
    noCol,
    noRow
  };

  // const childArray = React.Children.toArray(children);
  // const childrenWithProps = childArray.map((child, i) => {
  //   switch (getChildType(child)) {
  //     case TableBody:
  //       return React.cloneElement(child, {
  //         blue,
  //         striped,
  //         plain,
  //         noTable,
  //         justified,
  //         noCol,
  //         noRow
  //       });
  //     case TableHeader:
  //       return React.cloneElement(child, {
  //         blue,
  //         plain,
  //         noTable,
  //         justified,
  //         noCol,
  //         noRow
  //       });
  //     default:
  //       return child;
  //   }
  // });

  return (
    <TableContext.Provider value={{ tableContext }}>
      <StyledTable
        blue={blue}
        plain={plain}
        noTable={noTable}
        noCol={noCol}
        noRow={noRow}
        {...other}
      >
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
};

Table.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  blue: PropTypes.bool,
  /** Description TBD */
  striped: PropTypes.bool,
  /** Description TBD */
  plain: PropTypes.bool,
  /** Description TBD */
  noTable: PropTypes.bool,
  /** Description TBD */
  justified: PropTypes.bool,
  /** Description TBD */
  noCol: PropTypes.bool,
  /** Description TBD */
  noRow: PropTypes.bool
};

Table.defaultProps = {};

export { Table as default, TableContext };
