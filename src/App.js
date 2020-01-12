import React from "react";

import CookieColumn from "./CookieColumn";
import StatsColumn from "./StatsColumn";
import StoreColumn from "./StoreColumn";

class App extends React.Component {
  state = {
    cookies: 0,
    cookiesPerSecond: 0,
    allTimeCookies: 0,
    allTimeClicks: 0,

    cursors: 0,
    grandmas: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);

    this.refreshCookiesPerSecond();
  }

  tick = () => {
    this.addCookies(this.state.cookiesPerSecond * 0.1);
  };

  refreshCookiesPerSecond = () => {
    this.setState(prevState => {
      let cookiesPerSecond = 0;
      cookiesPerSecond += prevState.cursors * 0.1;
      cookiesPerSecond += prevState.grandmas * 1;

      return { cookiesPerSecond };
    });
  }

  buy = (what, price) => {
    this.setState(prevState => ({
      [what]: prevState[what] + 1,
      cookies: prevState.cookies - price,
    }));

    this.refreshCookiesPerSecond();
  }

  onClickCookie = () => {
    this.setState(prevState => ({ allTimeClicks: prevState.allTimeClicks + 1 }));
    this.addCookies(1);
  }

  addCookies = cookies => {
    this.setState(prevState => ({
      cookies: prevState.cookies + cookies,
      allTimeCookies: prevState.allTimeCookies + cookies
    }));
  };

  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-3">
            <CookieColumn
              {...this.state}
              onClickCookie={this.onClickCookie}
            />
          </div>

          <div className="col-6">
            <StatsColumn
              {...this.state}
            />
          </div>

          <div className="col-3">
            <StoreColumn
              {...this.state}
              buy={this.buy}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
