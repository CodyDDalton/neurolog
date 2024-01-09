import React from 'react';

const Result = props => {  
  return (
    <article style={styles.card}>                 
      <div style={styles.cardContent}>
        <h3>{props.city}</h3>
        <p>{props.state}</p>
      </div>  
    </article>
  )
}
export default Result;

const styles= {
  card: {
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '250px', 
    height: '300px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    textAlign: 'center',
    border: '1px solid #CAD0D2',
    overflow: 'hidden',
    margin: '2%'
  },
}