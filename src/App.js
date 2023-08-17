import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import React from 'react';
//import { HashRouter as Router } from 'react-router-dom';
import './dx-styles.scss';
//import LoadPanel from 'devextreme-react/load-panel';
//import { NavigationProvider } from './contexts/navigation';
//import { AuthProvider, useAuth } from './contexts/auth';
//import { useScreenSizeClass } from './utils/media-query';
//import Content from './Content';
//import UnauthenticatedContent from './UnauthenticatedContent';

import axios from "axios";

// <ColumnFixing enable={true} />

import {
  DataGrid,
  Column,
  Editing,
  FilterRow,
 // RequiredRule,
  SearchPanel
 // Toolbar

} from 'devextreme-react/data-grid';
//import { Button } from 'devextreme-react/button'

import {nv1000} from './nv1000'; 

   /*CountyID, StateID, Status, County, Precinct, First,
   Last, Middle, Phone, email, BirthDate, RegDate, Party,
   StreetNo, StreetName, Address1, City, State, Zip, 
   RegisteredDays, Age, TotalVotes, Generals, Primaries, Polls, 
   Absentee, Early, Provisional, LikelytoVote, Score

              <Column dataField="Position"></Column>
              <Column
                  dataField="BirthDate"
                  dataType="date"
                  width={100}>
              </Column>
   */

function App() {
/*
  const baseURL = "http://localhost:3001/get/voters";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    /*
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
    
  }, []);

  if (!post) return null;
  */

  return (
      <div className="App">
          <DataGrid 
              columnAutoWidth={true}
              dataSource={nv1000}
              keyExpr="StateID" > 
             {/* allowColumnReordering={true}  */}
              {/* ... */}
              <Column dataField="CountyID" sortOrder="asc"> </Column>
              <Column dataField="StateID" > </Column>
              <Column dataField="Status" > </Column>
              <Column dataField="County"  > </Column>
              <Column dataField="Precinct"  > </Column>
              <Column dataField="First"  > </Column>
              <Column dataField="Last"  > </Column>
              <Column dataField="Middle"  > </Column>
              <Column dataField="Phone"  > </Column>
              <Column dataField="email"  > </Column>
              <Column dataField="BirthDate"  > </Column>
              <Column dataField="RegDate"  > </Column>
              <Column dataField="Party"  > </Column>
              <Column dataField="StreetNo"  > </Column>
              <Column dataField="StreetName"  > </Column>
              <Column dataField="Address1"  > </Column>
              <Column dataField="City"  > </Column>
              <Column dataField="State"  > </Column>
              <Column dataField="RegisteredDays"  > </Column>
              <Column dataField="Age"  > </Column>
              <Column dataField="TotalVotes"  > </Column>
              <Column dataField="Generals"  > </Column>
              <Column dataField="Primaries"  > </Column>
              <Column dataField="Polls"  > </Column>
              <Column dataField="Absentee"  > </Column>
              <Column dataField="Early"  > </Column>
              <Column dataField="Provisional"  > </Column>
              <Column dataField="LikelytoVote"  > </Column>
              <Column dataField="Score"  > </Column>
            
              <FilterRow visible={true} />
              <SearchPanel visible={true} />
              <Editing
                    mode="popup"
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                />

          </DataGrid>
      </div>
  );
}

export default App;

