import React from "react";
import classNames from "classnames/bind";
// import styles from "./CSSModule.module.css";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles);
// styles에서 미리 클래스를 받아오게 설정.

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      와우 <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
