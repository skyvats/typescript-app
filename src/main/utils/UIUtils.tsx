import React from "react";

export class UIUtils {
    
    static nullOrEmpty=(value:any)=>{
      const valueType = Object.prototype.toString.call(value);
  
      // Check for undefined or null
      if (value === undefined || value === null) {
        return true;
      }
  
      // Check for different types
      switch (valueType) {
        case '[object String]':
          return value.trim() === ''; // Empty string or whitespace
        case '[object Array]':
          return value.length === 0;  // Empty array
        case '[object Object]':
          return Object.keys(value).length === 0; // Empty object
        case '[object Number]':
          return isNaN(value); // NaN is considered empty
        case '[object Boolean]':
          return false; // Boolean can't be empty
        case '[object Map]':
        case '[object Set]':
          return value.size === 0; // Empty Map or Set
        case '[object Date]':
          return isNaN(value.getTime()); // Invalid date is considered empty
        case '[object Function]':
          return false; // Functions are not empty
        default:
          return false; // For other types (like symbols), not considered empty
      }
    }
  }
  