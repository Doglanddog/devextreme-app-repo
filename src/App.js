import React, { useEffect, useState } from 'react'

import 'devextreme/dist/css/dx.common.css'
import './themes/generated/theme.base.css'
import './themes/generated/theme.additional.css'
import './dx-styles.scss'

import {
  DataGrid,
  Column,
  Editing,
  HeaderFilter,
  FilterRow,
  SearchPanel,
  Paging,
  Pager,
  GroupPanel,
  Grouping,
  Export,
  Summary,
  TotalItem,
  Scrolling
} from 'devextreme-react/data-grid'

//Add API extensions here
import { fetchVoters } from './api/voterService'
import { Header } from './components'
import { Navigate } from 'react-router-dom'


function App () {
  const [voters, setVoters] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchVoters()
      .then(data => {
        setVoters(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
        console.error('An error occurred while fetching data:', error)
      })
  }, [])

  //Loading conditions
  if (loading) return <div>Loading...</div>

  //Error conditions
  if (error)
    return (
      <div>An error occurred while fetching data. Please try again later.</div>
    )

  return (
    <div style={{ backgroundColor: 'ltblue' }}>
      <DataGrid
        allowSorting={true}
        allowColumnResizing={true}
        allowColumnReordering={true}
        columnAutoWidth={true}
        dataSource={voters}
        keyExpr='StateID'
        sortMode='multiple'
      >
        <Scrolling mode='virtual' />
        <Export enabled={true} />
        <Grouping autoExpandAll={false} />
        <GroupPanel visible={true} />
        <Paging defaultPageSize={10} />
        {/*} {*/}

        <Column dataField='CountyID'> </Column>
        <Column dataField='StateID' sortOrder='asc'></Column>
        <Column dataField='Status'> </Column>
        <Column dataField='County'> allowHeaderFiltering={true} </Column>
        <Column dataField='Precinct'> </Column>
        <Column dataField='First'> </Column>
        <Column dataField='Last'> </Column>
        <Column dataField='Middle'> </Column>
        <Column dataField='Phone'> </Column>
        <Column dataField='email'> </Column>
        <Column dataField='BirthDate'> </Column>
        <Column dataField='RegDate'> </Column>
        <Column dataField='Party'> </Column>
        <Column dataField='StreetNo'> </Column>
        <Column dataField='StreetName'> </Column>
        <Column dataField='Address1'> </Column>
        <Column dataField='City'> </Column>
        <Column dataField='State'> </Column>
        <Column dataField='RegisteredDays'> </Column>
        <Column dataField='Age'> </Column>
        <Column dataField='TotalVotes'> </Column>
        <Column dataField='Generals'> </Column>
        <Column dataField='Primaries'> </Column>
        <Column dataField='Polls'> </Column>
        <Column dataField='Absentee'> </Column>
        <Column dataField='Early'> </Column>
        <Column dataField='Provisional'> </Column>
        <Column dataField='LikelytoVote'> </Column>
        <Column dataField='Score'> </Column>

        <HeaderFilter visible={true} />
        <FilterRow visible={true} />
        <SearchPanel visible={true} />
        <Editing
          mode='popup'
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
        />
        <Summary>
          <TotalItem column='TotalVotes' summaryType='sum' />
        </Summary>
      </DataGrid>
    </div>
  )
}

export default App
