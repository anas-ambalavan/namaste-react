import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { AccordionType, SupportURLType } from "../utils/constants";
import AccordionItem from "./AccordionItem";
import ThemeContext from "../utils/ThemeContext";

class Support extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      ),
      supportInfo: [],
      showIndex: null,
    };
    this.fetchDetails = this.fetchDetails.bind(this);
    this.setShowIndex = this.setShowIndex.bind(this);
  }

  componentDidMount() {
    this.fetchDetails();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentId !== prevState.currentId) {
      this.fetchDetails();
    }
  }

  async fetchDetails() {
    let URL;
    if (this.state.currentId === SupportURLType.partner)
      URL = process.env.REACT_APP_SUPPORT_PARTNER_API;
    else if (this.state.currentId === SupportURLType.legal)
      URL = process.env.REACT_APP_SUPPORT_LEGAL_API;
    else if (this.state.currentId === SupportURLType.faq)
      URL = process.env.REACT_APP_SUPPORT_FAQ_API;

    const data = await fetch(URL);
    const json = await data.json();

    this.setState({
      supportInfo: json?.data?.issues,
    });
  }

  setShowIndex(index) {
    this.setState({
      showIndex: index,
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(data) => (
          <div
            className={`support-container ${data?.state?.darkMode && "dark"}`}
          >
            <div className={`support-main ${data?.state?.darkMode && "dark"}`}>
              <div className="support-header">
                <h1>Help & Support</h1>
                <p>Let's take a step ahead and support you better.</p>
              </div>
              <div
                className={`support-body ${data?.state?.darkMode && "dark"}`}
              >
                <nav
                  className={`support-sidenav ${
                    data?.state?.darkMode && "dark"
                  }`}
                >
                  <ul>
                    <li>
                      <NavLink
                        to={"/support/issues/partner-onboarding"}
                        className={"reset-link"}
                        onClick={() =>
                          this.setState({ currentId: SupportURLType.partner })
                        }
                      >
                        Partner Onboarding
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/support/issues/legal"}
                        className={"reset-link"}
                        onClick={() =>
                          this.setState({ currentId: SupportURLType.legal })
                        }
                      >
                        Legal
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/support/issues/faq"}
                        className={"reset-link"}
                        onClick={() =>
                          this.setState({ currentId: SupportURLType.faq })
                        }
                      >
                        FAQs
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="support-contents">
                  <h2>
                    {this.state.supportInfo?.meta?.type
                      .split("-")
                      .map(
                        (item) => item.charAt(0).toUpperCase() + item.slice(1)
                      )
                      .join(" ")}
                  </h2>
                  {this.state.supportInfo?.data?.map((info, index) => {
                    if (info.description) {
                      const key = info.id;
                      return (
                        <AccordionItem
                          key={key}
                          title={info.title}
                          type={AccordionType.normal}
                          itemDescriptions={info.description}
                          showItems={
                            key === this.state.showIndex ? true : false
                          }
                          setShowIndex={this.setShowIndex}
                          index={key}
                        />
                      );
                    } else return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Support;
