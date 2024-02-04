import React from "react";
import "./noticestyle.css";
import sanityClient from "../../client";
import { useEffect, useState } from "react";
const Notice = () => {
  const [notice, setnotice] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="notice"]{
          title,
          filename{
            asset->{
              _id,
              url
            },
          },
          releaseDate
      }`
      )
      .then((data) => setnotice(data))
      .catch(console.error);
      console.log(notice)
  }, []);
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
                    {notice && notice.map((item,e) => (
                      (
                        <li key={item.releaseDate}>
                          <div className="timeline-time lg:block md:block hidden">
                            <span className="date">{item.releaseDate}</span>
                            
                          </div>

                          <div className="timeline-icon">
                            <a href="/">&nbsp;</a>
                          </div>

                          <div className="timeline-body ">
                            <div className="timeline-header">

                              <span className="username">
                                <p className=" text-right text-sm font-medium">Notice {e+1}</p>
                              </span>

                            </div>
                            <div className="timeline-content">
                              
                              <a href={item.filename.asset.url}
                                target="_blank"
                                rel="noreferrer" className="text-[18px] text-black font-medium">
                                {item.title}
                              </a>
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
