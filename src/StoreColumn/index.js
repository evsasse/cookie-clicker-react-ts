import React from "react";

function StoreColumn({ cookies, grandmas, cursors, buy }) {
  const cursorPrice = parseInt(15 * (1.2 ** cursors));
  const cursorUnavailable = cookies < cursorPrice;

  const grandmaPrice = parseInt(100 * (1.2 ** grandmas));
  const grandmaUnavailable = cookies < grandmaPrice;

  return (
    <div>
      <button
        className="btn btn-outline-dark mb-3 w-100"
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

      <button
        className="btn btn-outline-dark mb-3 w-100"
        disabled={grandmaUnavailable}
        onClick={() => buy('grandmas', grandmaPrice)}
      >
        <div class="row no-gutters align-items-center">
          <div class="col-2">
            <i class="fas fa-heart mr-2"></i>
          </div>

          <div class="col-10 text-left">
            Buy grandma for <strong>{ grandmaPrice }</strong><br />
            <span className="small text-muted">
              Current level: { grandmas }
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default StoreColumn;
