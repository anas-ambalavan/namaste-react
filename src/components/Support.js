import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {
  AccordionType,
  SUPPORT_FAQ_API,
  SUPPORT_LEGAL_API,
  SUPPORT_PARTNER_API,
  SupportURLType,
} from "../utils/constants";
import Accordion from "./Accordion";

class Support extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      ),
      supportInfo: [],
    };
    this.fetchDetails = this.fetchDetails.bind(this);
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
      URL = SUPPORT_PARTNER_API;
    else if (this.state.currentId === SupportURLType.legal)
      URL = SUPPORT_LEGAL_API;
    else if (this.state.currentId === SupportURLType.faq) URL = SUPPORT_FAQ_API;

    const data = await fetch(URL);
    const json = await data.json();

    this.setState({
      supportInfo: json?.data?.issues?.data,
    });
  }

  render() {
    return (
      <div className="support-container">
        <div className="support-main">
          <div className="support-header">
            <h1>Help & Support</h1>
            <p>Let's take a step ahead and support you better.</p>
          </div>
          <div className="support-body">
            <nav className="support-sidenav">
              <ul>
                <li>
                  <NavLink
                    to={"/support/issues/partner-onboarding"}
                    className={"reset-link"}
                    onClick={() =>
                      this.setState({ currentId: SupportURLType.partner })
                    }
                  >
                    {" "}
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
              <h2>Partner Onboarding</h2>
              {this.state.supportInfo?.map((info) => {
                if (info.description)
                  return (
                    <Accordion
                      key={info.id}
                      title={info.title}
                      type={AccordionType.normal}
                      itemDescriptions={info.description}
                    />
                  );
                else return null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Support;
