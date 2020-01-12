import React from "react";

function CookieColumn({ cookies, cookiesPerSecond, onClickCookie }) {
  return (
    <div class="text-center">
      <p class="h3">{cookies}</p>

      <p class="text-muted">{cookiesPerSecond} p/s</p>

      <button class="btn btn-outline-dark border-0 p-3 rounded-circle" onClick={onClickCookie}>
        <i class="fa fa-4x fa-cookie"></i>
      </button>
    </div>
  );
}

export default CookieColumn;
