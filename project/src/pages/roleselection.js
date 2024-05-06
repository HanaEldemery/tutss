import React, { useState } from "react";
import { Link } from 'react-router-dom';

function roleselection() {
   

        
    
    

    return (
        <div>
            <h1>How Will You Contribute to Our Organization?</h1>
            <Link to="/doctorrole">
        <button> Doctor </button>
      </Link>
      <Link to="/teacherrole">
        <button> Teacher </button>
      </Link>
      <Link to="/donorrole">
        <button> Regular Donor </button>
      </Link>
 
          </div>
        );
      }
    


export default roleselection;
