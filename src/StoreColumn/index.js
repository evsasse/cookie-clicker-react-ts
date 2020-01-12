import React from "react";

function StoreColumn({ cookies,  cursors, buy }) {
  const cursorPrice = parseInt(15 * (1.2 ** cursors));
  const cursorUnavailable = cookies < cursorPrice;

  return (
    <div>
      <button
        className="btn btn-outline-dark w-100"
        disabled={cursorUnavailable}
        onClick={() => buy('cursors', cursorPrice)}
      >
        <div class="row no-gutters align-items-center">
          <div class="col-2">
            <i class="fas fa-hand-point-up mr-2"></i>
          </div>

          <div class="col-10 text-left">
            Buy cursor for <strong>{ cursorPrice }</strong><br />
            <span className="small text-muted">
              Current level: { cursors }
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default StoreColumn;
