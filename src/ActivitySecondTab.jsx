import React from 'react';
import ActivitySecond from './ActivitySecond';

export default function ActivitySecondTab (){
      let styles = {
           display: "flex",
           flexWrap: "wrap",
           justifyContent: "center",
      }
      return(
        <div style={styles}>
          <ActivitySecond  title="Logitech MX Master" idx={0}/>
          <ActivitySecond  title="Apple Pencil (2nd Gen)" idx={1}/>
          <ActivitySecond  title="Zebronics Zeb-transformer" idx={2}/>
          <ActivitySecond  title="Pertronics Toad 23" idx={3}/>
        </div>
      )    
}