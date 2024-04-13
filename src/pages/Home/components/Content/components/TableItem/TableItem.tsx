import { Accordion, Table } from "../../../../../../uikit";
import { EAccordionItems } from "../../types";

export const TableItem = () => {

  return (
    <Accordion.Item eventKey={EAccordionItems.table}>
      <Accordion.Header>Relations Table</Accordion.Header>
      <Accordion.Body>
        <Table>
          <thead>
            <tr>
              <td>Index\Index</td>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>false</td>
              <td>false</td>
              <td>true</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>true</td>
              <td>false</td>
              <td>false</td>
              <td>true</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
            </tr>
            <tr>
              <td>2</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>true</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
            </tr>
            <tr>
              <td>3</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>true</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
              <td>false</td>
            </tr>
          </tbody>
        </Table>
      </Accordion.Body>      
    </Accordion.Item>
  )

}