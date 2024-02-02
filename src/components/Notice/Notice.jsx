import React from "react";
import "./noticestyle.css";
const data = [
  {
    id: 1,
    date : "today",
    time : "04:20",
    content : "Welcome to our new notice board, this is a place for all the important notices and updates that you need to know about."
  },
  
  
]
const Notice = () => {
  return (
    <div className=" flex-col  h-full">
      <div className="flex justify-center mt-8 items-center flex-col">

      <h3 className="text-center text-4xl text-amber-700 pt-5 ">NOTICE BOARD</h3>
      <div className="border-[2px]  border-amber-600 mt-2 w-[10%]"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content  content-full-width">
            <div className="profile-content py-8">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <ul className="timeline ">
                    {data.map((item)=>(
                       (
                    <li key={item.id}>
                      <div className="timeline-time">
                        <span className="date">{item.date}</span>
                        <span className="time">{item.time}</span>
                      </div>

                      <div className="timeline-icon">
                        <a href="/">&nbsp;</a>
                      </div>

                      <div className="timeline-body ">
                        <div className="timeline-header">
                          
                          <span className="username">
                            <p className=" text-right">Notice {item.id}</p> 
                          </span>
                          
                        </div>
                        <div className="timeline-content">
                          <p className="text-[18px] text-black font-normal">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </li>)))}
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
