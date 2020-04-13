import React from 'react';

const footer = () => {
  return (
    <div>
      <h4>Instructions</h4>
      <p>
        This calculator uses Reverse Polish or Postfix notation. Values are followed by operators. To see this in action, let's try adding 4 and 5 together. In the more common Infix notation, this would be written as <code>4 + 5</code>. However, in Reverse Polish notation, we write it <code>4 5 +</code>. To calculate this we
      </p>
      <ol>
        <li>Type <code>4</code>. It should show up on the display.</li>
        <li>Press the <i className="fas fa-arrow-up"></i> button or the "Return" key. This pushes the value onto our stack of numbers and resets the display to zero.</li>
        <li>Type <code>5</code>.</li>
        <li>Press the + button. This evaluates the value at the top of the stack (currently 4) with the value on the display using the addition operator. The display should now read 9.</li>
      </ol>
    </div>
  )
};

export default footer;
              
                
             
              