"use client";

import { useEffect, useState } from "react";

function ContentCards() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (show) {
    return (
      <>
        {/* @ts-expect-error */}
        <content-cards className="content-cards-container">
          <div className="content-cards-header">
            <span className="cch--title">Notifications</span>
            <div className="cch--button_container">
              <button id="refresh" className="cch-btn ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.2214 5.61189L15 7.83333L22 9L20.8333 2L18.2866 4.54677C16.5895 3.11436 14.3948 2.25 12 2.25C6.61509 2.25 2.25 6.61509 2.25 12C2.25 17.3849 6.61509 21.75 12 21.75C15.9996 21.75 19.4347 19.3424 20.9385 15.9002C21.1043 15.5207 20.931 15.0785 20.5514 14.9127C20.1719 14.7469 19.7297 14.9202 19.5639 15.2998C18.2903 18.2152 15.3822 20.25 12 20.25C7.44351 20.25 3.75 16.5565 3.75 12C3.75 7.44351 7.44351 3.75 12 3.75C13.9811 3.75 15.7987 4.44772 17.2214 5.61189Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </button>

              <button id="close" className="cch-btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76256 4.17678 5.23744 4.46967 5.53033L10.9393 12L4.46967 18.4697C4.17678 18.7626 4.17678 19.2374 4.46967 19.5303C4.76256 19.8232 5.23744 19.8232 5.53033 19.5303L12 13.0607L18.4697 19.5303C18.7626 19.8232 19.2374 19.8232 19.5303 19.5303C19.8232 19.2374 19.8232 18.7626 19.5303 18.4697L13.0607 12L19.5303 5.53033C19.8232 5.23744 19.8232 4.76256 19.5303 4.46967C19.2374 4.17678 18.7626 4.17678 18.4697 4.46967L12 10.9393L5.53033 4.46967Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="content-cards-main">
            <div className="content-cards-wrapper">
              <svg
                className="rotate"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.2214 5.61189L15 7.83333L22 9L20.8333 2L18.2866 4.54677C16.5895 3.11436 14.3948 2.25 12 2.25C6.61509 2.25 2.25 6.61509 2.25 12C2.25 17.3849 6.61509 21.75 12 21.75C15.9996 21.75 19.4347 19.3424 20.9385 15.9002C21.1043 15.5207 20.931 15.0785 20.5514 14.9127C20.1719 14.7469 19.7297 14.9202 19.5639 15.2998C18.2903 18.2152 15.3822 20.25 12 20.25C7.44351 20.25 3.75 16.5565 3.75 12C3.75 7.44351 7.44351 3.75 12 3.75C13.9811 3.75 15.7987 4.44772 17.2214 5.61189Z"
                  fill="#5A5A5A"
                />
              </svg>
            </div>
          </div>
          {/* @ts-expect-error */}
        </content-cards>
        {/* eslint-disable-next-line */}
        <link
          href="//checkout.overstock.com/cdn/shop/t/69/assets/content-cards.css?v=33493646339880876491720759668"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
      </>
    );
  }

  return null;
}

export default ContentCards;
