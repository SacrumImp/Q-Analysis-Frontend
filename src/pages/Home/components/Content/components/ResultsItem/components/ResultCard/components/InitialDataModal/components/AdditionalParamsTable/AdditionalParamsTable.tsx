import { FC } from "react";
import {
  Text,
  Table,
} from "../../../../../../../../../../../../uikit";
import { IAdditionalParamsTableProps } from "./types";

export const AdditionalParamsTable:FC<IAdditionalParamsTableProps> = (props) => {

  const { additionalParams } = props

  if (!Object.entries(additionalParams).length) return null

  return (
    <section>
      <Text>
        Additional Params: 
      </Text>
      <Table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(additionalParams).map((value, index) => (
              <tr key={index}>
                <td>{value[0]}</td>
                <td>{value[1]}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </section>
  )

}