import { FC } from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';
import { ITableProps } from './types';

export const Table:FC<ITableProps> = (props) => {

  const {
    children,
  } = props

  return (
    <BootstrapTable striped bordered hover responsive>
      {children}
    </BootstrapTable>
  )

}