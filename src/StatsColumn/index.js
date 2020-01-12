import React from "react";

function StatsColumn({ allTimeCookies, allTimeClicks }) {
  return (
    <div>
      <ul>
        <li>
          <strong>All time cookies:</strong> { allTimeCookies }
        </li>
        <li>
          <strong>All time clicks:</strong> { allTimeClicks }
        </li>
      </ul>
    </div>
  );
}

export default StatsColumn;
