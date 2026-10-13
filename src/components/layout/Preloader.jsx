"use client";

import { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, 4500);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 5200);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`zz-preloader${exiting ? " zz-preloader--exit" : ""}`}
      role="status"
      aria-label="Loading Zama Zama Auto Fitment Center"
    >
      <div className="zz-preloader__content">
        <div className="zz-preloader__track">
          <div className="zz-preloader__wheel" aria-hidden="true">
            <div className="zz-preloader__tread">
              {Array.from({ length: 24 }, (_, index) => (
                <span
                  className="zz-preloader__groove"
                  key={index}
                  style={{ "--groove-index": index }}
                />
              ))}

              <div className="zz-preloader__sidewall">
                <div className="zz-preloader__rim">
                  {Array.from({ length: 10 }, (_, index) => (
                    <span
                      className="zz-preloader__spoke"
                      key={index}
                      style={{ "--spoke-index": index }}
                    />
                  ))}

                  <div className="zz-preloader__hub">
                    <span>ZZ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="zz-preloader__brand">
          <span className="zz-preloader__name">
            ZAMA ZAMA<span className="zz-preloader__dot">.</span>
          </span>
          <span className="zz-preloader__subtitle">
            AUTO FITMENT CENTER
          </span>
        </div>

        <div className="zz-preloader__progress" aria-hidden="true">
          <span />
        </div>

        <p className="zz-preloader__message">
          GETTING YOU ROAD READY
        </p>
      </div>
    </div>
  );
}
