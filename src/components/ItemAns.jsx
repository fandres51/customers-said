import React from 'react';

const ItemAns = ({ name, number, selected, onClick }) => {
  const backgroundColor = selected ? 'white' : '#dc1b33';

  return (
    <div style={{
      padding: 30, 
      border: '1px solid #dc1b33',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: backgroundColor,
      color: '#dc1b33',
      cursor: 'pointer',
      maxWidth: 1000,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 30,
      borderRadius: 20,
      fontSize: 25,
      fontWeight: 'bold',
    }} onClick={onClick}>
      <span>{name}</span>
      <span>{number}</span>
    </div>
  )
}

export default ItemAns;