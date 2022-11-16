import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import './widget.scss';

const Widget = ({ type }) => {
  let data;
  // temp
  const amount = 500;
  const diff = 30;

  switch (type) {
    case "students":
            data = {
                title: "STUDENTS",
                isMoney:false,
                link:"See details",
                icon:(
                <PersonOutlineOutlinedIcon className='icon' style={{color:"crimson", backgroundColor:"#ff000033"}}
                />
                ),
      };
      break;
      case "House Owner":
        data={
            title:"HOUSE OWNER",
            isMoney:false,
            link:"See details",
            icon:(
            <PersonOutlineOutlinedIcon className='icon' style={{color:"goldenrod", backgroundColor:"#daa52033"}}
            />
            ),
      };
      break;
      case "earnings":
        data={
            title:"TOTAL EARNINGS",
            isMoney:true,
            link:"View net earnings",
            icon:(
            <MonetizationOnOutlinedIcon className='icon' style={{color:"green", backgroundColor:"#00800033"}}
            />
            ),
      };
      break;
      case "order":
        data={
            title:"ORDERS",
            isMoney:false,
            link:"View all orders",
            icon:(
            <PersonOutlineOutlinedIcon className='icon'
            />
            ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
        <KeyboardArrowUpOutlinedIcon/>
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
