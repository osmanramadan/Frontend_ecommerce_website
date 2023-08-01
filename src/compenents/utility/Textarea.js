import React from 'react';

function Textarea({ rows, txt, center }) {
  return (
    <textarea
      className={
        center
          ? 'mx-2 px-2 textarea-comment text-center'
          : 'mx-2 px-2 textarea-comment'
      }
      style={{ width: '100%' }}
      rows={rows}
      cols="50"
      placeholder={txt}
    ></textarea>
  );
}

export default Textarea;
