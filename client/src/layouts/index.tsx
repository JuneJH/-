import React, {FC} from "react";
import style from "./index.less";
import Menu from "@/components/menu";
const Layout :FC = (props)=>{

  return (<div className={style.container}>
    <header className={style.header}>
      <Menu/>
    </header>
    <div className={style.main}>{props.children}</div>
  </div>);
}


export  default  React.memo(Layout);
