import React from 'react';
import { Table, Row, Cell, InlineList } from '../design/UI';

class Footer extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      data: 'testing'
    };
  }

  render(){
    return <footer>

      <Table>
        <Row>
          <Cell>This is an Item</Cell>
          <Cell>This is an Item</Cell>
        </Row>
      </Table>

      <InlineList
        data={
          ["I'm an item", "and I'm another item"]
        }
      />

    </footer>
  }

}

export default Footer;
